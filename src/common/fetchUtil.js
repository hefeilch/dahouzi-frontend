/**
 * Created by CH on 2017/6/25.
 */

import 'isomorphic-fetch'
import { mock_getLinkList } from '../../mock/mocked'

export const doFetchLinkList = requestParam => {
    if(__MOCKED__){
        mock_getLinkList()
    }
    return fetch(__REQUEST_PATH__ + 'getLinkList')
}