import React, { Component } from 'react'
 
class CompClasse extends Component {
    state = {}
    render(){
        return (
            <h1>{this.props.valor || 'Padrão'}</h1>
        )
    }    
}

export default CompClasse;