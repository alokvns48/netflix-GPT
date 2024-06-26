export const checkValidData = (email, password,name=null) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = name || true

  /* ? /[a-zA-Z]+\\.?/.test(name): true */

  if (!isEmailValid) return "Email address is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isNameValid) return "Enter a valid name"

  return null;
};
