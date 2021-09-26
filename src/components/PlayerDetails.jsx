import React from 'react'

export default function PlayerDetails(props) {
    return (
        <div className="c-playerDetail">
            <img src={props.song.img_src} alt="" className="player-photo"/>
            <h3>{props.song.title}</h3>
            <h4>{props.song.artist}</h4>
        </div>
    )
}
