import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import handleBooks from './reducers/handlebooks';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(handleBooks, applyMiddleware(thunk));


const BASE_URL = 'http://localhost:3000/';

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));


serviceWorker.unregister();

export default BASE_URL;