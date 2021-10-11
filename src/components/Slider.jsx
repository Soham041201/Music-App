import React from 'react'

export default function Slider(props) {
  console.log(props.duration);
  let track = document.createElement('audio');
  let slider = document.querySelector('#duration_slider');
  function handleChange(){ 
    //functionality yet to be added
    const slider_position = props.duration * (slider.value / 100);
    track.currentTime = slider_position;
    console.log(track.currentTime);
  }
    return (
        <div class="mdc-slider">
        <input class="mdc-slider__input" type="range" min="0" max="100" value={track.currentTime} name="volume" onChange={handleChange} id="duration_slider" aria-label="Continuous slider demo"/>
        <div class="mdc-slider__track">
          <div class="mdc-slider__track--inactive"></div>
          <div class="mdc-slider__track--active">
            <div class="mdc-slider__track--active_fill"></div>
          </div>
        </div>
        <div class="mdc-slider__thumb">
          <div class="mdc-slider__thumb-knob"></div>
        </div>
      </div>
    )
}
