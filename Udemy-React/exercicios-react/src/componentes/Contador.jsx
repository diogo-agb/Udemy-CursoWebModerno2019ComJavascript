import React, { Component } from 'react'

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }

    //Lembrando que o (this) em javascript é variável, dessa forma não irá variar
    // constructor(){
    //     super()
    //     this.inc = this.inc.bind(this)
    // }

    //Com arrow function o this não varia
    
    // inc = () => {
    //     // this.state.numero = this.state.numero + 1
    //     this.setState({ numero: this.state.numero + 1 })
    // }

    // dec = () => {
    //     this.setState({ numero: this.state.numero -1 })
    // }

    altNumero = diferenca => {
        let a = this.state.numero + diferenca
        return a >= 0 ? this.setState({ numero: this.state.numero + diferenca }) : this.state.numero     
    }

    //Lembrando que o (this) em javascript é variável
    // inc(){
    //     // this.props.numero++
    //     console.log(this)
    // }

    render(){
        
        return (
            <React.Fragment>
                <div>Quantidade: {this.state.numero}</div>
                <button onClick={() => this.altNumero(1)}>+</button>  {/*onClick={() => this.inc()}*/}
                <button onClick={() => this.altNumero(-1)}>-</button>                
            </React.Fragment>
        )
    }
}

export default Contador;