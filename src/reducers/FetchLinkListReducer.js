/**
 * Created by CH on 2017/6/14.
 */
import { REQUEST_LINK_LIST, RECEIVE_LINK_LIST } from '../actions/FetchLinkAction'

export function fetchLinkListReducer(state = {
    byIds: {
    },
    allIds: []
}, action) {
    switch (action.type){
        case REQUEST_LINK_LIST:
            return state
        case RECEIVE_LINK_LIST:
            let data = action.data.content
            let ids = []
            let listByIds = {}
            data.forEach(( item, index ) => {
                ids.push(item.id)
                listByIds[item.id] = item
            })
            return Object.assign({}, state, {
                byIds: listByIds,
                allIds: ids
            })
        default:
            return state
    }
}