import React, { Component } from 'react'
import TestArticle from './testArticle'

export default class Article extends Component {
    constructor(props){
        super(props)
        this.state={
         articles:[
             "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes",

             "Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.",

             "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code."
         ]
        }
      }
    
      changeText=(i)=>{
          let newdata=`React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.`
            let newState=[...this.state.articles]
            newState[i]=newdata
          this.setState({articles:newState})
      }
    render() {
            let allArticles=this.state.articles.map((article,i)=>{
                    return(
                   <TestArticle article={article} index={i} changeText={this.changeText}/>
                    )
            })

        return (
            <div style={{display:"flex"}}>
                {allArticles}
            </div>
        )
    }
}
