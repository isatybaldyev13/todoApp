import {INCREMENT,DECREMENT,SET_COUNT,CLEAR} from './types'

export const counterIncrement = ()=>({
    type:INCREMENT
})
export const counterDecrement = ()=>({
    type:DECREMENT
})
export const counterClear = ()=>({
    type:CLEAR
})
export const counterSet = (number)=>({
    type:SET_COUNT,
    number
})
