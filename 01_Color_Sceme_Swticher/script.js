const buttons = document.querySelectorAll('.color_scheme_switcher button');
const body = document.querySelector('.main_section');

console.log(body)

buttons.forEach(function (button) {
    button.addEventListener('click', function (item) {
        body.style.backgroundColor = item.target.id;
    });
})

