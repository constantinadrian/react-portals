import React, { useState } from "react";
// import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            });
            return
        }

        // lifting the state up by calling the onAddUser that we pass to props
        // to pass the username and age that we enter to addUserListHandler from 'App.js'
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    // using react fragments: <React.Fragment></React.Fragment> import React from 'react';
    // or <Fragment></Fragment> import React, { Fragment } from 'react';
    // or <> </>
    // 
    return (
        <>
            {error && (
                <ErrorModal 
                    title={error.title} 
                    message={error.message} 
                    onConfirm={errorHandler}
                    />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        id='username' 
                        value={enteredUsername} 
                        onChange={usernameChangeHandler}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        type='number' 
                        id='age' 
                        value={enteredAge} 
                        onChange={ageChangeHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )

    // using a wrapper component
    // return (
    //     <Wrapper>
    //         {error && (
    //             <ErrorModal 
    //                 title={error.title} 
    //                 message={error.message} 
    //                 closeModal={errorHandler}
    //                 />
    //         )}
    //         <Card className={styles.input}>
    //             <form onSubmit={addUserHandler}>
    //                 <label htmlFor='username'>Username</label>
    //                 <input 
    //                     type='text' 
    //                     id='username' 
    //                     value={enteredUsername} 
    //                     onChange={usernameChangeHandler}/>
    //                 <label htmlFor='age'>Age (Years)</label>
    //                 <input 
    //                     type='number' 
    //                     id='age' 
    //                     value={enteredAge} 
    //                     onChange={ageChangeHandler}/>
    //                 <Button type='submit'>Add User</Button>
    //             </form>
    //         </Card>
    //     </Wrapper>
    // )
}

export default AddUser