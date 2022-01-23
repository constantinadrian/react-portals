import React, { useState } from 'react';

import { v1 as uuidv1 } from 'uuid';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';


function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserListHandler = (user, age) => {
        const id = uuidv1();
        // using 'unshift' add the user at the begining of the array
        setUsersList(prevUsersList => {
            const updatedUsers = [...prevUsersList];
            updatedUsers.unshift({name: user, age: age, id: id.toString()});
            return updatedUsers;
        });

        // add user at the end of the array
        // setUsersList((prevUsersList) => {
        //     return [
        //       ...prevUsersList,
        //       { name: user, age: age, id: id.toString() },
        //     ];
        // })
    }

    return (
        <>
            <AddUser onAddUser={addUserListHandler}/>
            {/* render this component only if we have data on the userList array */}
            {usersList.length > 0 && <UserList users={usersList} />}
        </>
    );
}

export default App;
