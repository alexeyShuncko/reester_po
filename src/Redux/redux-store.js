import { applyMiddleware, combineReducers, createStore } from "redux"
// import  thunk from "redux-thunk"
import reester from "./reesterReducer";



let reducers = combineReducers(
    {
        reester: reester,
       
    }
)

let store = createStore(reducers, 
    // applyMiddleware(thunk)
    );

export default store
window.store = store