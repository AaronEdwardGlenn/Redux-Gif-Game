const { createStore } = require('redux');
import countReducer from './src/reducers/countReducer';

export default createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
