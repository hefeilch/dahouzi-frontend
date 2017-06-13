/**
 * Created by CH on 2017/6/12.
 */
import React , { Component }from 'react'
import PropTypes from 'prop-types'
import './LinkWall.scss'

class LinkWall extends Component {
    render(){

        const LinkListItem = ()=> {
            return <li>liebiao</li>
        }

        return (
            <div className="link-wall-wrap">
                <div className="link-wall-content">
                    <ul>
                        <LinkListItem/>
                        <LinkListItem/>
                        <LinkListItem/>
                    </ul>
                </div>
            </div>
        )
    }
}

export default LinkWall