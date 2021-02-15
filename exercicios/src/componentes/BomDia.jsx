import React from "react"

//Para passar uma function com parametros, usa-se props
export default props =>
    <div>
        <h1>Bom dia {props.nome}!!!</h1>
        <h2>Volte em breve!!!</h2>
    </div>
//Usando de outra maneira, sem ter que colocar o conteudo dentro de divs, pode-se usar o fragment, onde especificando dentro do import do react, entre chaves o próprio fragment.
//Ou caso não queira importar o fragment, na tag abaixo fragment coloque "React.fragment"
/* import React, {fragment} from "react"
export default props =>
    <fragment>
        <h1>Bom dia {props.nome}!!!</h1>
        <h2>Volte em breve!!!</h2>
    </fragment> */

//Usando array é aconselhavel sempre usar key diferenciados
/*export default props => [
        <h1 key="primeira">Bom dia {props.nome}!!!</h1>
        <h2 key="segunda">Volte em breve!!!</h2>
] */