import './Card.css' 
import Emotion from './Emotion'
import Name from './Name'
import Link from './Link'
function Card(props)
{
    return(
        <>
  <div className="cards"> 
    <div className="card">
        {/* <img src={props.imgsrc} alt="myPic" classsName="card_img" height="200px" width="200px"/> */}
        {/* <Name name={props.name} /> */}
        <div className="card_info">
          {/* <span classsName="card_category">{props.title}</span> */}
          {/* <Emotion emotion={props.emotion}/>  */}
          <Link link={props.link}/>
        </div>
    </div>
  </div>
  </>
    )
}
export default Card

