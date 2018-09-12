import {INCREMENT,DECREMENT,SET_COUNT, CLEAR} from '../actions/types'
export default (state=0,action)=>{
    switch(action.type){
        case INCREMENT:
            return ++state
        case DECREMENT:
            return --state
        case CLEAR:
            return 0
        case SET_COUNT:
            return action.number
        default:
            return state

    }

}