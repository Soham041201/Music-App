import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay ,faPause, faForward, faBackward} from '@fortawesome/free-solid-svg-icons'
export default function PlayerControls(props) {
    return (
        <div>
          
            <button    className="skip-back" onClick={()=> props.SkipSong(false)}>
            <FontAwesomeIcon icon={faBackward} />
            </button>
            <button onClick={()=> props.setIsPlaying(!props.isPlaying)}  className="play">
            <FontAwesomeIcon icon={props.isPlaying ? faPause: faPlay} />
            </button>
            <button className="skip-forward">
            <FontAwesomeIcon icon={faForward} onClick={()=> props.SkipSong()}/>
            </button>
        </div>
    )
}
