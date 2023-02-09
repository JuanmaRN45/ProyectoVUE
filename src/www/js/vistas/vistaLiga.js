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
            {{tron1}}
        </div>
        <table tabindex="10"aria-label="tabla clasificacion liga">
            <thead>
                <tr>
                    <th>Posición</th>
                    <th>Escudo</th>
                    <th>Nombre</th>
                    <th>Partidos Jugados</th>
                    <th>Puntos</th>
                    <th>GF</th>
                    <th>GC</th>
                    <th>GA</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td tabindex="11"aria-label="posicion primero">1</td>
                    <td tabindex="11"aria-label="escudo real madrid"><img src="./assets/realmadrid.png" alt="Escudo Real Madrid"width="40px"height="40px" ></td>
                    <td tabindex="11"aria-label="nombre real madrid">Real Madrid</td>
                    <td tabindex="11"aria-label="partidos jugados 15">15</td>
                    <td tabindex="11"aria-label="puntos 45">45</td>
                    <td tabindex="11"aria-label="goles a favor 40">40</td>
                    <td tabindex="11"aria-label="goles en contra 23">23</td>
                    <td tabindex="11"aria-label="diferencia de goles +17">+17</td>
                    <td tabindex="11"aria-label="opciones borrar y editar">🗑️✏️</td>
                </tr>
                <tr>
                    <td tabindex="12"aria-label="posicion segundo">2</td>
                    <td tabindex="12"aria-label="escudo barsa"><img src="./assets/barsa.png" alt="Escudo  barsa"width="40px"height="40px" ></td>
                    <td tabindex="12"aria-label="nombre FC Barcelona">FC Barcelona</td>
                    <td tabindex="12"aria-label="partidos jugados 15">15</td>
                    <td tabindex="12"aria-label="puntos 42">42</td>
                    <td tabindex="12"aria-label="goles a favor 40">40</td>
                    <td tabindex="12"aria-label="goles en contra 33">33</td>
                    <td tabindex="12"aria-label="diferencia de goles +7">+7</td>
                    <td tabindex="12"aria-label="opciones borrar y editar">🗑️✏️</td>
                </tr>
                <tr>
                    <td tabindex="13"aria-label="posicion tercero">3</td>
                    <td tabindex="13"aria-label="escudo atleti"><img src="./assets/atleti.png" alt="Escudo atleti"width="40px"height="40px" ></td>
                    <td tabindex="13"aria-label="nombre Atlético de madrid">Atlético de Madrid</td>
                    <td tabindex="13"aria-label="partidos jugados 15">15</td>
                    <td tabindex="13"aria-label="puntos 36">36</td>
                    <td tabindex="13"aria-label="goles a favor 33">33</td>
                    <td tabindex="13"aria-label="goles en contra 23">23</td>
                    <td tabindex="13"aria-label="diferencia de goles +10">+10</td>
                    <td tabindex="13"aria-label="opciones borrar y editar">🗑️✏️</td>
                </tr>
                <tr>
                    <td tabindex="14"aria-label="posicion cuarto">4</td>
                    <td tabindex="14"aria-label="escudo betis"><img src="./assets/betis.png" alt="Escudo betis"width="40px"height="40px" ></td>
                    <td tabindex="14"aria-label="nombre betis">Betis</td>
                    <td tabindex="14"aria-label="partidos jugados 15">15</td>
                    <td tabindex="14"aria-label="puntos 36">36</td>
                    <td tabindex="14"aria-label="goles a favor 40">40</td>
                    <td tabindex="14"aria-label="goles en contra 31">31</td>
                    <td tabindex="14"aria-label="diferencia de goles +9">+9</td>
                    <td tabindex="14"aria-label="opciones borrar y editar">🗑️✏️</td>
                </tr>
                <tr>
                    <td tabindex="15"aria-label="posicion quinto">5</td>
                    <td tabindex="15"aria-label="escudo real sociedad"><img src="./assets/realsociedad.png" alt="Escudo Real sociedad"width="40px"height="40px" ></td>
                    <td tabindex="15"aria-label="nombre real sociedad">Real Sociedad</td>
                    <td tabindex="15"aria-label="partidos jugados 15">15</td>
                    <td tabindex="15"aria-label="puntos 30">30</td>
                    <td tabindex="15"aria-label="goles a favor 26">26</td>
                    <td tabindex="15"aria-label="goles en contra 20">20</td>
                    <td tabindex="15"aria-label="diferencia de goles +6">+6</td>
                    <td tabindex="15"aria-label="opciones borrar y editar">🗑️✏️</td>
                </tr>
            </tbody>
        </table>
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