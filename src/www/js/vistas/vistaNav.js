import {VistaEquipos} from '../vistas/vistaEquipos.js'

export function VistaNav(nav,vistaEquipos,controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				nav: nav,
                equipos: vistaEquipos,
			}
            
		},
		template: 
		`
        <input type="checkbox" id="check" />
        <label tabindex="2" role="menuitemcheckbox" for="check" id="btnMenu" >
            <img src="./assets/menu.png" alt="Icono de menú"/>
        </label>
        <ul>
            <li @click=pulsarLiga tabindex="1" role="menuitem" aria-label="logo wonder league" id="flex0"><img href="./index.html" src="./assets/logo-proyecto.png" alt="Logo Wonder League"/></li>
            <li @click=pulsarLiga tabindex="2" role="menuitem"><a class="opciones" id="liLiga">Liga</a></li>
            <li @click=pulsarEquipos @mouseover=mostrarAemet tabindex="3" role="menuitem"><a class="opciones" id="liEquipos">Equipos</a></li>
            <li class="opciones" ><a id="busqueda" ><label for="busquedaaa" aria-label="botón para búsqueda"><button  @click=pulsarNavListado tabindex="4">🔎</button></label></a><input tabindex="5" id="busquedaaa" type="text" aria-label="escribe busqueda" role="text"></li>
        </ul>
        `,
		methods: {
            /**
             * método para ir a la vista liga al pulsar el botón de liga del menú y el logo
             */
            pulsarLiga() {
                this.controlador.pulsarNavLiga()
            },
            /**
             * método para ir a la vista equipos al pulsar el botón de equipos del menú
             */
            pulsarEquipos() {
                this.controlador.pulsarNavEquipos()
                this.equipos.pulsarEquipo()
            },
            /**
             * método para ir a la vista de la búsqueda al pulsar el botón de la lupa del menú
             */
            pulsarNavListado() {
                this.controlador.pulsarListado()
            },
            mostrarAemet() {
                this.equipos.mostrarAemet()
            },
			
		}
	})
}