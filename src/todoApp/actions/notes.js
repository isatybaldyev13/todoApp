import { ADD_NOTE, DELETE_NOTE } from './types'
export const addNote=(text,listId)=>({
    type:ADD_NOTE,
    note:{
        listId,
        id:'_' + Math.random().toString(36).substr(2, 9),
        text
    }
})
export const deleteNote=(id)=>({
    type:DELETE_NOTE,
    id
})