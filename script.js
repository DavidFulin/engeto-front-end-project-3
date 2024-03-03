/**************** 
    HTML elements 
*****************/
const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const themeSwitchButton = document.querySelector("#btn-change-theme");
const themeSwitchIcon = document.querySelector("#change-theme-icon");
const formRegistration = document.querySelector("#form-reg");
const formRegistrationEmail = document.querySelector("#form-reg-email");
const formRegistrationPwd1 = document.querySelector("#form-reg-pwd1");
const formRegistrationPwd2 = document.querySelector("#form-reg-pwd2");
const errNotificationEmail = document.querySelector("#err-notification-email");
const errNotificationPwd = document.querySelector("#err-notification-pwd");
const scrollUpButton = document.querySelector("#btn-scroll-up");

/**************** 
    Navigation menu (hamburger) handler 
*****************/
menuIcon.addEventListener("click", () => {
  // switch classes (hamburger <-> cross)
  hamburgerIcon.classList.toggle("fa-bars");
  hamburgerIcon.classList.toggle("fa-xmark");
  // set menu visibility
  menuList.style.display = hamburgerIcon.classList.contains("fa-bars")
    ? "none"
    : "block";
});

/**************** 
    Switch theme handler
*****************/
themeSwitchButton.addEventListener("click", (e) => {
  // change button icon
  themeSwitchIcon.classList.toggle("fa-moon");
  themeSwitchIcon.classList.toggle("fa-sun");
  // change button text
  themeSwitchButton.querySelector("span").innerText =
    document.body.classList.contains("dark") ? "Dark mode" : "Light mode";
  // change body class
  document.body.classList.toggle("dark");
});

/**************** 
    Registration form handler
*****************/
formRegistration.addEventListener("submit", (event) => {
  event.preventDefault();

  // check email
  let isEmailValid = true;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // check format
  if (!formRegistrationEmail.value.match(emailPattern)) {
    isEmailValid = false;
    errNotificationEmail.textContent = "Email has invalid format !";
  }

  // set email error notification visibility
  errNotificationEmail.style.display = isEmailValid ? "none" : "block";

  // check password(s)
  let isPwdValid = true;
  const pwdMinCharsLength = 6;

  // check min. length
  if (formRegistrationPwd1.value.length < pwdMinCharsLength) {
    isPwdValid = false;
    errNotificationPwd.textContent = `Password must contain at least ${pwdMinCharsLength} characters !`;
  } 
  // check passwords match
  else if (formRegistrationPwd1.value !== formRegistrationPwd2.value) {
    isPwdValid = false;
    errNotificationPwd.textContent = "Passwords don't match !";
  }

  // set pwd error notification visibility
  errNotificationPwd.style.display = isPwdValid ? "none" : "block";

  // form final result
  if (isEmailValid && isPwdValid) {
    alert("Account successfully created ! :)");
  }
});

/**************** 
    Scroll-up button handler 
*****************/
window.addEventListener("scroll", () => {
  // set button visibility
  scrollUpButton.style.display =
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? "block"
      : "none";
});
scrollUpButton.addEventListener("click", () => {
  // scroll to top
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
});
