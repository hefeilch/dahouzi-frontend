/**
 * Created by Administrator on 2017/6/13.
 */
import { combineReducers } from 'redux'

import { contextMenuReducer } from './ContextMenuReducer'
import { addLinkReducer } from './AddLinkReducer'

const test = (state = {}, action)=> {
    switch(action.type){
        case 'TEST':
            return Object.assign({}, state, {
                text: action.text
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    contextMenu: contextMenuReducer,
    addLink: addLinkReducer,
    test: test
})

export default rootReducer