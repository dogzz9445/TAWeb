import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../sagas";
import reducer from "../reducers/index";

const loggerMiddleware =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        return next(action);
    };

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [sagaMiddleware, loggerMiddleware];
    const enhencer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middleWares))
            : composeWithDevTools(applyMiddleware(...middleWares));
    const store = createStore(reducer, enhencer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === "development",
});

export default wrapper;
