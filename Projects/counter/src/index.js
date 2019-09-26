import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Reducers from './main/Reducers'
import Counter from './main/Counter'

const reducers = combineReducers({
    counter: Reducers
})


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>
, document.getElementById('root'))