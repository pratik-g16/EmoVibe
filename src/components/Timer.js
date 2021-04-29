import React, { Component } from 'react'
import App from '../App'
import "../App.css"
export class Timer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // minutes:new Date().getMinutes(),
            // seconds:new Date().getSeconds(),
            // time:0,
            // time2:0
             seconds:0,
             minutes:0 
        }
    }

    startTimer=()=>{
        this.timer=setInterval(()=>{
        if(this.state.seconds<59){
            this.setState({seconds:this.state.seconds+1})
        }
        else if(this.state.seconds==59)
        {
            this.setState({
                minutes:this.state.minutes+1,
            seconds:0
        })
        }
            // this.setState({ 
            //      seconds:this.state.seconds+1 
                // time:this.state.minutes*60 + this.state.seconds
                // ,time2:new Date().getMinutes() *60 +new Date().getSeconds()
                // ,minutes: (this.state.time2-this.state.time)/60
                // ,seconds: (this.state.time2-this.state.time)%60
            // }),1000
        },1000

            // this.setState({
            //     minutes:this.state.minutes+1,
            //     seconds:0
            // }),60000
            // this.setState({
            //     minutes:this.state.minutes+1,
            //     seconds:0
            // }),60000
        )
    //     this.minuteTimer=setInterval(()=>{
    //         this.setState({
    //             seconds:0,
    //             minutes:this.state.minutes+1
    //         })
    // }),60000 
    }
    
    stopTimer=()=>{
        this.setState({
            seconds:0
        })
    }
    componentDidMount()
    {
        this.startTimer()
    }
    render() {
        return (
            <div className="timer">
            {this.state.seconds<10 ? <p>🔴0{this.state.minutes}:0{this.state.seconds}</p> : 
            <p>🔴0{this.state.minutes}:{this.state.seconds}</p>}
            {/* if(this.state.seconds<10){ */}
                {/* <p> */}
                {/* 🔴{this.state.now}{this.state.minutes}:{this.state.seconds} */}
                {/* 🔴{this.state.time} {this.state.minutes}:{this.state.seconds} */}
                {/* 🔴0{this.state.minutes}:0{this.state.seconds} */}
                {/* </p>} */}
            

            </div>
        )
    }
}

export default Timer
