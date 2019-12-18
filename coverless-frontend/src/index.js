import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import handleBooks from './reducers/handlebooks';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserBookList from './Containers/UserBookList';

const store = createStore(handleBooks, applyMiddleware(thunk));

const BASE_URL = 'http://localhost:3000/';

const routing = (
  <Router>
    <Provider store={store}>
      <Route path="/" component={App} />
      <Route path="/mybooks" component={UserBookList} />
    </Provider>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))



serviceWorker.unregister();

export default BASE_URL;