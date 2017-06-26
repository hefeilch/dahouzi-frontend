/**
 * Created by CH on 2017/6/12.
 */
import React , { Component }from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchLinkListAction } from '../../actions/FetchLinkAction'
import './LinkWall.scss'

class LinkWall extends Component {

    componentDidMount(){
        this.props.fetchLinkList();
    }

    render(){

        const LinkList = this.props.linkListData.map((item) =>
            <li className="link-list-item" key={item.id}>
                <a className="link-action" href={item.linkValue} target="blank" >{item.linkName}</a>
            </li>
        )

        return (
            <div className="link-wall-wrap" >
                <div className="link-wall-content">
                    <ul className="link-list">
                        {LinkList}
                    </ul>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let linkListDataById = state.linkList.byIds;
    let linkListData = [];
    console.log(linkListDataById)
    for(let p in linkListDataById){
        linkListData.push(linkListDataById[p])
    }
    return {
        linkListData: linkListData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLinkList: () => {
            dispatch(fetchLinkListAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkWall)