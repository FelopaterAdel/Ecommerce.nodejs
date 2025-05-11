import React, { useState } from "react";

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [registerDataError, setRegisterDataError] = useState({
    nameError: null,
    emailError: null,
    usernameError: null,
    passwordError: null,
    confirmPasswordError: null,
  });

  const handleFieldChange = (e) => {
    const { id, value } = e.target;
    if (id == "name") {
      setRegisterData({
        ...registerData,
        name: value,
      });

      setRegisterDataError({
        ...registerDataError,
        nameError:
          value.length == 0
            ? "Required"
            : value.length < 3
            ? "Must be at least 3 characters"
            : null,
      });
    } 
    
    else if (id == "email") {
      setRegisterData({
        ...registerData,
        email: value,
      });
        setRegisterDataError({
          ...registerDataError,
          emailError:
          value.length ==0 ? "Required" :
            value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) 
              ? null
              : 'Not correct email format'
        });
    } 
    
    else if (id == "username") {
      setRegisterData({
        ...registerData,
        username: value,
      });
      setRegisterDataError({
        ...registerDataError,
        usernameError:
          value.length == 0
            ? "Required"
            : /\s/g.test(value)
            ? "No white spaces allowed"
            : null,
      });
      
    } 
    
    else if (id == "password") {
      setRegisterData({
        ...registerData,
        password: value,
      });
      setRegisterDataError({
        ...registerDataError,
        passwordError:
          value.length == 0
            ? "Required"
            : value.length < 8
            ? "Password Length must be at Least 8"
            : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(value)
            ? null
            : 'Password must contain at least one lowercase letter, one uppercase letter, at least one digit, and a special character [example: *@%$#]',
      });
    } 
    
    else if (id == "confirmPassword") {
      setRegisterData({
        ...registerData,
        confirmPassword: value,
      });
      setRegisterDataError({
        ...registerDataError,
        confirmPasswordError:
          value.length == 0
            ? "Required"
            : value != registerData.password
            ? "Does not match password"
            : null
            });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasError = Object.values(registerDataError).some((err) => err !== null);
    console.log(registerData)
    if(!hasError){
      alert("Registered successfully!");      
      setRegisterData({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });      
    }    
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className={'form-label'}>
            Name{" "}
            <input
              type="text"
              id="name"
              value={registerData.name}
              className={`form-control ${registerDataError.nameError && 'border-danger'}`}
              onChange={(e) => handleFieldChange(e)}
            />
          </label>
          {registerDataError.nameError && (
            <div className="text-danger">{registerDataError.nameError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Email{" "}
            <input
              type="email"
              id="email"
              value={registerData.email}
              className={`form-control ${registerDataError.emailError && 'border-danger'}`}
              onChange={(e) => handleFieldChange(e)}
            />
          </label>
          {registerDataError.emailError && (
            <div className="text-danger">{registerDataError.emailError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            User Name{" "}
            <input
              type="text"
              id="username"
              value={registerData.username}
              className={`form-control ${registerDataError.usernameError && 'border-danger'}`}
              onChange={(e) => handleFieldChange(e)}
            />
          </label>
          {registerDataError.usernameError && (
            <div className="text-danger">{registerDataError.usernameError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Password{" "}
            <input
              type="password"
              id="password"
              value={registerData.password}
              className={`form-control ${registerDataError.passwordError && 'border-danger'}`}
              onChange={(e) => handleFieldChange(e)}
            />
          </label>
          {registerDataError.passwordError && (
            <div className="text-danger">{registerDataError.passwordError}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            Confirm Password{" "}
            <input
              type="password"
              id="confirmPassword"
              value={registerData.confirmPassword}
              className={`form-control ${registerDataError.confirmPasswordError && 'border-danger'}`}
              onChange={(e) => handleFieldChange(e)}
            />
          </label>
          {registerDataError.confirmPasswordError && (
            <div className="text-danger">{registerDataError.confirmPasswordError}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </>
  );
}
