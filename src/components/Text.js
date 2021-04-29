import React, { Component } from 'react'
import Analyze from './Analyze'
import axios from 'axios'
export class Text extends Component { 
    constructor(props) {
        super(props)
    
        this.state = {
             text:"",
             songs:[]
        }
    }
    
    changeHandler=(event)=>{ 
            this.setState({text:event.target.value})
            // console.log(this.state.text) 
    }

    submitHandler=(event)=>{
        event.preventDefault();
        console.log("Submit called"); 
        alert(this.state.text)
        // { <Analyze  text={this.state.text}/> }
        axios.post('http://127.0.0.1:5000/text',{"text":this.state.text}).
                then(
                    result=>{
                    console.log(result); 
                    this.setState({songs:result.data.songs}); 
                    console.log(result.data.songs)
                })
    }
    render()
    {
        return (
            <div>
                <h3>Don't feel like speaking? No problem!</h3>
                {/* <h1>{this.state.text}</h1> */}
                <form onSubmit={this.submitHandler}>
                <input className="textBox" onChange={this.changeHandler} value={this.state.text} type="text" placeholder="Pen Down"/>
                <button className="doneButton" type="submit">Done</button>
                </form>
            </div>
        )
    } 
}

export default Text
