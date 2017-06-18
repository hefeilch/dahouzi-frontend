/**
 * Created by CH on 2017/6/14.
 */

export const SHOW_CONTEXT_MENU = 'SHOW_CONTEXT_MENU';
export const HIDE_CONTEXT_MENU = 'HIDE_CONTEXT_MENU'

export function showContextMenuAction(data) {
    return { type: SHOW_CONTEXT_MENU, data }
}

export function hideContextMenuAction() {
    return { type: HIDE_CONTEXT_MENU }
}