const population = document.querySelector('#data-population');
const timeToElapse = document.querySelector('#data-time-to-elapse');
const reportedCases = document.querySelector('#data-reported-cases');
const totalHospitalBeds = document.querySelector('#data-total-hospital-beds');
const periodType = document.querySelector('#data-period-type');
const msg = document.querySelector('#msg');
const myForm = document.querySelector('#my-form');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (population.value === '' || timeToElapse.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Fill in the Required enquires....';

    setTimeout(() => msg.remove(), 1500);
  } else {
    const li = document.createElement('li');
    li.appendChild(
      document.createTextNode(
        `A population of ${population.value} people in ${timeToElapse.value} ${periodType.value} reported ${reportedCases.value} cases with only ${totalHospitalBeds.value} hospital beds left. `
      )
    );

    userList.appendChild(li);
  }

  // clear field
  population.value = '';
  timeToElapse.value = '';
}
