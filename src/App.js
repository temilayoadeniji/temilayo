import React, {Component} from 'react'
import NestedComponent from './NestedComponent'
import Students from './Students'

class App extends Component{
  constructor(){
    super()
    this.state = {
     students:[
       {'id':1, 'name':'Oyekunle Opeyemi', 'score': 92},
       {'id':2, 'name':'Moyin Akinbolwale', 'score': 52},
       {'id':3, 'name':'Adeferanmi Tolulope', 'score': 32},
     ],
     teachers:[
       {'name':'Oyekunle Opeyemi', 'age': 52},
       {'name':'Moyin Akinbolwale', 'age': 78},
       {'name':'Adeferanmi Tolulope', 'age': 43},
     ]
    }
  }
  render(){
    const projectName = 'Student App'
    const firstName = 'Opeyemi'

    const numberOne = 2, numberTwo = 4
    const sum = numberOne + numberTwo
    return(
      <div>
        <h1>{projectName}</h1>
        <h3>{firstName}</h3>
        <p>{sum}</p>

        <NestedComponent school='O.A.U' firstName={firstName} />
        <Students students={this.state.students} />
      </div>
    )
  }
}
export default App
