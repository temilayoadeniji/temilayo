import React from 'react';
import ReactDOM from 'react-dom';
// import teacherStore from './teachers'
import studentStore from './students'
// import store from './combineReducers'
import {Provider} from 'react-redux'
import StudentList from './StudentList'

/*
console.log('Student Reducer', studentStore.getState());
console.log('Teacher Reducer', teacherStore.getState());
console.log('Combine Reducers', store.getState());
*/

ReactDOM.render(<Provider store={studentStore}><StudentList /></Provider>, document.getElementById('root'));
