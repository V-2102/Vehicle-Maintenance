const form = document.querySelector('form');
const makeInput = document.getElementById('vehicle-make');
const modelInput = document.getElementById('vehicle-model');
const yearInput = document.getElementById('vehicle-year');
const mileageInput = document.getElementById('vehicle-mileage');
const oilChangeDateInput = document.getElementById('oil-change-date');
const oilChangeMileageInput = document.getElementById('oil-change-mileage');
const airFilterDateInput = document.getElementById('air-filter-date');
const airFilterMileageInput = document.getElementById('air-filter-mileage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (makeInput.value === '') {
        showError(makeInput, 'Make is required');
    } else {
        showSuccess(makeInput);
    }

    if (modelInput.value === '') {
        showError(modelInput, 'Model is required');
    } else {
        showSuccess(modelInput);
    }

    if (yearInput.value === '') {
        showError(yearInput, 'Year is required');
    } else if (!isValidYear(yearInput.value)) {
        showError(yearInput, 'Invalid year');
    } else {
        showSuccess(yearInput);
    }

    if (mileageInput.value === '') {
        showError(mileageInput, 'Mileage is required');
    } else if (!isValidMileage(mileageInput.value)) {
        showError(mileageInput, 'Invalid mileage');
    } else {
        showSuccess(mileageInput);
    }

    if (oilChangeDateInput.value === '') {
        showError(oilChangeDateInput, 'Oil change date is required');
    } else {
        showSuccess(oilChangeDateInput);
    }

    if (oilChangeMileageInput.value === '') {
        showError(oilChangeMileageInput, 'Oil change mileage is required');
    } else if (!isValidMileage(oilChangeMileageInput.value)) {
        showError(oilChangeMileageInput, 'Invalid mileage');
    } else {
        showSuccess(oilChangeMileageInput);
    }

    if (airFilterDateInput.value === '') {
        showError(airFilterDateInput, 'Air filter change date is required');
    } else {
        showSuccess(airFilterDateInput);
    }

    if (airFilterMileageInput.value === '') {
        showError(airFilterMileageInput, 'Air filter change mileage is required');
    } else if (!isValidMileage(airFilterMileageInput.value)) {
        showError(airFilterMileageInput, 'Invalid mileage');
    } else {
        showSuccess(airFilterMileageInput);
    }
});

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const errorMessage = formControl.querySelector('small');
    errorMessage.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    return year >= 1900 && year <= currentYear;
}

function isValidMileage(mileage) {
    return !isNaN(mileage) && parseInt(mileage) > 0;
}
