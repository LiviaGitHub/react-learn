import React from 'react';

const Form  = () => {
    const [messageValidity, setMessageValidity] = React.useState('Invalid');
    
    function messageChangeHandler(event) {
        const value = event.target.value;
        if (!value.includes('@') || !value.includes('.com')) {
            setMessageValidity('Invalid')
          } else {
            setMessageValidity('Valid');
          }
    }

    return (
        <form>
            <label>Username </label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} username</p>
            <label>Password </label>
            <input type="text" onChange={messageChangeHandler} />
            <p>{messageValidity} password</p>
            <button type="submit">Submit</button>
        </form>
    )
};

export default Form;