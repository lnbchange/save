import {createStore ,combineReducers,applyMiddleware} from 'redux'
import ListReducer from './listreducer/ListReducer'
import thunk from 'redux-logger'

let reducers=combineReducers({
    ListReducer
});

let store=createStore(reducers,applyMiddleware(thunk));

export default store;
