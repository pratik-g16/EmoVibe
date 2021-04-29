import React from 'react'
const Link=(props)=>{
    // return <span className="card_category">{props.link}</span>

    return( 
        <div>
        <iframe width="100%" allowfullscreen=""
    src={props.link}>
    </iframe>
            {/* <video width="320" height="240" controls>
             <source src={props.link} type="video/mp4"></source> 
            Your browser does not support the video tag.
            </video>  */}
        </div>
    )
    
}
export default Link