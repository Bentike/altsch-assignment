import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import UserCard from "./UserCard";

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
        <div>
        {users.length > 0 ? (
          <>
            <Pagination
              data={users}
              RenderComponent={UserCard}
              title="Active Users"
              pageLimit={5}
              dataLimit={10}
            />
          </>
        ) : (
         <h1>Loading...</h1>
        )}
      </div>
    )
}

export default Users;