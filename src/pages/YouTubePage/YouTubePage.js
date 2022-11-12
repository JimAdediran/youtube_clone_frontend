import React, { useState, useEffect } from "react"
import axios from "axios"
import { KEY } from "../../localKey"
import { Link, useParams } from "react-router-dom"
import SearchBar from "../../components/SearchBar/SearchBar"


const YouTubePage = () => {
    const {search} = useParams()
    const [videos, setVideos] = useState('')
 
    useEffect(() => {
        fetchVideo()        

    }, []);
    
    const fetchVideo = async () => {
    try{
        let response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?q=${search}&part=snippet&key=${KEY}`
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
                    <SearchBar />
                    <p>{video.snippet.title}</p>
                    <Link to ={`/search/${video.videoId}`}>
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


export default YouTubePage;