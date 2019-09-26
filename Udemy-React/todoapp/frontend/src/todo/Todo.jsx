import React from 'react'
// import axios from 'axios'

import PageHeader from '../templates/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


// const URL = 'http://localhost:3003/api/todos'

export default props => (
    <div>                
        <PageHeader name='Tarefas' small='Cadastro'/>
        <TodoForm/>
        <TodoList/>
    </div>
)

// class Todo extends Component {

    // constructor (props) {
    //     super(props)
    //     this.state = { description: '', list: [] }
    //     // this.refresh()
    // }

 
    // refresh = (description = '') => {
    //     const search = description ? `&description__regex=/${description}/` : ''
    //     axios.get(`${URL}?sort=-createdAt${search}`)
    //         .then(resp => this.setState({...this.state, description, list: resp.data }))           
    // }

    
    

    // handleAdd = () => {
    //     const description = this.state.description
    //     axios.post(URL, { description })
    //         .then(resp => this.refresh())   
    //         .catch(error => console.log('Insira uma descrição!'))  
    // }

    // handleChange = (e) => {
    //     this.setState({ ...this.state, description: e.target.value })
    // }

    // handleRemove = (todo) => {
    //     axios.delete(`${URL}/${todo._id}`)
    //         .then(resp => this.refresh(this.state.description))
    // }

    // handleMarkAsDone = (todo) => {
    //     axios.put(`${URL}/${todo._id}`, {...todo, done:true})
    //         .then(resp => this.refresh(this.state.description))
    // }

    // handleMarkAsPending = (todo) => {
    //     axios.put(`${URL}/${todo._id}`, {...todo, done:false})
    //         .then(resp => this.refresh(this.state.description))
    // }

    // handleSearch = () => {
    //     this.refresh(this.state.description)
    // }

    // handleClear = () => {
    //     this.refresh()
    // }

//     render(){

//         return (
            
//             <div>                
//                 <PageHeader name='Tarefas' small='Cadastro'/>
//                 <TodoForm/>
//                 <TodoList/>
//             </div>
//         )
//     }
// }
// export default Todo