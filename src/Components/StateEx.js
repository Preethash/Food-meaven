import React, { Component } from 'react'

export default class StateEx extends Component {
    constructor(props) {
      super(props)
     this.state = {
         count:0,
         name:"Preetha"
      }
    }

  render() 
  {
    return (
      <div>
      <button onClick={()=>this.setState({count:this.state.count+1})}>
      ClickMe{this.state.count}
      </button> 
</div>
    )
  }
}