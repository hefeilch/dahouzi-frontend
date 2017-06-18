/**
 * Created by CH on 2017/6/14.
 */
import { SHOW_CONTEXT_MENU, HIDE_CONTEXT_MENU } from '../actions/ContextMenuAction'

export function contextMenuReducer(state = {
    isShow: false,
    posX: 0,
    posY: 0
}, action) {
    switch (action.type){
        case SHOW_CONTEXT_MENU:
            return Object.assign({}, state, {
                isShow: true,
                posX: action.data.posX,
                posY: action.data.posY
            })
        case HIDE_CONTEXT_MENU:
            return Object.assign({}, state, {
                isShow: false,
                posX: 0,
                posY: 0
            })
        default:
            return state
    }
}