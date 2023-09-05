import localStorageService from "./localStorage";
const _ = require('lodash');
const formEl = document.querySelector(".feedback-form");
const userData = {};

const fillContactFormFields = () => {
  const userDataFromLs = localStorageService.load('feedback-form-state');
  // const userDataFromLs = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(userDataFromLs);

  if (userDataFromLs === undefined) {
    return;
  }
  console.log(userDataFromLs);
  console.log(formEl.elements);

  for (const key in userDataFromLs) {
    if (userDataFromLs.hasOwnProperty(key)) {
      formEl.elements[key].value = userDataFromLs[key];
    }
  }

};
fillContactFormFields();

const onFormElFieldChange = event => {
  const { target: FormElFieldChange } = event;

  const value = FormElFieldChange.value;
  const name = FormElFieldChange.name;
  userData[name] = value;

  localStorageService.save("feedback-form-state", userData);
  // localStorage.setItem("feedback-form-state", JSON.stringify(userData));
}

const onformElElSubmit = event => {
  event.preventDefault();
  event.target.reset();

  localStorageService.remove("feedback-form-state",)
  // localStorage.removeItem("feedback-form-state");

}



formEl.addEventListener('change', onFormElFieldChange);
formEl.addEventListener('submit', onformElElSubmit);

formEl.addEventListener('input', _.throttle(event => {
  const { target: formEl } = event;
  const value = formEl.value;
  const name = formEl.name;
  userData[name] = value;
  localStorageService.save('feedback-form-state', userData);
}, 500)
);
