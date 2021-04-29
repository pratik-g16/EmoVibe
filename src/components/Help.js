import React,{useState} from 'react'

export default function Help() {
    const [helpOn,changeHelp]=useState(false)
    const helpFunction=()=>{
        if(helpOn==true)
        {
            alert("Help is now off")
            changeHelp(false)
        }
        else{
            alert("Help is now on")
            changeHelp(true)
        }
    }
    return (
        <div>
        <button id="help" className="help" onClick={helpFunction}>Help</button>
        {helpOn? alert("Hi"):alert("Bye")}
       </div>
    )
}
