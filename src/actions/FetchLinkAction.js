/**
 * Created by CH on 2017/6/14.
 */
import { doFetchLinkList } from '../common/fetchUtil'

export const REQUEST_LINK_LIST = 'REQUEST_LINK_LIST'
export const RECEIVE_LINK_LIST = 'RECEIVE_LINK_LIST'

export function requestLinkListAction(data) {
    return { type: REQUEST_LINK_LIST, data: data }
}

export function receiveLinkListAction(data) {
    return { type: RECEIVE_LINK_LIST, data: data}
}

export function fetchLinkListAction(requestData) {
    return function(dispatch, getState){
        dispatch(requestLinkListAction(requestData))
        // 先设置查询条件
        // 然后通过查询条件去查询
        return doFetchLinkList().then(response => {
            return response.json()
        }).then(data => {
            // console.log(data)
            dispatch(receiveLinkListAction(data));
        })
    }
}
