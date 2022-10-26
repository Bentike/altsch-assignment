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
              dataLimit={12}
            />
          </div>
        ) : (
         <img className="spinner" src="https://awagro.by/img/text/preloader.gif"/>
        )}
      </div>
    )
}

export default Users;