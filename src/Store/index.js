import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { customerReducer } from "./customerReducer";
const rootReducer=combineReducers({
    customers: customerReducer,
})

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;