"use strict" //activo modo estricto
export class Equipos{

	constructor(valorescudo,valornombre,valordescripcion,valorfecha,valorligas,colores,valorascenso,valorcomunidad,terminos){
		this.escudo = valorescudo
		this.nombre = valornombre
		this.descripcion = valordescripcion
		this.fechaCreacion = valorfecha
		this.ligasGanadas = valorligas
		this.colores= colores
		this.ascendido = valorascenso
		this.comunidad = valorcomunidad
		this.terminos = terminos
	}	
}