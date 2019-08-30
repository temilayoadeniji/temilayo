import {createStore} from 'redux'

//initial state
const teacherState = {
 teachers:[
 {'id':1, 'name':'Odunola', 'age':14, 'nationality':'England'},
 {'id':2, 'name':'Damilola', 'age':35, 'nationality':'Germany'},
 {'id':3, 'name':'Arike', 'age':22, 'nationality':'Egypt'}
 ]
}

//A pure function(reducer)
export const teacherReducer = (state=teacherState, action)=>{
  return state
}

//store a new state in the store using createStore() method
const teacherStore = createStore(teacherReducer)

export default teacherStore
