/**
 * Created by CH on 2017/6/25.
 */

import fetchMock  from 'fetch-mock'

const commonResponse = {
    content: {}
}

// 条件查询超链接列表
export function mock_getLinkList(){

    return fetchMock.get(__REQUEST_PATH__ + 'getLinkList', Object.assign({}, commonResponse, {
        content: [
            {
                id: '1',
                linkName: 'Bing',
                linkValue: 'https://www.bing.com/'
            },
            {
                id: '2',
                linkName: 'Mozilla Developer Network',
                linkValue: 'https://developer.mozilla.org/en-US/'
            },
            {
                id: '3',
                linkName: 'NodeJs',
                linkValue: 'https://nodejs.org/en/'
            },
            {
                id: '4',
                linkName: 'ReactJs',
                linkValue: 'https://facebook.github.io/react/'
            },
            {
                id: '5',
                linkName: '淘宝前端团队',
                linkValue: 'http://taobaofed.org/'
            }


        ]
    }))
}