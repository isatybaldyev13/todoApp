import {SET_FILTER} from '../actions/types'
export default(state=null,action)=>{
    switch(action.type){
        case SET_FILTER:
            return action.id
        default: 
            return state
    }
}