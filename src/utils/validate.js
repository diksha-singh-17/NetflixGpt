const CheckValidData = (email, password) => {
  // if (email || password || userName === null) {
  //   console.log("empty");
  //   return "Input is Empty";
  // }
  const validateEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/gm.test(email);
  const validatePassword =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/.test(
      password
    );
  // const validateUserName = /^[a-z A-Z\-]+$/.test(userName);

  if (!validateEmail) return "Email Id is not Valid";
  if (!validatePassword) return "Password is not Valid";
  // if (!validateUserName) return "UserName is not Valid";

  return null;
};

export default CheckValidData;
