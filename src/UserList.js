import React, {useState, useEffect} from "react";
import axios from "axios";

function UserList(){
const [listOfUser, setListOfUsers] = useState([]);
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        setListOfUsers(response.data);
    })
    .catch(error => {
            console.log("Error Fetching from Users", error);
    });
}, []);
return(
<div style={{
    padding: '20px', fontFamily: 'Arial', backgroundColor: 'blueviolet', color: 'white'
}}>
<h1> List of Users </h1>
<ul>
    {listOfUser.map(user => (
        <li key={user.id} style={{marginBottom: '10px'}}>
            <strong>{user.name}</strong> - {user.email}
        </li>
    ))}
</ul>
</div>
);
} 
export default UserList; 