import logo from './logo.svg';
import './App.css';
import Microphone from './components/Microphone';
import Text from './components/Text';
import Analyze from './components/Analyze';
import Help from './components/Help';
import Song from './components/Song'
import Home from "./components/Home"
import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'
import SongList from './components/SongList';
function App() {
  
  {document.title="EmoVibe"}
  return (
    <div className="App">
    <img className="logo" height="15%" width="15%" src="/icon.png" alt="logo"/> 
      <h1 className="text">Songs according to your mood</h1> 
       {/* <Microphone/> 
       <Text/> */}
       <Home></Home>
       {/* <SongList></SongList> */}
       {/* Extra song page */}
       {/* <Router>
          <Link to='/'> <button>Home</button></Link>
          <Link to='/Song'><button>Songs</button></Link>
         <Switch>
         <Route path="/" exact component={Home}/> 
        <Route path="/Song" exact component={SongList}/> 
        </Switch>
       </Router>
       <SongList/> */}





       {/* </div> */}
       {/* <Help/> */}
       {/* <img src="https://media.istockphoto.com/videos/dancing-crowd-at-rock-concert-with-their-hands-above-and-cheering-video-id1198823214?b=1&k=6&m=1198823214&s=640x640&h=J1DcAzUzk7FPl9pZc1978iCcokKL-8BuzKdo-U9cROU="/> */}
       {/* <Analyze/> */}
       
    {/* <img className="bg" height="15%" width="100%" src="/band1.png" alt="logo"/>  */}
    </div>
  );
}

export default App;
