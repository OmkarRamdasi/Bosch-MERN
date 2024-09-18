import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IEmployee } from "../../models/IEmployee";

const EmployeeDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [employee, setEmployee] = useState<IEmployee>();

  // reading url param using react-router-dom
  const { employeeId } = useParams();

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${employeeId}`
      );
      setEmployee(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // ideal place to connect to the rest api
    // REST API Url: https://jsonplaceholder.typicode.com/users/1
    fetchUserDetails();
  }, []);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/employee-manager">Employees</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Employee Details
          </li>
        </ol>
      </nav>

      <h1>Employee Details</h1>

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {isError && (
        <div className="alert alert-danger" role="alert">
          Something went wrong! Unable to load employee details for Employee Id:{" "}
          {employeeId}
        </div>
      )}

      {employee && (
        <>
          <Link to="/employee-manager" className="btn btn-link">
            Go Back
          </Link>
          <div className="card">
            <div className="card-header">
              You are viewing details of Employee ID: {employee?.id}
            </div>
            <div className="card-body">
              <h5 className="card-title">Name: {employee?.name}</h5>
              <p className="card-text">Email: {employee?.email}</p>
              <p className="card-text">Phone: {employee?.phone}</p>
              <Link to="edit" className="btn btn-primary">
                Edit
              </Link>

              <button className="btn btn-outline-danger">Delete</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EmployeeDetails;
