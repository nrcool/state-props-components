import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
          count:0
        }
      }
    
    render() {
        return (
            <div>
              <button onClick={()=>this.setState({count:this.state.count -1})}>decrement</button>
        {this.state.count}
        <button onClick={()=>this.setState({count:this.state.count +1})}>increment</button>  
            </div>
        )
    }
}
