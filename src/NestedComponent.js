import React from 'react'

class NestedComponent extends React.Component{
  render(){
    const {school, firstName} = this.props
    return(
      <div>
        <h2>Nested Component</h2>
        <ul>
          <li>School: {school}</li>
          <li>First Name: {firstName}</li>
        </ul>
      </div>
    )
  }
}

export default NestedComponent
