import {combineReducers, createStore} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";

import {usersReducer} from "./reducers/usersReducer";

const rootReducer = combineReducers({
    users:usersReducer,  // одна полиця шафи
    // comments: commentsReducer,
    // posts: postsReducer
});

const composeEnhancers = composeWithDevTools({
    trace:true,
    traceLimit: 25
})  // відстежує всі дії з redux, з якої стрічки коду ми змінювали redux (тобто якийсь state, полицю)

export const store = createStore(rootReducer, composeEnhancers());