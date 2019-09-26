import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Counter from './main/Counter';
import CounterReducers from './main/CounterReducers';

const reducers = combineReducers({
    counter: CounterReducers
});

const store = createStore(reducers);


ReactDOM.render(

    <Provider store={store}>
        <Counter />
    </Provider>

, document.getElementById('root'));


