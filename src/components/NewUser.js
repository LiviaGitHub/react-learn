import React from 'react';

import Form from './Form';

const NewUser = () => { 
    const onSaveUserData = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString()
        };
            console.log(userData);
    };

    return (
        <div>
            <Form onSaveUserData={onSaveUserData}/>
        </div>
    )
}

export default NewUser;