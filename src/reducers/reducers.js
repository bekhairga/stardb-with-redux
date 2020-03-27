import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import itemListReducer from "./item-list-reducer";
import detailsReducer from "./item-details-reducer";

const rootReducer = combineReducers({
    details: detailsReducer,
    list: itemListReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
