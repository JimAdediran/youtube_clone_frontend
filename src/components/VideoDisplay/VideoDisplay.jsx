import React from "react";

const VideoDisplay = (props) => {

let currentVideo = `http://www.youtube.com/embed/${props.id}`

    return (
        <div>
        <div>
        <iframe 
        id="player" 
        type="text/html" 
        width="640" 
        height="390"
        src={currentVideo}
        frameborder="0">   
        </iframe>
        </div>
        <div>
            Title: {props.title}
        </div>
        <div>
            Description: {props.description}
        </div>
        </div>
    );
};

export default VideoDisplay