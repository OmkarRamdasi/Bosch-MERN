import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IEmployee } from "../models/IEmployee";
import { Helmet } from 'react-helmet-async';
const EmployeeManagerPage = () => {
  console.log("1. Program Started");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res: any) => {
        console.log(res.data);
        setEmployees(res.data);
      })
      .catch((err: any) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        console.log("It is over!");
        setIsLoading(false);
      });

    console.log("3. Inside useEffect");
  }, []);

  console.log("2. Program Ended");
  return (
    <div className="container px-4 py-5">
      <Helmet>
        <title>Employee Manager</title>
      </Helmet>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            className="d-block mx-lg-auto img-fluid"
            alt="Employee Manager App"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to Employee Manager App
          </h1>
          <p className="lead">
            You can browse, add, edit, delete employees here.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link
              to={"/employee-manager/add"}
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Add Employee
            </Link>
          </div>
        </div>
      </div>

      <div className="row py-5">
        <h2>Listing Employees</h2>
        
        {isLoading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {isError && (
          <div className="alert alert-danger" role="alert">
            Something went wrong! Unable to load employees
          </div>
        )}

        {employees?.map((employee) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={employee.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{employee.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {employee.email}
                  </h6>
                  <Link to={`/employee-manager/${employee.id}`} className="card-link">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeManagerPage;
