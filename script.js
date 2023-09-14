undefinedNumber=20;
const counter=document.querySelector(".check")
counter.addEventListener("click",()=>{
    undefinedNumber-=1;
    console.log(undefinedNumber);
})


let randomNumber = parseInt(Math.random()*20);
let twenty=20;
const inputNumber = document.querySelector('.inputnumber');
const btnChecked = document.querySelector('.check');
const strGuess = document.querySelector('.strgues');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const randNum = document.querySelector('.randomNum');
const again =document.querySelector('.again');

score.innerText=`💯 Score: 20`;

btnChecked.addEventListener('click', () => {
    if(twenty <=0){
        document.body.style.backgroundColor='red';
        strGuess.innerText=`💥You lose`; 
        inputNumber.style.display="none";  
    }
    else if(inputNumber.value.length==0){strGuess.innerText="🚫No Value"}
    else{
    score.innerText=`💯 Score: ${twenty-=1}`;

        startGuess();
    }
    console.log(randomNumber);
    
})

function startGuess(){
    if(inputNumber.value > randomNumber){
        strGuess.innerText=`Too high`;
    }
    else if(inputNumber.value < randomNumber){
        strGuess.innerText=`Too low`;
    }
    else if(inputNumber.value == randomNumber){
        strGuess.innerText=`🏆You win`;
        randNum.innerText=randomNumber;
        document.body.style.backgroundColor='green';
        inputNumber.style.display="none"
    }
}

again.addEventListener('click', () => {
    twenty=20;
    inputNumber.style.display="inherit";
    strGuess.innerText=`Start guessing...`;
    highscore.innerText=`🥇 Highscore: ${undefinedNumber}`;
    randNum.innerText='?';
    score.innerText=`💯Score: ${twenty}`;
    inputNumber.value='';
    document.body.style.backgroundColor='black'
    randNum=randomNumber;
})
again.addEventListener('click',()=>{
    randomNumber=parseInt(Math.random()*20);
})
undefinedNumber=20;
