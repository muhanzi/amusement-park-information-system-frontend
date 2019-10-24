function UserInfo() {
  var email;
  var getEmail = () => {
    return email; // Or pull this from cookie/localStorage
  };

  var setEmail = text => {
    email = text;
    // Also set this in cookie/localStorage
  };

  return {
    FunctionGetEmail: getEmail,
    FunctionSetEmail: setEmail
  };
}

export default UserInfo;
