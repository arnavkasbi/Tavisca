import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import reducers from './Store/configureStore';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import CustomerDetails from './Container/CustomerDetails';
import CustomerList from './Container/CustomerList';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route exact path="/list" component={CustomerList} />
                <Route path="/details" component={CustomerDetails} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
