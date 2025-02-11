import { useEffect, useState } from "react";
const Users = () => {
    const [users, setUsers] = useState([])
    
    useEffect(()=> {
        getAllUsers(setUsers);
    }, [])
    
    return (
        <>
        <h1>USERS</h1>
        {users.length === 0 && <h2>No Users</h2>}
        {users.length !== 0 &&
        users.map(user => (
            <div key={user.userId}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))}
        </>
    )
}

const getAllUsers = async setUsers => {
    const response = await fetch('http://localhost:3000')
const users = await response.json();
console.log(users);
}

getAllUsers()
// ASINCRONISMO
export default Users;