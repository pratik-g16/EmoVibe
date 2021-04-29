import React, { Component } from 'react'
import Timer from './Timer'
export class Mic1 extends Component {
    constructor(props) {
        super(props) 
        this.state = {
             micOn:false,
             text:'',
             recogniton:new window.webkitSpeechRecognition,
             current:0 ,
             transcript:''
        }
    }
    record=()=>{
        // alert(micOn)
        // changeMic(true)
        if(this.state.micOn==true){
            this.setState({micOn:false})
            this.state.recognition.stop() 
            // recognition.stop()
            // alert(finalText)
        }
        else
        { 
            this.setState({micOn:true})
            // speechRecognition=window.webkitSpeechRecognition
            // recognition=new speechRecognition 
            this.state.recognition.continuous = true
            this.state.recognition.onstart=function(){
                // alert('recording now')
            }
            // recognition.onspeechend=()=>{
            //     alert('no activity')
            // }
            this.state.recognition.onerror=()=>{
               this.setState({text:''})
            }
            this.state.recognition.onresult=(event)=>{
                this.setState({current:event.resultIndex,
                    transcript:event.results[this.state.current][0].transcript,
                    text:this.state.text+this.state.transcript})
                this.state.recognition.stop()  
                this.setState({micOn:false})
                alert(this.state.text)
                
                // changeFtext(text)
                // alert(ftext)
                // axios.post('http://127.0.0.1:5000/text',text).
                // then(result=>{
                //     console.log(result);
                //     this.props.history.push('/')
                // })


                // axios.get('http://127.0.0.1:5000/songs').
                // then(response=>{
                //     console.log(response.data.songs);
                //     setSongs(response.data.songs); 
                //     console.log(songs);
                //     <SongList 
                //     songs={response.data.songs}
                //     ></SongList>
                // }).catch(err=>{
                //     console.log(err)
                // })

                
            }
            // if(text){
            //     text+=''
            // }
            this.state.recognition.start()
            // alert(text)
        }
    }
    render() {
        return (
            <div>
                <h3 className="T">Speak how you feel</h3> 
            <button className="mic" onClick={this.record}>🎙️</button>
            {this.state.micOn ? <p id="rec" className="rec" visibility="hidden">{<Timer/>} </p> : null}
            {this.state.micOn ? <p id="sentences" className="sentences" visibility="hidden">Unsure what to speak? We can help 
            <br/>It's a good day.
            <br/>Shut up, Leave me alone!
            <br/>Salad is for rabits.
            {/* <br/>Let's just get this over with. */}
            </p> : null} 
            </div>
        )
    }
}

export default Mic1
