const form = document.querySelector('.section5__form');
const password = form.querySelector('.password');
const reTypePassword = form.querySelector('.reTypePassword');


reTypePassword.addEventListener('keyup', function () {
    if (password.value !==  reTypePassword.value){
        reTypePassword.style.border = '1.5px solid red';
    } else {
        reTypePassword.style.border = '1.5px solid #10803f';        
        password.style.border = '1.5px solid #10803f';     
    }
})



