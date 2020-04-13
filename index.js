/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk))
);

AppRegistry.registerComponent(appName, () => <Provider store={store}>
    <App />
</Provider>);
