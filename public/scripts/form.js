const myForm = document.querySelector("#myForm");
console.log(myForm);
myForm.addEventListner("submit", (e) => {
  e.preventDefault();
  console.log("submit form", e.target.user, e.target.comment);
});
