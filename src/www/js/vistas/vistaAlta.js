import {Equipos} from '../modelos/equipos.js'
export function VistaAlta(divAlta,controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				div: divAlta,
                datos:{
                    escudo: '',
                    nombre: '',
                    descripcion: '',
                    fecha: '',
                    liga: '',
                    colores: [],
                    ascendido: '',
                    comunidad: '',
                    terminos: '',
                    base64: null,
                }
			}
		},
		template:
		`
        <div id="divWonderLeague">
            <h1>AÑADIR NUEVO EQUIPO</h1>
            <form>
                <fieldset class="divsFormularios" id="escudo">
                    <label for="inputfile">Escudo:&nbsp;</label>
                    <input id="inputfile" type="file" :src=datos.escudo @change=imagen1 accept="image/*">
                </fieldset>
                <fieldset class="divsFormularios" id="nombre">
                    <label for="nombreee">Nombre:&nbsp;</label>
                    <input id="nombreee" type="text" v-model="datos.nombre">
                </fieldset>
                <fieldset class="divsFormularios" id="descripcion">
                    <label for="descripciooon">Descripción:</label><br>
                    <textarea id="descripciooon" v-model="datos.descripcion"></textarea>
                </fieldset>
                <fieldset class="divsFormularios" id="fecha">
                    <label for="fechaaa">Fecha de Creación:&nbsp;</label><br>
                    <input id="fechaaa" type="date" v-model="datos.fecha">
                </fieldset>
                <fieldset class="divsFormularios" id="ligas">
                    <label for="numLigas">Nº de ligas ganadas:&nbsp;</label>
                    <input id="numLigas" type="number" v-model="datos.ligas">
                </fieldset>
                <fieldset class="divsFormularios" id="colores">
                    <label for="coloreees">Colores del Equipo:</label><br>
                    <input name="colores" id="coloreees1" type="checkbox" value="Blanco" v-model="datos.colores"><label for="coloreees1">Blanco</label><br>
                    <input name="colores" id="coloreees2" type="checkbox" value="Negro" v-model="datos.colores"><label for="coloreees2">Negro</label><br>
                    <input name="colores" id="coloreees3" type="checkbox" value="Rojo" v-model="datos.colores"><label for="coloreees3">Rojo</label><br>
                    <input name="colores" id="coloreees4" type="checkbox" value="Azul" v-model="datos.colores"><label for="coloreees4">Azul</label><br>
                    <input name="colores" id="coloreees5" type="checkbox" value="Verde" v-model="datos.colores"><label for="coloreees5">Verde</label><br>
                    <input name="colores" id="coloreees6" type="checkbox" value="Amarillo" v-model="datos.colores6"><label for="coloreees6">Amarillo</label>
                </fieldset>
                <fieldset class="divsFormularios" id="ascenso">
                    <label for="ascendido">Recien ascendido:</label><br>
                    <input aria-lable="selección si om no es recien ascendido" v-model="datos.ascendido" id="ascendido1"  type="radio" name="ascendido"><label for="ascendido1">Sí</label><br>
                    <input id="ascendido2" type="radio" v-model="datos.ascendido" name="ascendido"><label for="ascendido2">No</label>
                </fieldset>
                <fieldset class="divsFormularios" id="titulos">
                    <label for="comunidad">Comunidad Autónoma</label><br>
                    <select id="comunidad" v-model="datos.comunidad">
                        <option id="comunidad" aria-label="selector desplegable de comunidad autónoma">Comunidad de Madrid</option>
                        <option>Cataluña</option>
                        <option>Andalucía</option>
                        <option>País Vasco</option>
                    </select><br><br><br>
                    <input name="aceptodatos" v-model="datos.terminos" id="aceptodatos" type="checkbox"><label for="aceptodatos"><a href="lopd.html">Acepto sin reservas<br>la política de protección<br> de datos personales</a></label><br>
                </fieldset>
            </form>
            <button @click=insertarIndex2 class="btnEnviar">Enviar</button>
        </div>
        `,
		methods: {
			mostrar(ver){
				if (ver)
					this.div.show(1)
				else
					this.div.hide(1)
			},
            /**
             * Método para inserción en IndexedDB de los datos del formulario de alta equipos
             */
            insertarIndex2(){
                if(this.datos.terminos==true){
                    let objeto = new Equipos(this.datos.base64,this.datos.nombre,this.datos.descripcion,this.datos.fecha,this.datos.ligas,this.datos.colores,this.datos.ascendido,this.datos.comunidad,this.datos.terminos)
                    this.controlador.insertar(objeto)
                    this.vaciar() 
                }
                else{
                    alert('Acepta la Política de Protección de Datos para poder continuar.')
                }
                
            },
            imagen1(event){
                let imagen = document.getElementById('inputfile')
                const archivo = imagen.files[0]
                const lector = new FileReader()

                lector.addEventListener('load',() => {
                    this.datos.base64 = lector.result
                })
                lector.readAsDataURL(archivo)
            },
            vaciar(){
                    this.datos.escudo= ''
                    this.datos.nombre= ''
                    this.datos.descripcion= ''
                    this.datos.fecha= ''
                    this.datos.liga= ''
                    this.datos.colores= []
                    this.datos.ascendido= ''
                    this.datos.comunidad= ''
                    this.datos.terminos= ''
                    this.datos.base64= null
            }
		}
	})
}