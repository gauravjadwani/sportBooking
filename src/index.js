import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import {Router, browserHistory} from 'react-router-dom';
import {render} from 'react-dom';
import routes from './routes';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {browserHistory} from 'react-router';
// import {Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
const store = configureStore(applyMiddleware(thunk));
// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
ReactDOM.render(
    <Provider store={store}>
  <Router history={browserHistory} routes={routes}/>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
