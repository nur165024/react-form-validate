export const ValidateInfo = (values) => {
  let errors = {};

  // full name
  if (!values.fullName) {
    errors.fullName = "Full Name is required!";
  }
  // email
  if (!values.email) {
    errors.email = "Email is required!";
  }
  // password
  if (!values.password) {
    errors.password = "password is required!";
  }
  // confirm password
  if (!values.confirm_password) {
    errors.confirm_password = "confirm password is required!";
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = "password do not match!";
  }

  return errors;
};
