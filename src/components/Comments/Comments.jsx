import Comment from "./Comment";
import { useLoaderData } from "react-router-dom";


const Comments = () => {
    const comments = useLoaderData();
    
    return (
        <div>
            <h3 className="text-center text-2xl">Comment : {comments.length}</h3>
            <p className="text-center text-xl mt-3">Awesome Review</p>
           <div className="grid grid-cols-3 gap-10 mt-10">
           {
                comments.map(comment => <Comment key ={comment.id} comment={comment}></Comment>)
            }
           </div>
        </div>
    );
};

export default Comments;