import localStorageService from "./localStorage";
const _ = require('lodash');
const formEl = document.querySelector(".feedback-form");
let userData = {};

const fillContactFormFields = () => {
  const userDataFromLs = localStorageService.load('feedback-form-state');
  if (userDataFromLs === undefined) {
    return;
  }
  console.log(formEl.elements);
  for (const key of Object.keys(userDataFromLs)) {
    if (userDataFromLs.hasOwnProperty(key)) {
      formEl.elements[key].value = userDataFromLs[key];
    }
  }
  userData = userDataFromLs;
};
fillContactFormFields();

const onformElElSubmit = event => {
  event.preventDefault();
  event.target.reset();
  localStorageService.remove("feedback-form-state",)
  console.log(userData);
  userData = {};
}
formEl.addEventListener(
  'input',
  _.throttle(event => {
    const { target: contactFormElement } = event;
    const name = contactFormElement.name;
    const value = contactFormElement.value;
    userData[name] = value;
    localStorageService.save('feedback-form-state', userData);
  }, 500)
);
formEl.addEventListener('submit', onformElElSubmit);








