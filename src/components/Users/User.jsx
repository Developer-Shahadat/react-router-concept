
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
const User = ({user}) => {
    // Use navigate
    const navigate = useNavigate();
    const {id,name,email,phone,website} = user


    // Use Button Handle Click 
    const handleClickMe = () => {
        navigate(`/users/${id}`)
    }
        return (
        <div className='text-center text-2xl border-2 border-yellow-300 p-3 rounded-2xl m-2'>
            <h3>{name}</h3>
            <h3>Email : {email}</h3>
            <h3>Phone :{phone}</h3>
            <h3>{website}</h3>
            <div className='text-lg '> 
            <Link to ={`/users/${id}`}><button className='p-2 mt-4 text-white rounded-lg bg-red-400'>Show Details</button></Link>
            <button onClick={handleClickMe} className='p-2 mt-4 m-2 text-white rounded-lg bg-red-400'>Click Me</button>
            </div>
        </div>
    );
};
User.propTypes ={
    user : PropTypes.string.isRequired
} 

export default User;