import React from "react";
import useForm from "./useForm";
import { ValidateInfo } from "./ValidateInfo";

const FormSignUp = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(ValidateInfo);

  return (
    <div className="row justify-content-center">
      <div className="col-12 text-center py-3">
        <h3>This is form validation</h3>
      </div>
      <hr />
      <div className="col-8">
        <form onSubmit={handleSubmit}>
          {/* name */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className={`form-control ${errors.fullName && "is-invalid"}`}
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              value={values.fullName}
              onChange={handleChange}
            />
            <label htmlFor="fullName">Full Name</label>
            {errors.fullName && (
              <span className="text-danger">{errors.fullName}</span>
            )}
          </div>

          {/* email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              name="email"
              id="email"
              placeholder="name@example.com"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email address</label>
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          {/* password */}
          <div className="form-floating mb-3">
            <input
              type="password"
              className={`form-control ${errors.password && "is-invalid"}`}
              placeholder="Password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          {/* confirm password */}
          <div className="form-floating">
            <input
              type="password"
              className={`form-control ${
                errors.confirm_password && "is-invalid"
              }`}
              placeholder="Confirm Password"
              id="confirm_password"
              name="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
            />
            <label htmlFor="confirm_password">Confirm Password</label>
            {errors.confirm_password && (
              <span className="text-danger">{errors.confirm_password}</span>
            )}
          </div>

          <div className="mt-3 text-end">
            <button type="submit" className="btn btn-secondary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
