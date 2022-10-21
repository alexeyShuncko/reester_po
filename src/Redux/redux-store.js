import {  combineReducers, createStore } from 'redux';
import reester from './reesterReducer';



let reducers = combineReducers(
    {
        reester: reester,
    }
)

let store = createStore(reducers, )

export default store