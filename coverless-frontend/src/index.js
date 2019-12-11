import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, applyMiddleware } from 'react-redux';
import { createStore } from 'redux';
import handleBooks from './reducers/handlebooks';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(handleBooks, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));


serviceWorker.unregister();
