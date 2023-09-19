import { Link, useRouteError } from "react-router-dom";


const ErrorPages = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h3 className="text-center text-2xl">Oops! Invalid Url</h3>
            <p className="text-center text-2xl">{error.statusText || error.message}</p>
            {
                error.status === 404 && 
                <div className="text-center text-2xl">
                    <h2>Page Not Found</h2>
                    <Link to="/"><button className="btn p-2 mt-4 text-white rounded-lg bg-red-400">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPages;