import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation  = useNavigation();
    return (
        <div>
            
            <Header></Header>
            {
                navigation.state === "loading" ?
                 <p className="text-center text-7xl">Loading...</p> :
                <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Home;