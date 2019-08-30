import React, {Component} from 'react'
import {connect} from 'react-redux'
import {DELETE_STUDENT} from './students'

class StudentList extends Component{

  handleClick = (id)=>{
    this.props.deleteStudent(id)
  }
  render(){
    console.log(this.props);
    const students = this.props.students.map(({id, name, score, nationality})=>{
      return(
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{score}</td>
          <td>{nationality}</td>
          <td><button onClick={()=>this.handleClick(id)}>Delete</button></td>
        </tr>
      )
    })
    return(
      <div>
        <h2>Students</h2>
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Score</th>
              <th>Nationality</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    students:state.students
  }
}
const mapDispatchToProps = (dispatch)=>{
   return{
     deleteStudent: (id)=>{dispatch({type:DELETE_STUDENT, record:{id}})}
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentList)
