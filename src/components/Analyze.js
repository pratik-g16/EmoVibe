import React, { Component } from 'react'

class Analyze extends Component {
    constructor(props) {
        super(props)
        console.log("Analyze")
        this.state = {
             text:this.props.text
        }
        console.log(this.state.text)
    }
    
    render() {
        return (
            <div>
                <h1>This is called from analyse</h1>
                <h1>{this.state.text}</h1>
                console.log({this.state.text})
            </div>
        )
    }
}

export default Analyze
