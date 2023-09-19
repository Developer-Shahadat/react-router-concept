import { useLoaderData, useNavigate } from "react-router-dom";


const CommentDetails = () => {
    const navigate = useNavigate();
    const commentDetails = useLoaderData();
    const {id,email,body} = commentDetails;
    const handleGoHome = ()=>{
        navigate(-1);
    }
    return (
        <div className="border-2 p-2 border-blue-400 rounded-lg text-center w-1/4 mx-auto">
            <h1 className="text-center text-2xl">Details Comments Review </h1>
            <h3>Details Id : {id}</h3>
            <h3>Email : {email}</h3>
            <p>Body : {body}</p>
            <button onClick={handleGoHome} className='p-2 mt-4 m-2 text-white rounded-lg bg-red-400'>Go Home</button>
        </div>
    );
};

export default CommentDetails;