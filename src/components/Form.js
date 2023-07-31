import React, {useState} from 'react';

const Form = (props) => {
  const [usernameMessage, setUsernameMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [genderMessage, setGenderMessage] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  function usernameChangeHandler(event) {
    const value = event.target.value.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (value === '') {
      setUsernameMessage('Username is mandatory');
    } else if (!emailRegex.test(value)) {
      setUsernameMessage('Invalid');
    } else {
      setUsernameMessage('Valid');
    }

    setEnteredUsername(value);
  }

  function passwordChangeHandler(event) {
    const value = event.target.value.trim();

    if (value === '') {
      setPasswordMessage('Password is mandatory');
    } else if (value.length < 8) {
      setPasswordMessage('Password must contain at least 8 characters');
    } else {
      setPasswordMessage('Valid');
    }

    setEnteredPassword(value);
  }

  const signupSubmitHandler = (event) => {
    event.preventDefault();

    const signupData = {
      username: enteredUsername,
      password: enteredPassword,
      gender: selectedGender
    };

    setEnteredUsername('');
    setEnteredPassword('');
    setSelectedGender('');
    console.log(signupData);
  };

  const options = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
    { value: "other", label: "Other" },
  ];  

  const genderChangeHandler = (event) => {
    const value = event.target.value;
  
    if (value === "female" || value === "male" || value === "other") {
      setGenderMessage('');
      setSelectedGender(value);
    } else {
      setGenderMessage('Gender is mandatory');
      setSelectedGender('');
    }
  };  

  return (
    <form onSubmit={signupSubmitHandler}>
      <label>Username* </label>
      <input
        type="text"
        value={enteredUsername}
        onChange={usernameChangeHandler}
      />
      <p>{usernameMessage}</p>

      <label>Password* </label>
      <input
        type="password"
        value={enteredPassword}
        onChange={passwordChangeHandler}
      />
      <p>{passwordMessage}</p>

      <label>Gender* </label>
      <select value={selectedGender} onChange={genderChangeHandler}>
        <option value="">Select gender</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p>{genderMessage}</p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
