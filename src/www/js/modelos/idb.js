"use strict" //activo modo estricto

export class idb{
	constructor(controlador) {
        this.controlador=controlador
		const peticion = indexedDB.open('WonderLeague', 2)
        peticion.onerror = evento => {throw 'Error al conectar indexedDB'}
        peticion.onupgradeneeded = evento => {
				this.conexion = evento.target.result
				this.crear()
            }
        peticion.onsuccess = evento => {this.conexion = evento.target.result}
    }
    crear(){
        const tabla = this.conexion.createObjectStore('Equipos', { keyPath: 'id', autoIncrement: true })
    }
    /**
     * 
     * @param {Function} objeto objeto de la clase equipos con los datos del equipos a insertar
     * @param {Function} callback llamada de aviso al modelo
     */
    insertar(objeto, callback){
        const transaccion = this.conexion.transaction(['Equipos'], 'readwrite')
        transaccion.onerror = evento => {throw 'Error al insertar'}
        const tabla = transaccion.objectStore('Equipos')
        const peticion = tabla.add(objeto)
        peticion.onsuccess = callback
        this.controlador.pulsarNavLiga()
    }
}