const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#cpwd");
const pwdLabel = document.querySelector('#pwd-label')

const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const submit = document.querySelector('button');

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(inputs[4].value !== inputs[5].value){
        console.log('sss');
        let before = document.createElement('p');
        before.classList.add("correct");
        before.textContent = inputs[5].dataset.correct;
        labels[5].append(before);
        console.log(before);
    }
    }
    )