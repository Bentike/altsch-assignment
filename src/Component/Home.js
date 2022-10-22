import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return(
         <>
             <nav>
                <Link to='/'>Home</Link>
                <Link to='users'>Users</Link>
             </nav>
             <Outlet/>
         </>
    )
}

export default Home;