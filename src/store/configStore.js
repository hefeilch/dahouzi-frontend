/**
 * Created by Administrator on 2017/6/13.
 */
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

export default (initialState = {}) => {

    let middleware = [thunk]

    if (__DEV__) {
        middleware.push(createLogger())
    }

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware)
        )
    )

    if (__DEV__) {
        // if (module.hot) {
        //     // Enable Webpack hot module replacement for reducers
        //     module.hot.accept('../reducers', () => {
        //         const nextRootReducer = require('../reducers').default
        //         store.replaceReducer(nextRootReducer)
        //     })
        // }
    }

    return store
}
