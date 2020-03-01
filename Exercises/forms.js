const wes = document.querySelector(".wes");
wes.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("You cliked it!");
  const shouldChangePage = confirm("This website might be malicious!");
  if (!shouldChangePage) {
    event.preventDefault();
    console.log(shouldChangePage);
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();

  //   console.log(event.currentTarget.name.value);
  //   console.log(event.currentTarget.email.value);
  //   console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("Sorry bro");
    event.preventDefault();
  }
});

// 'keyup'
// 'keydown'
// 'focus'
// 'blur'
function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent); //new value put in the input box
signupForm.name.addEventListener("keydown", logEvent); //curent value
signupForm.name.addEventListener("focus", logEvent); //when you focus into an input box
signupForm.name.addEventListener("blur", logEvent); // when you focus out of an input box
