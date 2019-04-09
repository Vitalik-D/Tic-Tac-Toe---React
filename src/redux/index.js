import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { initialState, gameReducer } from './reducers/gameReducer';
import App from './components/App';
import './index.css';

const store = createStore(gameReducer, initialState);

function GameR() {
    return(
        <Provider store={store}>
            <App />
        </Provider>);
}

export default GameR


