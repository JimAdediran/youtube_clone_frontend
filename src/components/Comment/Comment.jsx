//do not have to be logged in to view comments, map comment - user associated, video associated
//API call to "get" comments

const Comment = ({ text, userName }) => {
    return (
        <div>
            {userName}: {text}
        </div>
    )
}

export default Comment;

