import React, { useState } from "react"

const CommentForm = ({ commentEntry }) => {

const [textPost, setTextPost] = useState("")    




return (
    <form onSubmit={(event) => {event.preventDefault();
    commentEntry(textPost);
    setTextPost("");
    }}>
    <label>
        Comment
        <input
         type=""
         name="textPost"
         value={textPost}
         onChange={(event) => setTextPost(event.target.value)}
         />
         </label>
         <button>Submit</button>
</form>

)    

}



export default CommentForm
