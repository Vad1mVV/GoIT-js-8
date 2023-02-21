import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}
const LOCAL_NAME = 'feedback-form-state';
const data = {};
const parcedLocalData = JSON.parse(localStorage.getItem(LOCAL_NAME));

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    data[e.target.name] = e.target.value;
    localStorage.setItem(LOCAL_NAME, JSON.stringify(data));
}
function onFormSubmit(e) {
    e.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCAL_NAME)));
    refs.form.reset();
}

if (parcedLocalData) {
    refs.input.value = parcedLocalData.email;
    refs.textarea.value = parcedLocalData.message;
    localStorage.clear();
}