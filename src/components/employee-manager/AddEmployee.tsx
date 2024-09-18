import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { IEmployee } from "../../models/IEmployee";

const AddEmployee = () => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IEmployee>({
    mode: 'all', // Validation happens on every change
  });
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isDisabled,setIsDisabled] = useState<boolean>(true);
  const [isLoading,setIsLoading] = useState<boolean>(false);

  const onAddEmployeeSubmit = (formData: any) => {
    setIsLoading(true)
    // send the above formData to the REST API
    /*
      1. What's the REST API Endpoint? https://jsonplaceholder.typicode.com/users
      2. What's the HTTP Method? POST
      3. What's the REST API Client? fetch API (part of JS), axios (npm i axios)
    */

    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res: any) => {
        // upon successful response -- then will be called
        
        setIsSaved(true);
        setIsDisabled(false)
      })
      .catch((err: any) => {
        setIsDisabled(true)
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false)
        console.log("It is over!");
      });
  };

  useEffect(()=>{
    if(!isValid)
    {
      setIsDisabled(true)
    }else{
      setIsDisabled(false)
    }
  },[isValid])

  return (
    <div>
      <h1>Add Employee</h1>
      <Link to="/employee-manager" className="btn btn-link">
        Go Back
      </Link>
      <form
        className="col-md-6 offset-md-3"
        onSubmit={handleSubmit(onAddEmployeeSubmit)}
      >
        <div className="form-group row mb-3">
          <label className="col-sm-2 col-form-label" htmlFor="nameInput">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              id="nameInput"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters long',
                },
              })}
              placeholder="Enter Name"
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              id="phoneInput"
              className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be 10 digits',
                },
              })}
              placeholder="Enter Phone"
            />
            {errors.phone && (
              <div className="invalid-feedback">{errors.phone.message}</div>
            )}
          </div>
        </div>
        <div className="form-group row mb-3">
          <label htmlFor="emailInput" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              id="emailInput"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Enter Email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>
        </div>

        {isSaved && (
          <div className="alert alert-success">Saved Successfully</div>
        )}

        {isError && (
          <div className="alert alert-danger">
            Some Error Occurred. Try again later!
          </div>
        )}

        <div className="form-group row">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary" disabled={isDisabled}>
              {isLoading ? "Submitting...": "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
