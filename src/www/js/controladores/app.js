"use strict" //activo modo estricto
import {Modelo} from '../modelos/modelo.js'
import {VistaNav} from '../vistas/vistaNav.js'
import {VistaLiga} from '../vistas/vistaLiga.js'
import {VistaAlta} from '../vistas/vistaAlta.js'
import {VistaEquipos} from '../vistas/vistaEquipos.js'
import {VistaListado } from '../vistas/vistaListado.js'

/**
 * Clase Controlador que administra las vistas
 */
class Controlador {
	/**
	 * Constructor de la clase Controlador
	 * Cuando carga la web ejecuta el método iniciar
	 */
	constructor() {
		$(window).on('load',this.iniciar.bind(this))
	}

	/**
	 * Método iniciar que es el primero en ejecutarse cuando se carga la pantalla
	 */
	iniciar() {
		this.modelo=new Modelo(this, this.iniciarVistas.bind(this))
	}

	/**
	 * Método iniciarVistar que se ejecuta al iniciar el modelo
	 */
	iniciarVistas() {

        this.divLiga = $('#liga')
        this.vistaLiga = new VistaLiga(this.divLiga, this).mount('#liga')

        this.divEquipos = $('#equipos')
        this.vistaEquipos = new VistaEquipos(this.divEquipos, this).mount('#equipos')

		this.nav = $('nav')
		this.vistaNav = new VistaNav(this.nav,this.vistaEquipos, this).mount('nav')

		this.divAlta= $('#alta')
		this.vistaAlta=new VistaAlta(this.divAlta, this).mount('#alta')

		this.divListado = $('#listado')
		this.vistaListado = new VistaListado(this.divListado, this).mount('#listado')
		this.pulsarNavLiga()
	}

	ocultarVistas(){
		this.vistaLiga.mostrar(false)
		this.vistaEquipos.mostrar(false)
		this.vistaAlta.mostrar(false)
		this.vistaListado.mostrar(false)
	}
	pulsarNavLiga() {
		this.ocultarVistas()
		this.vistaLiga.mostrar(true)
	}

	pulsarNavEquipos() {
		this.ocultarVistas()
		this.vistaEquipos.mostrar(true)
	}

	pulsarAlta() {
		this.ocultarVistas()
		this.vistaAlta.mostrar(true)
	}

	pulsarListado() {
		this.ocultarVistas()
		this.vistaListado.mostrar(true)
	}

	insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	insertarOK(){
		console.log('La inserción ha ido bien')
	}

	getModelo() {
		return this.modelo
	}
}
const app = new Controlador()

