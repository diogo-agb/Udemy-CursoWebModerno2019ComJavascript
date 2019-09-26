import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { inc, dec, stepChanged } from './CounterActions';

const Counter = props => (
    <div>
        <label>{props.counter.number}</label><br></br>

        {/* Chamada da função e valor inicial */}
        <input onChange={props.stepChanged} value={props.counter.step} type='Number'></input>

        <button onClick={props.inc}>Inc</button>
        <button onClick={props.dec}>Dec</button>
    </div>
);

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => bindActionCreators({ inc, dec, stepChanged }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Counter);