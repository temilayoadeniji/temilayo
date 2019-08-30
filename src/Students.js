import {createStore} from 'redux'
const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

//initial state
const studentState = {
   students:[
   {'id':1, 'name':'Opeyemi', 'score':10, 'nationality':'Nigeria'},
   {'id':2, 'name':'Oyetunde', 'score':15, 'nationality':'Ghana'},
   {'id':3, 'name':'Oyekunle', 'score':12, 'nationality':'Namibia'}
   ]
}

//create action(for adding student)
const addStudent = (id, name, score, nationality)=>{
   return {
     type: ADD_STUDENT,
     record:{id, name, score, nationality}
   }
}

const updateStudent = (id, name, score, nationality)=>{
   return {
     type: UPDATE_STUDENT,
     record:{id, name, score, nationality}
   }
}

const deleteStudent = (id)=>{
   return {
     type: DELETE_STUDENT,
     record:{id}
   }
}

//A pure function(reducer)
export const studentReducer = (state=studentState, action)=>{
  if (action.type === ADD_STUDENT) {
    return{
      ...state,
      students:[...state.students, action.record]
    }
  }else if (action.type === UPDATE_STUDENT) {
    return{
      ...state,
      students:state.students.map(student=>{
        if (student.id === action.record.id) {
          return action.record
        }else{
          return student
        }
      })
    }
  }else if (action.type === DELETE_STUDENT) {
    return{
      ...state,
      students:state.students.filter(student=> student.id !== action.record.id)
    }
  }
  return state
}

//store a new state in the store using createStore() method
const studentStore = createStore(studentReducer)

studentStore.dispatch(addStudent(4, 'John', 55, 'Gabon'))
studentStore.dispatch(addStudent(5, 'Jane', 45, 'Swaziland'))
studentStore.dispatch(updateStudent(2, 'Kamoru', 10, 'Congo'))
studentStore.dispatch(deleteStudent(1))

export default studentStore
