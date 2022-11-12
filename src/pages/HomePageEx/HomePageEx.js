import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { KEY } from "../../localKey"
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom"

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videoData, setVideoData] = useState([]);

  



  useEffect(() => {
    fetchVideoData();
  }, [token]);

  const fetchVideoData = async (searchTerm = "bob ross") => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&type=video&part=snippet&key=${KEY}`
      );
      setVideoData(response.data.items);
      console.log(response.data.items)
    } catch (error) {
      console.log(error.response.data);
    }
  };



  return (
    <div className="homepage">
      <SearchBar fetchVideoData={fetchVideoData}/>
      <h1>Home Page for {user.username}!</h1>
      {videoData && videoData.map((video) => (
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
  );
};

export default HomePage;
