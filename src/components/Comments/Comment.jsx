
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {id,name,email} = comment;
    const handleClickMe = ()=> {
        navigate(`/comments/${id}`);
    }
    return (
        <div className='text-center text-2xl border-2 border-red-300 p-3 rounded-2xl m-2'>
            <h2>Comment Id : {id}</h2>
            <h2>Name : {name}</h2>
            <h2>Email : {email}</h2>
            <Link to={`/comments/${id}`}><button className='p-2 mt-4 text-white rounded-lg bg-red-400'>Show More Details</button></Link>
            <button onClick={handleClickMe} className='p-2 mt-4 text-white rounded-lg bg-red-400 mx-2'>Click Me</button>
        </div>
    );
};

Comment.propTypes = {
    comment : PropTypes.string.isRequired
};

export default Comment;