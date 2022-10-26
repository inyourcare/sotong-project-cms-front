import App from "./App";
import ReactDOM from "react-dom";
import {
    BrowserRouter
} from "react-router-dom";
import "./i18n"
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer, { rootSaga } from './redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

// Redux
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
    reducer: rootReducer ,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }).concat(logger).concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </>,
    document.getElementById("root")
);