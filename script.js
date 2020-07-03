let questions = [
    {
        question: "this is question 1",
        choices: [
            "a", "b", "c", "d"
        ],
        answer: "b"
    },
    {
        question: "this is question 2",
        choices: [
            "a", "b", "c", "d"
        ],
        answer: "b"
    }
]

let currentQuestion=0;
let score=0;
let secondsLeft=60;

var timer = document.getElementById("timer");
console.log(timer)
 secondsLeft = 10;
function setTime() {
 var timerInterval = setInterval(function() {
   secondsLeft--;
   timer.textContent = secondsLeft + " seconds left till colorsplosion.";
   if(secondsLeft === 0) {
     clearInterval(timerInterval);
    
   }
 }, 1000);
}
function renderQuestion(){
    let questionList = questions[currentQuestion].choices.map((quest) => {
        return `<button class="answerButton" onclick="answerQuestions('${quest}')">${quest}</button>`;
    });
    quiz.innerHTML=`${questions[currentQuestion].question}<br>${questionList.join("")}`;
}

function answerQuestions(selection){
    if(questions[currentQuestion].answer === selection) {
        score++;
        secondsLeft += 5;
    }
    else{
        secondsLeft -= 5;
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
        return endGame();
    }
    //renderQuestion();
    setTime();
}