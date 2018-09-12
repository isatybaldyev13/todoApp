import { ADD_LIST, DELETE_LIST } from './types'
export const addList=(title)=>({
    type:ADD_LIST,
    list:{
        id:'_' + Math.random().toString(36).substr(2, 9),
        title
    }
})
export const deleteList=(id)=>({
    type:DELETE_LIST,
    id
})