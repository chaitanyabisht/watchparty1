import React from 'react'
import ReactPlayer from 'react-player'

// Render a YouTube video player

function Player(){
    return(
        <div className='player-wrapper'>
            <ReactPlayer 
                url='http://localhost:8000/live/test1.flv' 
            />
        </div>
    );
}

export default Player
