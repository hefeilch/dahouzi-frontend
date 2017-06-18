/**
 * Created by CH on 2017/6/12.
 */
import React , { Component }from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showContextMenuAction, hideContextMenuAction } from '../../actions/ContextMenuAction'
import './LinkWall.scss'

class LinkWall extends Component {

    onContextMenu(e){
        this.props.onContextMenu(e)
    }

    componentDidMount(){}

    render(){

        const LinkListItem = ()=> {
            return (
                <li className="link-list-item">
                    <a className="link-action" href="http://wwww.tmall.com/" target="blank" onContextMenu={this.onContextMenu.bind(this)}>上天猫，就够了</a>
                </li>
            )
        }

        return (
            <div className="link-wall-wrap" >
                <div className="link-wall-content">
                    <ul className="link-list">
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onContextMenu: (e) => {
            console.log('右键了a' + e.target)
            // dispatch(showContextMenuAction({posX: e.pageX, posY: e.pageY}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkWall)