import Player from './components/Player';
import React,{useState,useEffect} from 'react';
import Songs from './data';

function App() {
  const song =Songs;
const [currentSongIndex,setCurrentSongIndex] = useState(0)
const [nextSongIndex,setNextSongIndex] = useState(0)
useEffect(()=>{
 setNextSongIndex(()=>{
  if(currentSongIndex+1 > song.length -1){
      return 0;
  }
  return currentSongIndex+1;
 });
},[currentSongIndex])

  return (
    <div className="App">
    
     <Player 
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              song = {song}
              />
    </div>
  );
}

export default App;
