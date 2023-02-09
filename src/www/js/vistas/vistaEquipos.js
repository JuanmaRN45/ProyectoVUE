export function VistaEquipos(divEquipos,controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				div:divEquipos,
				lista: [{
					nombre: 'hola',
				}],
				divWonder: $('.divWonder').eq(1),
				footer: $('#footer').eq(0),
			}
		},
		template:
		`
		<div id="divWonderLeague" class="divWonder">
			<h1> EQUIPOS </h1>
			<div class="contenedor" v-for="listas in lista">
				<img  :src=listas.escudo class="imgEscudo" alt="Escudo Real madrid">
				<div class="divsFormularios partidos">
					<label>Nombre:&nbsp;</label>
					<p>{{listas.nombre}}</p>
				</div>
				<div class="divsFormularios puntos">
					<label>Descripción:&nbsp;</label>
					<p class="descripcion">{{listas.descripcion}}</p>
				</div>
				<div class="divsFormularios goalaverage" >
					<label>Fecha de Fundación:&nbsp;</label>
					<p>{{listas.fechaCreacion}}</p>
				</div>
				<div class="divsFormularios golesaf">
					<label>Comunidad Autónoma:&nbsp;</label>
					<p class="titulos">{{listas.comunidad}}</p>
				</div>
				<div class="divsFormularios golesec">
					<label>Reacién Ascendido:&nbsp;</label>
					<p v-if="listas.ascendido">Si</p>
					<p v-else>No</p>
				</div>
				<div class="divsFormularios btnEditar">
					<button>Editar</button>
					<button @click=borrar()>Eliminar</button>
				</div>
			</div>
		</div>
		`,
		methods: {
			pulsarEquipo(){
          		this.listar()
			},
			mostrarAemet(){
				this.copy = $('<p></p>')
				this.copy.attr('tabindex',800)
				this.copy.attr('aria-label',this.copy.val())
				this.footer.append(this.copy)
				this.aemet()
			},
			
			mostrar(ver){
				
				if (ver)
					this.div.show(1)
				else
					this.div.hide(1)
			},
			/**
			 * Método para inserción de la api de la aemet en un p en el footer al hacer mouseover en el apartado de menú de equipos
			 */
			aemet()
			{
				const clave = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXZpZHNhY2hlMDhAZ21haWwuY29tIiwianRpIjoiZTQ2ZDNlNWEtMjQ1Ni00ZDUyLTg0ZjYtYjc2ZjFjOThkOTAyIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE2NzQ1NzM5NjMsInVzZXJJZCI6ImU0NmQzZTVhLTI0NTYtNGQ1Mi04NGY2LWI3NmYxYzk4ZDkwMiIsInJvbGUiOiIifQ.mFEFzKjKcpHxvyinDg6iXDen6I2cdKBExm0Qb_ke5aY';
				let peticion = {
					'async': true,
					'crossDomain': true,
					'url': 'https://opendata.aemet.es/opendata/api/prediccion/provincia/hoy/06/?api_key=' + clave,
					'method': 'GET',
					'headers': {
						'cache-control': 'no-cache'
					}
				};
	
				$.ajax(peticion)
				.done((response) => {
					if(response.estado == 200) {
						// Obtener los datos de la respuesta
						$.ajax(response.datos)
								.done((response) => {
									this.copy.val()
									this.copy.text(response)
								})
					}
				})
			},
			/**
			 * Método para listar y crear dinámicamente las tarjetas en el apartado equipos
			 */
			listar(){
				this.divWonder.empty()
				const peticion =window.indexedDB.open("WonderLeague")
				peticion.onsuccess= ((evento) =>{
					this.bd=evento.target.result;	
					console.log('Base de datos cargada.')
					const objectStore =this.bd.transaction('Equipos', 'readonly').objectStore('Equipos')
					const peticion = objectStore.getAll()
					peticion.onsuccess= (function(){
						this.lista= peticion.result
						console.log(this.lista)
					}).bind(this)
				}).bind(this)
			},
			borrar(){
				const peticion =window.indexedDB.open("WonderLeague")
				peticion.onsuccess= ((evento) =>{
					this.bd=evento.target.result;
					const peticion = this.bd.transaction('Equipos', 'readwrite').objectStore('Equipos').delete();
					const peticion2 = this.bd.transaction('Equipos', 'readonly').objectStore('Equipos').getAll();
				}).bind(this)
			}
		},
		
	})
}