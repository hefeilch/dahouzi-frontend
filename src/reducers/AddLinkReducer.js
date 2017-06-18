/**
 * Created by CH on 2017/6/14.
 */
import { SHOW_ADD_LINK_MODAL, HIDE_ADD_LINK_MODAL, ADD_LINK } from '../actions/AddLinkAction'

export function addLinkReducer(state = {
    isOpen: false
}, action) {
    switch (action.type){
        case SHOW_ADD_LINK_MODAL:
            return Object.assign({}, state, {
                isOpen: true
            })
        case HIDE_ADD_LINK_MODAL:
            return Object.assign({}, state, {
                isOpen: false
            })
        case ADD_LINK:
            return Object.assign({}, state, {
                isShow: false
            })
        default:
            return state
    }
}