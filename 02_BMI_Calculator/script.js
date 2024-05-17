


function calculateBMI(height, weight) {

    const BMI = ((weight * 10000) / Math.pow(height, 2)).toFixed(2);


    if (BMI < 18.5) {
        return (`Your BMI is ${BMI} . You are underweight.`);

    } else if (BMI >= 18.5 && BMI <= 24.9) {
        return (`Your BMI is ${BMI} . You are normal weight.`);
    }
    else {
        return (`Your BMI is ${BMI} . You are overweight.`);
    }

}


const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();


    const result = document.querySelector('#result');
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (height === '' || height < 0 || isNaN(height)) {
        return result.textContent = 'Please enter a valid height';
    }
    else if (height < 0) {
        return result.textContent = 'Please enter a valid height';
    }


    const temp = calculateBMI(height, weight);

    result.textContent = temp;
});