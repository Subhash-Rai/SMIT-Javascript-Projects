
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let password = document.getElementById("password");
let gender = document.getElementsByName("gender");
let signupBtn = document.getElementById("signupBtn");



const sweety = (error, title, message) => {
  Swal.fire({
    icon: error,
    title: title,
    text: message,
  });
};


const signupHandler = () => {
  if (
    firstName.value.trim() == "" ||
    lastName.value.trim() == "" ||
    day.value.trim() == "" ||
    month.value.trim() == "" ||
    year.value.trim() == "" ||
    password.value.trim() == "" ||
    gender.value.trim() == "" ||
    signupBtn.value.trim() == ""
  ); {
    return sweety("error", "something went wrong", "Please Enter all fields!");
  }
}

var s = {
  firstName: firstName.value,
  lastName: lastName.value,
  email: email.value,
  day: day.value,
  month: month.value,
  year: year.value,
  password: password.value,
};
