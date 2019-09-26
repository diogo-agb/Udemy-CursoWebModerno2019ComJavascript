import React from 'react'
import ReactDOM from 'react-dom'
import Field from './main/Field'
import Reducer from './main/Reducer'

//Redux
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    field: Reducer
})



ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field />
    </Provider>

, document.getElementById('root'))

