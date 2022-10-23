import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://randomuser.me/api/?results=5000")
          .then(response => response.json())
          .then(data => console.log(data.results));
          setIsLoading(false);
        }, []);

    return(
        <div>
            <h1>Users Page</h1>
            {isLoading ? "Loading..." : <UserCard/>}
            {/* {<UserCard/>} */}
        </div>
    )
}

export default Users;