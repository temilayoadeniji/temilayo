import {createStore, combineReducers} from 'redux'
import {studentReducer} from './students'
import {teacherReducer} from './teachers'

const collegeReducers = {studentReducer, teacherReducer}

const reducers = combineReducers(collegeReducers)

const store = createStore(reducers)

export default store
