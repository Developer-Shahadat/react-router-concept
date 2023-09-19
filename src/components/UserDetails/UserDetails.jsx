import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    
    const users =  useLoaderData();

    // Use Navigate 
    const navigate  = useNavigate();
    const {name,email,website} =  users

    // Use HHandle Click Button
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="border-2 p-2 border-blue-400 rounded-lg text-center w-1/4 mx-auto ">
            <h3>Details Of Users : {name} </h3>
            <h3>Details Of Users Email : {email} </h3>
            <h3>Details Of Users website : {website} </h3>
            <button onClick={handleGoBack} className='p-2 mt-4 text-white rounded-lg bg-red-400'>Go Back</button>
        </div>
    );
};

export default UserDetails;