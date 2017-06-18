/**
 * Created by CH on 2017/6/12.
 */
import React , { Component }from 'react'
import { connect } from 'react-redux'
import ReactModal  from 'react-modal'
import PropTypes from 'prop-types'
import './AddLinkModal.scss'
import { hideAddLinkModalAction } from '../../actions/AddLinkAction'

class AddLinkModal extends Component {
    constructor(props) {
        super(props);
    }

    hide(){
        this.props.hide();
    }

    render(){

        return (
            <ReactModal isOpen={ this.props.isOpen }>
                <input/>
            </ReactModal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isOpen : state.addLink.isOpen,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hide(e){
            dispatch(hideContextMenuAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLinkModal)