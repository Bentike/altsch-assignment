import { Link, Outlet } from "react-router-dom";
import './Styles/Home.css';

const Home = () => {
    return(
         <>
             <nav>
                <Link to='/' className="link">Home</Link>
                <Link to='users' className="link">Users</Link>
             </nav>
             <Outlet/>
         </>
    )
}

export default Home;