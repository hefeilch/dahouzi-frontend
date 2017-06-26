/**
 * Created by CH on 2017/6/12.
 */
import React , { Component }from 'react'
import { connect } from 'react-redux'
import ReactModal  from 'react-modal'
import PropTypes from 'prop-types'
import './AddLinkModal.scss'
import { hideAddLinkModalAction } from '../../actions/AddLinkAction'

const style = {
        overlay : {
            position          : 'fixed',
            top               : 0,
            left              : 0,
            right             : 0,
            bottom            : 0,
            backgroundColor   : 'rgba(255, 255, 255, 0.1)'
        },
        content : {
            position                   : 'absolute',
            top                        : '100px',
            left                       : '100px',
            right                      : '100px',
            bottom                     : '100px',
            border                     : '1px solid #ccc',
            background                 : '#fff',
            overflow                   : 'auto',
            WebkitOverflowScrolling    : 'touch',
            borderRadius               : '4px',
            outline                    : 'none',
            padding                    : '20px'

        }
    }

class AddLinkModal extends Component {
    constructor(props) {
        super(props);
    }

    hide(){
        this.props.hide();
    }

    render(){

        return (
            <ReactModal
                style = {style}
                isOpen={ this.props.isOpen }
                contentLabel="AddLinkModal"
                onRequestClose={this.props.hide}
            >
                <form>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
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
            dispatch(hideAddLinkModalAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLinkModal)