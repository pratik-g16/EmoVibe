import React, { Component } from 'react'
import Card from './Cards/Card'
class SongList extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            //  songs:[
            //      {name:"abc",emotion:"HAPPY",link:"https://www.youtube.com/embed/fSS_R91Nimw"},
            //      {name:"def",emotion:"HAPPY",link:"https://www.youtube.com/embed//oyaudgo5_8Y"},
            //      {name:"def",emotion:"HAPPY",link:"https://www.youtube.com/embed/jAUSF4_ygJg"}
            //  ]
            songs:this.props.songs
        }
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.songs !== prevProps.songs) {
          this.setState({songs:this.props.songs})
        }
      }

    render() { 
        console.log("Songs from songlist");
        console.log(this.state.songs);
        return (
            <div> 

                     {this.state.songs.map((item,index)=>{
                         return(
                             <Card
                             key={index}
                             name={item.name}
                             emotion={item.emotion}
                             link={item.link}
                             >
                             </Card>
                         )
                     })}
          
            </div>
        )
    }
}

export default SongList
