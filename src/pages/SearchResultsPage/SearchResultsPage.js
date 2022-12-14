import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"



const SearchResultsPage = () => {
    const {search} = useParams()
    const [videos, setVideos] = useState('')

    const BUILD_ENV = process.env.REACT_APP_YT_API_Key  
 
    useEffect(() => {
        fetchVideo()        

    }, []);
    
    const fetchVideo = async () => {
    try{
        let response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=${BUILD_ENV}`
        );
        setVideos(response.data);
    } catch (error) {
      console.log(error);
    }
  
    return (
    <div>
        {videos &&
        videos.map((video) => {
            return(
                <div key={video.snippet.videoId}>
                    <p>{video.snippet.title}</p>
                    <Link to ={`/videos/${video.videoId}`}>
                        <img src={video.snippet.thumbnails.default.url} />
                    </Link> 
                </div>
            )
        }
        )
        }
    </div>
)}
}


export default SearchResultsPage;