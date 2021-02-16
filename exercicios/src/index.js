import React from "react"
import ReactDOM from "react-dom"
import Primeiro from "./componentes/Primeiro" //sempre que puxar functions de outros arquivos para este, terá que fazer um import do arquivo. O nome do componente "Primeiro", pode ser qualquer nome que queira, porém, tem que ser começando com a letra maiuscula.
import BomDia from "./componentes/BomDia"
import {BoaTarde, BoaNoite} from "./componentes/Multiplos" //Para não ficar importando cada function do arquivo externo, usa-se um nome aleatório no lugar dos nomes sem chaves e abaixo, dentro da div coloque <NomeAleatorio.BoaTarde />. No final do arquivo importado, tem que estar exportando as functions.
import Saudacao from "./componentes/Saudacao"

ReactDOM.render(<h1>Hello World!!!</h1>, document.getElementById('root'))
ReactDOM.render(<h3>Aprendendo React na marra!!!</h3>, document.getElementById('root1'))
ReactDOM.render(<Primeiro />, document.getElementById("root2"))//Este "Primeiro" que contem em chaves é o nome do componente especificado neste arquivo, não o nome do arquivo que esta sendo puxado.
ReactDOM.render(<BomDia nome="Rossan" />, document.getElementById("root2"))//Passando o parametro dentro da propria tag.
ReactDOM.render(
    <div>
        <BoaTarde nome="Rossan" />
        <BoaNoite nome="Rossan" />
    </div>
, document.getElementById("root3"))
ReactDOM.render(<Saudacao />, document.getElementById("root4"))