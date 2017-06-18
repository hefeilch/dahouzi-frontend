import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer as AppHotLoader } from 'react-hot-loader'
import configStore from '../store/configStore'
import AppContainer from '../containers/AppContainer'

const initialState = window.___INITIAL_STATE__
const store = configStore(initialState)

let render = (Component) => {

    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    )
}
let hotRender = (Component) => {
    ReactDOM.render(
        <AppHotLoader>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppHotLoader>,
        document.getElementById('root')
    )
}

if (__DEV__) {
    if (window.devToolsExtension) {
        window.devToolsExtension.open()
    }
}

if (__DEV__) {
    if (module.hot) {
        module.hot.accept('../containers/AppContainer', () => hotRender(AppContainer))
    }
    hotRender(AppContainer)
}else {
    render(AppContainer)
}


