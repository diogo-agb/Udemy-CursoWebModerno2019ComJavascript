import React, { Component } from 'react'
import Grid from '../templates/Grid'
import IconButton from '../templates/IconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from './TodoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandle = (e) => {
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape'){
            clear()
        }
    }

    render(){
        const { add, search, description, clear } = this.props
        return (
            <div role='form' className='todoForm row'>
    
            <Grid cols='12 9 10'>
                <input
                    id='description'
                    className='form-control'
                    placeholder='Adicione uma tarefa'
                    value={this.props.description}
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandle}
                    >
                </input>            
            </Grid>
    
            
            <Grid cols='12 3 2'> 
                {/* eslint-disable-next-line */}
                <IconButton style='primary' icon='plus' hide={false}
                    onClick={() => add(description)}
                />
    
                <IconButton style='info' icon='search'
                    onClick={search}
                />
    
                <IconButton style='default' icon='close'
                    onClick={() => clear()}            
                />
            </Grid>
    
    
        </div>
        )
    }

}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ clear, changeDescription, search, add }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);

