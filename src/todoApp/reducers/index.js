import {combineReducers} from 'redux'
import ListsReducer from './lists'
import NotesReducer from './notes'
import Filter from './filter'


export default combineReducers({
    lists : ListsReducer,
    notes:NotesReducer,
    filter:Filter
})