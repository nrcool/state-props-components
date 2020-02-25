import React from 'react'

const TestArticle=(props)=> {
    return (
        <div>
           {props.article}
           <button onClick={()=>props.changeText(props.index)}>Change Text</button>
        </div>
    )
}
export default TestArticle;