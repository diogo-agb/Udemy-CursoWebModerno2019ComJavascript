import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3003/api/apps'


class Users extends Component {

    state = {
        list: []
    }

    getUsers = () => {
        axios.get(URL)
            .then(resp => this.setState({ list: resp.data }))           
    }


    
    renderRows = () => {
        const list = this.state.list
        return (
            list.map(user => (
                <tr key={user._id}>
                    <td>{user.name}</td>                   
                </tr>
            ))           
        )
    }

 


    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Usuários</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getUsers()}
                    {this.renderRows()}
                </tbody>
            </table>    
        )
    }
}

export default Users;



