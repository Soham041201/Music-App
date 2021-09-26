import React,{useState,useRef, useEffect} from 'react'
import PlayerDetails from './PlayerDetails'
import PlayerControls from './PlayerControls'
import { layer } from '@fortawesome/fontawesome-svg-core';
function Player(props) {
    
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    });


    const SkipSong = (forwards=true) =>{
        if(forwards){
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp++;

                if(temp> props.song.length -1){
                    temp =0;
                }

                return temp;
            })
        }else{
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp--;

                if(temp<0 ){
                    temp =props.song.length -1;
                }

                return temp;
            });
        }
    }
    return (
       <div className="c-player">
           <audio src={props.song[props.currentSongIndex].src } ref={audioEl}></audio>
           <h4>Playing now</h4>
          <PlayerDetails 
                song={props.song[props.currentSongIndex]}
                />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
                />
           <p>Next up: {props.song[props.nextSongIndex].title} by {props.song[props.nextSongIndex].artist}  </p>
       </div>
    )
}

export default Player;
