import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import CounterContainer from './containers/CounterContainer';
import reducer from './reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <CounterContainer />
    </Provider>,
    document.getElementById('root')
);