/**
 * Created by CH on 2017/6/12.
 */
import React , { Component }from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './ContextMenu.scss'
import { hideContextMenuAction } from '../../actions/ContextMenuAction'

class ContextMenu extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        document.addEventListener('click', (e)=> {
            this.hide();
        })
    }

    onClick(e){
        e.preventDefault();
        e.stopPropagation();
    }

    hide(){
        this.props.hide();
    }

    render(){

        let style = {
            display: this.props.isShow? 'block': 'none',
            top: this.props.posY,
            left: this.props.posX
        };

        return (
            <div className="context-menu-wrap" style={style}
                 ref={(menu) => { this.menu = menu }}
                 onClick={this.onClick.bind(this)}>
                <div className="context-menu-content">
                    <ul className="menu-list">
                        <li className="menu-list-item">
                            <a className="menu-action" href="javascript:void(0);" >删除</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isShow: state.contextMenu.isShow,
        posX: state.contextMenu.posX,
        posY: state.contextMenu.posY
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hide(e){
            dispatch(hideContextMenuAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu)