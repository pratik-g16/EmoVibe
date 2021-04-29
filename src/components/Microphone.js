import React,{useState} from 'react'
import {useEffect} from 'react'
import '../App.css';
import Timer from './Timer'
import axios from 'axios'
import SongList from './SongList';
import Analyze from './Analyze';
import Text from './Text'
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
function Microphone(props) {  
    const [micOn,changeMic]=useState(false) 
    const [recognition,changeRecgonition]=useState(new window.webkitSpeechRecognition) 
    const [songs,setSongs]=useState([]) 
    const [textBox,changeTextbox]=useState('')
    var current,transcript;
    var text=''

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("Submit called"); 
        // { <Analyze  text={this.state.text}/> }
        // alert(textBox)
        axios.post('http://127.0.0.1:5000/text',{"text":textBox}).
                then(
                    result=>{
                    console.log(result); 
                    setSongs(result.data.songs); 
                    console.log(result.data.songs)
                })
    }
    const changeHandler=(event)=>{ 
        changeTextbox(event.target.value)
        // console.log(this.state.text) 
}


    const record=()=>{
        // alert(micOn)
        // changeMic(true)
        if(micOn==true){
            changeMic(false)
            recognition.stop() 
            // recognition.stop()
            // alert(finalText)
        }
        else
        { 
            changeMic(true)
            // speechRecognition=window.webkitSpeechRecognition
            // recognition=new speechRecognition 
            recognition.continuous = true
            recognition.onstart=function(){
                // alert('recording now')
            }
            // recognition.onspeechend=()=>{
            //     alert('no activity')
            // }
            recognition.onerror=()=>{
                text=''
            }
            recognition.onresult=(event)=>{
                current=event.resultIndex;
                transcript=event.results[current][0].transcript
                text+=transcript
                recognition.stop() 
                changeMic(false)
                alert(text)

                axios.post('http://127.0.0.1:5000/text',{"text":text}).
                then(
                    result=>{
                    console.log(result); 
                    setSongs(result.data.songs); 
                    console.log(result.data.songs)
                })


                // axios.get('http://127.0.0.1:5000/songs').
                // then(response=>{
                //     console.log(response.data.songs);
                //     setSongs(response.data.songs); 
                //     console.log(songs);
                //     // <SongList 
                //     // songs={response.data.songs}
                //     // ></SongList>
                // }).catch(err=>{
                //     console.log(err)
                // })

                
            }
            // if(text){
            //     text+=''
            // }
            recognition.start()
            // alert(text)
        }
    }
    // const record=()=>{ 
    //     if(micOn===true)
    //     {
    //     // document.getElementById("rec").style.visibility="hidden"
    //     changeMic(false)
    //     }
    //     else
    //     {
    //     // document.getElementById("rec").style.visibility="visible"
    //     changeMic(true)
    //     }
    // }
    // useEffect(() => { 
    //     return () => {
    //         // document.getElementById("rec").style.visibility="hidden"
    //     }
    // }, [])
    
    return (
        <>
        <div>
            <h3 className="T">Speak how you feel</h3> 
          <button className="mic" onClick={record}>  <MicOutlinedIcon fontSize="large"/> </button>
            {/* <button className="mic" onClick={record}>🎙️</button> */}
            {micOn ? <div id="rec" className="rec" visibility="hidden">{<Timer/>} </div> : null}
            {micOn ? <p id="sentences" className="sentences" visibility="hidden">Unsure what to speak? We can help 
            <br/>Today is a good day.
            <br/>Hello,how are you?
            <br/>Not feeling good.
            {/* <br/>Let's just get this over with. */}
            </p> : null} 
            
            {/* {songState? 
            <Analyze 
                data={text}
                ></Analyze> : null} */}
            {/* <SongList></SongList> */}

        </div>
        {/* <Text/> */}
        <div> 
                <h3>Don't feel like speaking? No problem!</h3>
                {/* <h1>{this.state.text}</h1> */}
                <form onSubmit={submitHandler}>
                <input className="textBox" onChange= {changeHandler} value={textBox} type="text" placeholder="Pen Down"/>
                <button className="doneButton" type="submit">Done</button>
                </form>
        </div>
        <br/>
        <br/>
        {songs.length ?
        <SongList  songs={songs}  >

                    </SongList>: null}
                    </>
    )
}

export default Microphone