function validationForm() {
  let username1 = document.forms["myform"]["Name"];
  // let username2 = document.forms["SampleForm"]["lname"];
  let email = document.forms["myform"]["Email"];
  let pass = document.forms["myform"]["Password"];

  // var strUser1 = e.options[e.selectedIndex].text;
  // let nameerr = document.forms["RegForm"] ["nameerr"];
  nameRegex = /^[A-Za-z]+$/
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{10,}$/

  if (username1.value == "" || !nameRegex.test(username1.value)) {
      alert("Please enter your first name. Use alphabet only");
      username1.style.border = "2px solid red";
      username1.innerHTML = "Please enter your first name. Use alphabet only "
      // username1.focus();
      return false;
  }
  else {
    username1.style.border = "2px solid green";
}
// if (username2.value == ""  || !nameRegex.test(username2.value)) {
//     alert("Please enter your last name. Use alphabet only");
//     username2.style.border = "2px solid red";
//     username2.innerHTML = "Please enter your last name"
//     // username2.focus();
//     return false;
// }
// else {
//     username2.style.border = "2px solid green";
// }
if (email.value == "" || !emailRegex.test(email.value)) {
    alert("Please enter your email");
    email.style.border = "2px solid red";
    email.innerHTML = "Please enter your email"
    // email.focus();
    return false;
}
if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {
  alert("Please enter a valid email address");
  email.style.border = "2px solid red";
  // email.innerHTML = "Please enter a valid email address ........@.... . ...."
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
}