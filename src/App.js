
import React, { Component } from 'react'
import Counter from './Counter'
import Article from './Article'
import TestArticle from './testArticle'

export default class App extends Component {


  render() {
    return (
      <div>
       <h1>Counters</h1>
       <Counter/> 
     
        <Article/>
  
       
      </div>
    )
  }
}
