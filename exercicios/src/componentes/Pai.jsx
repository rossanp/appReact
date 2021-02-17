import React from "react"
import Filho from "./Filho"

export default props =>
    <div>
        {/* Criando o padrão do pai */}
        <h1>{props.nome} {props.sobrenome}</h1>
        <ul>
            {/* Puxando o padrão do filho junto com o sobrenome do pai */}
            <h2>Filhos</h2>
            <Filho nome = "Peny" sobrenome = {props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome = "Luiz" />
        </ul>
    </div>