import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../reducers/rootReducers";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)