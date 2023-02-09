export function VistaListado(divListado,controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				div: divListado,
			}
		},
		template:
		`
               <div id="divWonderLeague">
                    <h1> Resultado de la Búsqueda </h1>
                    <div class="contenedor">
                        <img  tabindex="10"src="./assets/realmadrid.png" class="imgEscudo" alt="Escudo Real madrid">
                        <div class="divsFormularios partidos">
                            <label>Nombre:&nbsp;</label>
                            <p tabindex="11"aria-label="equipo real madrid">Real Madrid C.F</p> 
                        </div>
                        <div class="divsFormularios puntos">
                            <label>Descripción:&nbsp;</label>
                            <p role="text" tabindex="12" aria-label="descripcion real madrid"class="descripcion">El Real Madrid Club de Fútbol, más conocido simplemente como Real Madrid, es una entidad polideportiva con sede en Madrid, España. Fue declarada oficialmente registrada como club de fútbol por sus socios el 6 de marzo de 1902 con el objeto de la práctica y desarrollo de este deporte —si bien sus orígenes datan del año 1900.</p>
                        </div>
                        <div class="divsFormularios goalaverage" >
                            <label>Fecha de Fundación:&nbsp;</label>
                            <p tabindex="13" aria-label="6 de marzo de 1902 ">6 de marzo de 1902</p>
                        </div>
                        <div class="divsFormularios golesaf">
                            <label>Comunidad Autónoma:&nbsp;</label><br>
                            <p tabindex="14"aria-label="Comunidad de Madrid"class="titulos">Comunidad de Madrid</p>
                        </div>
                        <div class="divsFormularios golesec">
                            <label>Reacién Ascendido:&nbsp;</label>
                            <p tabindex="15"aria-label="no recien ascendido">No</p>
                        </div>
                        <div class="divsFormularios btnEditar">
                            <a href="../Mockup_modificacion/Mockup_modificacion.html"><button>Editar</button></a>
                        </div>
                    </div>
               </div>
          `,
		methods: {
			mostrar(ver){
				if (ver)
					this.div.show(1)
				else
					this.div.hide(1)
			},
		}
	})
}