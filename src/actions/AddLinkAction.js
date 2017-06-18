/**
 * Created by CH on 2017/6/14.
 */

export const SHOW_ADD_LINK_MODAL = 'SHOW_ADD_LINK_MODAL'
export const HIDE_ADD_LINK_MODAL = 'HIDE_ADD_LINK_MODAL'
export const ADD_LINK = 'ADD_LINK'

export function showAddLinkModalAction() {
    return { type: SHOW_ADD_LINK_MODAL }
}

export function hideAddLinkModalAction() {
    return { type: HIDE_ADD_LINK_MODAL }
}

export function addLinkAction(data) {
    return { type: ADD_LINK , data}
}