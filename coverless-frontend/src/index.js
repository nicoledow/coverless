import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'react-redux';
import handleBooks from './reducers/handlebooks';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(handleBooks);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById('root'));


serviceWorker.unregister();
