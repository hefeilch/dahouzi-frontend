/**
 * Created by Administrator on 2017/6/13.
 */
import { combineReducers } from 'redux'

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
    test: test
})

export default rootReducer