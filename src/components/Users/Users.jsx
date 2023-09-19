import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2 className="text-center text-2xl">Our Users : {users.length}</h2>
            <p className="text-center text-xl mt-3">Awesome Review</p>
            <div className="grid grid-cols-3 gap-10 mt-10">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;