function validationForm() {
    let name = document.forms["myform"]["name"];
    let username = document.forms["myform"]["userName"]
    let email = document.forms["myform"]["Email"]
    let pass = document.forms["myform"]["password"]
    let role = document.forms["myform"]["role"]


    nameRegex = /^[A-Za-z]+$/
    usernameRegex = /^[A-Za-z]+$/
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,}$/
  roleRegex = /^[A-Za-z]+$/

   if (name.value == "" || !nameRegex.test(name.value)) {
    alert("Please enter your name. use alphabet only");
    name.style.border = "2px solid red";
    name.focus();
    return false;
   } else {
    name.style.border ="2px solid green";
   }

   if (username.value == "" || !nameRegex.test(username.value)) {
    alert("Please enter your name. use alphabet only");
    username.style.border = "2px solid red";
    username.focus();
    return false;
   } else {
    username.style.border ="2px solid green";
   }

   if (email.value == "" || !emailRegex.test(email.value)) {
    alert("Please enter your email");
    email.style.border = "2px solid red";
    // email.innerHTML = "Please enter your email"
    email.focus();
    return false;
}
if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
  alert("Please enter a valid email address");
  email.style.border = "2px solid red";
//   email.innerHTML = "Please enter a valid email address ........@.... . ...."
  email.focus();
  return false;
}

   if (pass.value == "" || !passRegex.test(pass.value)) {
    alert("Please enter a valid password. A valid password must contain an uppercase and lower case letters, a number and a special character");
    pass.style.border = "2px solid red";
    pass.focus();
    return false;
  }
  else {
    pass.style.border = "2px solid green";
  }

  if (role.value == "" || !roleRegex.test(role.value)) {
    alert("Please enter your role. use alphabet only");
    role.style.border = "2px solid red";
    role.focus();
    return false;
   } else {
    role.style.border ="2px solid green";
   }










}