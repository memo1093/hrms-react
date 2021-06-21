import {  applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools, devToolsEnhancer } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";


export function configureStore(){
    return createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
}