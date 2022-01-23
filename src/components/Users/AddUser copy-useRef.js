import React, { useState, useRef } from "react";
// import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css'

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredUserName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value
        
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return
        }
        if (+enteredUserAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            });
            return
        }

        // lifting the state up by calling the onAddUser that we pass to props
        // to pass the username and age that we enter to addUserListHandler from 'App.js'
        props.onAddUser(enteredUserName, enteredUserAge);

        // if you want to use uncontrolled inputs use 'ref' (do that only on uncrontrolled inputs like address form on profile
        // where you don't need to reset the input value of the form, an input box, dropdown)
        // this edge case of manipulating the DOM (DON'T DO THAT),
        // but for more cleaner code useState (those input fields are controlled components
        // because their internal state is controlled by react.)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    };

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
                        ref={nameInputRef}/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input 
                        type='number' 
                        id='age' 
                        ref={ageInputRef}/>
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