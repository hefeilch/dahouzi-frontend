/**
 * Created by CH on 2017/6/12.
 */
import React , { Component }from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Header.scss'
import { showAddLinkModalAction } from '../../actions/AddLinkAction'



class Header extends Component {

    onClick(){
        this.props.showAddLinkModal();
    }
    render(){
        return (
            <div className="header-wrap">
                <div className="header-content">
                    <a className="add-action" href="javascript:void(0);" onClick={ this.onClick.bind(this) }>ADD</a>
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
        showAddLinkModal(){
            dispatch(showAddLinkModalAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)