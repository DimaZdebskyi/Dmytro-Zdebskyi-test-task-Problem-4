const states = ['Choose..', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
const mainForm = document.getElementById('main-form');
const cancelBtn = document.getElementsByClassName('cancel-btn')[0];
const submitBtn = document.getElementsByClassName('submit-btn')[0];
const selectStates = document.getElementsByClassName('states')[0];
const inputs = document.getElementsByTagName('input');

let valid = true;

cancelBtn.onclick = () => clear();
submitBtn.onclick = () => { inputFields(); finish(); };

function clear() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  selectStates.value = 'Choose..';
}

function inputFields() {
  const name = mainForm.name;
  const ads1 = mainForm.ads1;
  const ads2 = mainForm.ads2;
  const city = mainForm.city;
  const zip = mainForm.zip;
  const state = mainForm.state;

  const inputFieldsArray = [name, ads1, ads2, city, zip, state];

  verifyInputs(inputFieldsArray);
}

function verifyInputs(formInputs) {
  formInputs.forEach((el) => {
    switch(el.name) {
      case 'name':
        isEmpty(el);
        break;
      case 'ads1':
        isEmpty(el);
        break; 
      case 'city':
        isEmpty(el);
        break;
      case 'state':
        isNone(el);
        break;
      case 'zip':
        ifLengthFive(el);
        break;
      default:
        break;
    }
  });
}

function error(input) {
  alert(`Enter valid ${input.name}`);
  valid = false;
}

function isEmpty(input) {
  if (!input.value.length) {
    error(input);
  }
}

function ifLengthFive(input) {
  if (input.value.length !== 5) {
    error(input);
  }
}

function isNone(input) {
  if (input.value === 'Choose..') {
    error(input);
  }
}

function finish() {
  if (valid) {
    alert('Regestration finish');
    clear();
  }
  valid = true;
}

function isNumber({keyCode}) {
  return keyCode > 48 && keyCode < 57;
}

function isAlpha({keyCode}) {
  return (keyCode > 64 && keyCode < 122) || keyCode == 39;
}

function isAlphanumeric({keyCode}) {
  return (keyCode > 64 && keyCode < 122) || keyCode == 39 || (keyCode > 48 && keyCode < 57);
}

function addStateName() {
  states.forEach((elName) => {
    selectStates.innerHTML += `<option value="${elName}">${elName}</option>`;
  });
}

addStateName();
