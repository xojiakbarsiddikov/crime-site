let login_a = document.querySelector('.login-a')
let login_r = document.querySelector('.login-r')
let sign_up = document.querySelector('.sign-up')
let sign_down = document.querySelector('.sign-down')
let button_login = document.querySelector('.button-login')
let input_1 = document.getElementById('input')
let input_2 = document.getElementById('input-2')
// let input_3 = document.getElementById('input-4')
let input = document.querySelector('.input__login-1')
let error_p = document.querySelector('.error-p')
let login_h1 = document.querySelector('.login-h12')


sign_down.classList.toggle('dn')
sign_up.classList.toggle('db')
login_r.classList.toggle('border-bottom')
error_p.classList.toggle('dn')
login_h1.classList.toggle('login-h1')

login_a.addEventListener('click', (e) => {
    sign_up.classList.toggle('dn')
    sign_up.classList.remove('db')
    sign_down.classList.toggle('db')
    login_a.classList.toggle('border-bottom')
    login_r.classList.remove('border-bottom')
    login_h1.classList.toggle('dn')
    login_h1.classList.remove('db')
})

login_r.addEventListener('click', (e) => {
    sign_down.classList.remove('db')
    sign_up.classList.toggle('db')
    sign_up.classList.remove('dn')
    sign_down.classList.toggle('dn')
    login_a.classList.remove('border-bottom')
    login_r.classList.toggle('border-bottom')
    login_h1.classList.remove('dn')
    login_h1.classList.toggle('db')
})

button_login.addEventListener('click', () => {
    input.classList.toggle('border__3')
    error_p.classList.remove('dn')
    error_p.classList.toggle('db')
})

input.addEventListener('click', () => {
    input.classList.remove('border__3')
    error_p.classList.remove('db')
    error_p.style.color = 'transparent'
})


let btn = document.querySelector('.eye1')
let btn2 = document.querySelector('.i')
let btn_2 = document.querySelector('.eye2')
let btn2_2 = document.querySelector('.i-2')

// let x1 = document.querySelector('.x-1')
// let x2 = document.querySelector('.x-2')
btn.classList.add('dn')
btn2.classList.add('db')
btn_2.classList.add('dn')
btn2_2.classList.add('db')
// x1.classList.add('dn')
// x2.classList.add('db')
input_1.type === "password"
input_2.type === "password"
// input_3.type === "password"


btn2.addEventListener('click', () => {
    btn.classList.toggle('db')
    btn.classList.remove('dn')
    btn2.classList.remove('db')
    btn2.classList.toggle('dn')
    input_1.type = "text"
})


btn.addEventListener('click', () => {
    input_1.type = "text"
    btn.classList.toggle('dn')
    btn.classList.remove('db')
    btn2.classList.remove('dn')
    btn2.classList.toggle('db')
    input_1.type = "password"
})

btn2_2.addEventListener('click', () => {
    btn_2.classList.toggle('db')
    btn_2.classList.remove('dn')
    btn2_2.classList.remove('db')
    btn2_2.classList.toggle('dn')
    input_2.type = "text"
})


btn_2.addEventListener('click', () => {
    input_2.type = "text"
    btn_2.classList.toggle('dn')
    btn_2.classList.remove('db')
    btn2_2.classList.remove('dn')
    btn2_2.classList.toggle('db')
    input_2.type = "password"
})


let container__wrapper = document.querySelector('.container__wrapper')

container__wrapper.classList.toggle('dn')


function preloader() {
    $(() => {
        setInterval(() => {
            let p = $('.preloader');

            p.css('opacity', 0)

            setInterval(
                () => p.remove(), container__wrapper.classList.remove('dn'),container__wrapper.classList.toggle('db'),
                parseInt(p.css('--duration')) * 1000

            );

        }, 1000);
    });
}

setInterval(() => preloader(), 100);