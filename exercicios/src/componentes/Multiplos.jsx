import React from "react"

export const BoaTarde = props => <h3>Boa tarde {props.nome}!</h3>
export const BoaNoite = props => <h3>Boa noite {props.nome}!</h3>

//Não precisando de colocar export em toda const acima, cria-se um export abaixo instanciando as consts
//export default {BoaTarde, BoaNoite}