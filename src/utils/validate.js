export const checkValidData = (email, password, fullName, confirmPasswordValue, isSignInForm) => {
  // we are using a regex to validate email & pw
  const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPassWordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/.test(password);

  const isFullNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullName)

  if (!isEmailvalid) return "Invalid Email ID";
  if (!isPassWordValid) return "Invalid PassWord";
  if(!isFullNameValid) return "Invalid UserName"
  if(!isSignInForm && password !== confirmPasswordValue ) return "Confirm PassWord should be Same"


  // returning null means ki humare string ke andar koi error msg nhi hai
  return null;
};
