import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import UserCard from "./UserCard";
import './Styles/Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=100")
          .then(response => response.json())
          .then(data => {
             console.log(data.results);
             setUsers(data.results);
          });
        }, []);

    
    return(
        <div className="users">
        {users.length > 0 ? (
          <div>
            <Pagination
              data={users}
              RenderComponent={UserCard}
              title="Active Users"
              pageLimit={5}
              dataLimit={10}
            />
          </div>
        ) : (
         <h1>Loading...</h1>
        )}
      </div>
    )
}

export default Users;