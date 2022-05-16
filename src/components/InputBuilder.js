import React, { Component } from 'react'
import Char from './Char'
import Output from './Output/Output'

export default class InputBuilder extends Component {
  state = {
    string: ''
  }
  
  ChangeHandle = (e) =>{
    this.setState({string: e.target.value})
  }

  deleteHandler = (index) =>{
    console.log(index);
  }
  
  render() {

    const stringLength = this.state.string.length

    const s = this.state.string.split('').map((item, i) =>{
      return <Char key={i} character={item}/>
    })

    return (
      <div>

        <input onChange={this.ChangeHandle} type="text" />


        <Output
          output={this.state.string}
        />

        <p>Text is {stringLength > 5 ? 'Too long' : 'Too short'}</p>
        {s}
      </div>


    )
  }
}

