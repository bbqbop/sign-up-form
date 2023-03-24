const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#cpwd");
const pwdLabel = document.querySelector('#pwd-label')

const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');
const submit = document.querySelector('button');

// input validation:
for(i=0; i < inputs.length; i++){
    let input = inputs[i];
    let idx = i;
    input.addEventListener('keydown', (e)=>{
        // confirm passwords:
        if(idx === 5){
            if(input.value != inputs[4].value){
                input.setCustomValidity("Invalid field.");
                createCorrect(input, idx);
            } else {
                input.setCustomValidity("");
                eraseCorrect(idx);
            }
        }
        // validate other inputs:
        let isValid = input.checkValidity();
        if(!isValid){
            createCorrect(input, idx);
        } else {
            eraseCorrect(idx);
        }
    })
}
function createCorrect(input, idx){
    if(labels[idx].childElementCount === 1){
        let before = document.createElement('p');
        before.textContent = input.dataset.correct;
        labels[idx].append(before);
        before.classList.add("correct");
    }
}
function eraseCorrect(idx){
    if(labels[idx].childElementCount != 1){
        labels[idx].lastChild.remove();
    }
}