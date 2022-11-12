import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import CommentForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

const AddComment = ({ videoId }) => {

    //auth key required to post comment(must be logged in) api call to "post" comment

    const [comments, setComments] = useState("");
    const [user, token] = useAuth();

    useEffect(() => {
        fetchComments(videoId);
    }, [videoId]);



    const fetchComments = async () =>{
        try {
         const response = await axios.get(`http://127.0.0.1:8000/api/comment/${videoId}`)  
         setComments(response.data)
    } catch (error) {
            console.log(error.message)
    }}

    

    const postNewComment = async (textPost) => {
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/comment", { video_id: videoId, text: textPost },
            {headers: {Authorization: `Bearer ${token}`,},} )
         fetchComments(videoId);
        } catch (error){
            console.log(error.message)
        }
        
        }

        
    return (
        <div>
        <CommentForm commentEntry={postNewComment} />
        <br></br>
        {comments && 
        comments.map((comment) => {
            return (
                <Comment
                 key={comment.id}
                 text={comment.text}
                 userName={comment.user.userName} />
            )
        })}
        </div>

    )

    }

    export default AddComment;