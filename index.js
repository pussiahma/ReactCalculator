import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import NumButtonReducer from './src/reducers/numbutton';
import Calculator from './src/containers/Calculator';
import './css/style.css';


const store = createStore (
	NumButtonReducer
	);

render (
<Provider store = {store}>
<Calculator />
</Provider>,
document.getElementById("container")
	);