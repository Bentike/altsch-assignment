import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://randomuser.me/api/?results=100")
          .then(response => response.json())
          .then(data => {
             console.log(data.results);
             setUsers(data.results);
          });
          setIsLoading(false);
        }, []);

    
    return(
        <div>
            <h1>Users Page</h1>
            {users.map((user, i) => {
                let {phone, gender, email} = user;
                return <UserCard key={i} phone={phone} gender={gender} email={email}/>
            })}
        </div>
    )
}

export default Users;