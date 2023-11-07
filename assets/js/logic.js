// * A start button that when clicked a timer starts and the first question appears.
 
//   * Questions contain buttons for each answer.
//   * 
//   * When answer is clicked, the next question appears
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score
  



const questionNumber = document.getElementById("question-title");
const questionText = document.getElementById("question")
const choices = Array.from(document.getElementsByClassName("choice-text"));
 

let currentQuestions ={};

let score =0;
let questionCount =0;
let avaliableQuestions=[];


let questions = [
{
  question: "What day is it on Monday?" ,
  choice1: "Monday" ,
  choice2: "Tuesday" ,
  choice3: "Wednesday" ,
  choice4: "Friday" ,
  answer: 1



},
{
  question: "What day is it on Tuesday" ,
  choice1: "Monday",
  choice2: "Thursday",
  choice3: "Tuesday",
  choice4: "Wednesday",
  answer: 3



},
{
  question:"What day is it on Friday" ,
  choice1: "Saturday",
  choice2: "Tuesday",
  choice3: "Wednesday",
  choice4: "Friday" ,
  answer: 4



},{
  question: "what day is it on Sunday?" ,
  choice1: "Sunday" ,
  choice2: "Sunday" ,
  choice3: "Sunday" ,
  choice4:  "Sunday",
  answer: 3 



},





]

const incorectPenalty = 10;
const maxQuestions = 4;



// start timer
let min = 0;
let sec = 0;


function myTimer() {
  time.innerHTML = min + " minutes " + sec + " seconds";
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
  }
}


//Start the timer
document.getElementById("start").addEventListener('click', () => {
  setInterval(myTimer, 1000);
}, { once: true });



// start Quiz
const element =  document.getElementById("start")
element.addEventListener("click", startGame);
function startGame() {
  questionCount= 0;
  score=0;
  avaliableQuestions=[...questions]
  document.getElementById("start-screen").style.display="none"
  document.getElementById("questions").style.display="block"
getNewQuestion()
 
}


function getNewQuestion (){
  questionCount++;
 const questionsIndex = Math.floor(Math.random() * avaliableQuestions.length);
 currentQuestions = avaliableQuestions[questionsIndex];
 questionText.innerText = currentQuestions.question;



 choices.forEach (choice => {
const number = choice.dataset['number'];
choice.innerText = currentQuestions['choice' + number];

avaliableQuestions.splice(questionsIndex, 1);





 })
}

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    console.log(e.target)
  })
})

// const number = choices.button.dataset['number'];
// console.log(number)