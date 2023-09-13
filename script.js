const randomNumber = parseInt(Math.random()*20);
let twenty=20;
const inputNumber = document.querySelector('.inputnumber');
const btnChecked = document.querySelector('.check');
const strGuess = document.querySelector('.strgues');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const randNum = document.querySelector('.randomNum');
const again =document.querySelector('.again');

btnChecked.addEventListener('click', () => {
    score.innerText=`${twenty-=1}`;
    if(score.value == 0 || score.value<0){
        document.body.style.backgroundColor='red';
        strGuess.innerText=`You lose`;   
    }
    else{
        startGuess();
    }
    
})

function startGuess(){
    if(inputNumber.value > randomNumber){
        strGuess.innerText=`Too high`;
    }
    else if(inputNumber.value < randomNumber){
        strGuess.innerText=`Too low`;
    }
    else if(inputNumber.value == randomNumber){
        strGuess.innerText=`You win`;
        randNum.innerText=randomNumber;
        document.body.style.backgroundColor='green';
    }
}
again.addEventListener('click', () => {
    strGuess.innerText=`Start guessing...`;
    highscore.innerText+=score.value;
    score.innerText=`20`;
    inputNumber.value='';
    document.body.style.backgroundColor='white'
})