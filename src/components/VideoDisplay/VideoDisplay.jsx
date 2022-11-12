import React from "react";

const VideoDisplay = (props) => {

let currentVideo = `https://www.youtube.com/embed/${props.id}`

    return (
       
        <iframe 
        id="player" 
        type="text/html" 
        width="640" 
        height="390"
        src={currentVideo}
        frameborder="0">   
        </iframe>
    )
    
};

export default VideoDisplay