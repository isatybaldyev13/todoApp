import {ADD_NOTE, DELETE_NOTE } from "../actions/types";

const defaultState=[]

export default (state=defaultState,action)=>{
    switch(action.type){
        case ADD_NOTE:
            return [...state,action.note]
        case DELETE_NOTE:
        return state.filter((note)=>(note.id!==action.id))
        default: 
            return state
    }
}