/**
 * Created by Administrator on 2017/6/13.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Route, withRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Wallpaper from '../components/Wallpaper';
import LinkWall from '../components/LinkWall';

class AppContainer extends Component {

    shouldComponentUpdate () {
        return false
    }

    render () {
        const { store } = this.props

        return (
            <Provider store={store}>
                <Router>
                    <div className="app-content">
                        <Wallpaper />
                        <LinkWall />
                    </div>
                </Router>
            </Provider>
        )
    }
}

AppContainer.propTypes = {
    store: PropTypes.object.isRequired,
}

export default AppContainer
