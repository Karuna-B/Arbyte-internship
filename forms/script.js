const form = document.querySelector(".signup-form");
//const username=document.querySelector('#username');

const feedback = document.querySelector(".feedback");

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(username.value);
  //console.log(form.username.value);

  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "that username is valid!";
  } else {
    feedback.textContent = "only letters of length 6-12 allowed.";
  }
});

// const pattern = /^[a-z]{6,}$/;
// const username = 'random';

// let result = pattern.test(username);
// console.log(result);

form.username.addEventListener("keyup", (e) => {
  //console.log(e.target.value,form.username.value);

  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
    //console.log('valid');
  } else {
    form.username.setAttribute("class", "fail");
    //console.log('invalid');
  }
});
