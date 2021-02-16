import React, {Component} from "react"
import { render } from "react-dom"

export default class Saudacao extends Component {

    //seta um state inicial
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    //cria-se a function para pegar o parametro que o state irá mudar
    setTipo(e) {
        this.setState({
            tipo: e.target.value
        })
    }
    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }

    //cria-se uma renderização retornando o "html" que quer
    render(){
        //criação dos parametros
        const { tipo, nome } = this.state
        return(
            <div>
                <h1>{tipo} {nome} !</h1>
                <hr/>
                {/* Cria-se um input que receba o valor dele mesmo e use o onChance para mudar o state para a function criada acima. */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}