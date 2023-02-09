export function VistaLiga(divLiga,controlador){
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				div: divLiga,
			}
		},
		template:
		`
        <div id="divWonderLeague">
            <h1 tabindex="9" aria-label="titulo wonder league">WONDER LEAGUE</h1> 
            <p>
                La clasificación todavía se encuentra en desarrollo, puedes ver el listado de Equipos en el apartado "Equipos" 
                o añadir uno en el botón de "Añadir Equipo".
            </p>
        </div>
        <button @click=pulsarBotonAnadir id="anaaaaadir">Añadir Equipo</button>
        `,
		methods: {
			mostrar(ver){
                if (ver)
					this.div.show(1)
				else
					this.div.hide(1)
			},
            pulsarBotonAnadir(){
                this.controlador.pulsarAlta()
            }
		}
	})
}