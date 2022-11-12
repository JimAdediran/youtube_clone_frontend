import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { KEY } from "../../localKey";
import axios from "axios";
import { Link } from "react-router-dom";
import AddComment from "../../components/AddComment/AddComment";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";


const VideoPage = () => {;
    const { videoId } = useParams();
    const { id } = useParams();
    const { title, description } = useParams()
    const [videos, setVideos] = useState("")
   


    useEffect(() => {
        fetchRelatedVideos();
    }, [])


const fetchRelatedVideos = async (search = "nba") => {
    try {
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&part=snippet&key=${KEY}`
        );
        setVideos(response.data.items);
        console.log(response.data.items)
      } catch (error) {
        console.log(error.response.data);
      }
    };


return (
  <div>
        <div className="video">
          <VideoDisplay id={id} />
          <AddComment />
        </div>
        <div>
        {videos && videos.map((video) => (
          <p key={video.id.videoId}>
           Title: {video.snippet.title} 
           <br />
           <Link to={`/videos/${video.id.videoId}/`}>
            <img src={video.snippet.thumbnails.medium.url} />
           </Link>
            <br />
           Description: {video.snippet.description}
           <br />
           <br />
           <br />
          </p>
        ))}
        </div>
  </div>
)
}


export default VideoPage;