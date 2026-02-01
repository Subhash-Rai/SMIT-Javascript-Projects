
// function showPassword() {
//   const pass = document.getElementById("show");
//   pass.type = pass.type === "password" ? "text" : "password"
// };


let fullName = document.getElementById("fullname");
let email = document.getElementById("email");
let firstPassword = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpassword");
let loginBtn = document.getElementById("loginbtn");

let users = [];

const sweety = (error, title, message) => {
  Swal.fire({
    icon: error,
    title: title,
    text: message,
  });
};


function login() {
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const firstPassword = document.getElementById("firstpassword").value;
  const confirmPassword = document.getElementById("confirmpassword").value;

  console.log("Username:", fullName);
  console.log("email:", email);
  console.log("firstPassword:", firstPassword);
  console.log("confirmPassword:", confirmPassword);

  if (fullName === "" || email === "" || firstPassword === "" || confirmPassword === ""
  ) {
    return sweety(
      "error",
      "Something went wrong",
      "Please Enter all fields!"
    );

  }
  if (firstPassword !== confirmPassword
  ) {
    return sweety(
      "error",
      "Password Mismatch",
      "Please Check your password again!"
    );
  }

  if (firstPassword.length < 6 || confirmPassword.length < 6) {
    return sweety(
      "error",
      "Weak Password",
      "Password must be at least 6 characters long!",
    );
  }

  if (!email.includes("@gmail.com")) {
    return sweety(
      "error",
      "Invalid Email",
      "Please enter a valid email address!",
    );
  }

  const userObj = {
    fullName: fullName,
    email: email,
    firstPassword: firstPassword,
    confirmPassword: confirmPassword,
  };
  users.push(userObj);
  localStorage.setItem("users", JSON.stringify(users));
  sweety("success",
    " Your Login",
    "Congratulations! Login successfully!");

    window.location.href = "/dashboard";

    // firstPassword.value = "";
};

loginBtn.addEventListener("click", login);


