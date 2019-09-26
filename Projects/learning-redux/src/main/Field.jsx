import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './Actions'

const Field = props => {

  

    return (
        <div>
            <label>{props.value}</label><br></br><br></br>
            <input onChange={props.changeValue} value={props.value}></input>
        </div>
    )
}

const mapStateToProps = state => ({ value: state.field.value})
const mapDispatchToProps = dispatch => (
    bindActionCreators({ changeValue }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Field)