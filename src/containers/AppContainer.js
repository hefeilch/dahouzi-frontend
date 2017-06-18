/**
 * Created by Administrator on 2017/6/13.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HashRouter as Router, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Wallpaper from '../components/Wallpaper';
import Header from '../components/Header';
import LinkWall from '../components/LinkWall';
import ContextMenu from '../components/ContextMenu';
import AddLinkModal from '../components/AddLinkModal';

class AppContainer extends Component {

    componentDidMount() {
        document.addEventListener('contextmenu', (e) => e.preventDefault())
    }

    shouldComponentUpdate () {
        return false
    }

    render () {

        return (
            <Router>
                <div className="app-content">
                    <Wallpaper />
                    <Header/>
                    <LinkWall />
                    <ContextMenu />
                    <AddLinkModal />
                </div>
            </Router>
        )
    }
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

AppContainer.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
