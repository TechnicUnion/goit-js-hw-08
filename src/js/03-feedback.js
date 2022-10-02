import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

checksLocalStorage();

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmit);

function onFormInput(evt) {
  const feedback = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (email.value && message.value) {
    evt.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
  }
}

function checksLocalStorage() {
  const saveFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveFeedback) {
    email.value = saveFeedback.email;
    message.value = saveFeedback.message;
  }
}
