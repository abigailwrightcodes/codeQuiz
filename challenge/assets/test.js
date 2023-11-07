let questions = [
    {
        question: "what day is it on Monday?",
        answers: ["Monday", "Tuesday", "Wednesday", "Thursday"]
    },
{
        question: "what day is it on Tuesday?",
        answers: ["Monday", "Tuesday", "Wednesday", "Thursday"]

},
{
    question: "what day is it on Wednesday?",
    answers: ["Monday", "Tuesday", "Wednesday", "Thursday"]
},
{
    question: "what day is it on Thursday?",
    answers: ["Monday", "Tuesday", "Wednesday", "Thursday"]
}
]

let score = 0;

for (var i=0; i < questions.length; i++) {
    let questionBox = document.getElementById("question-title").innerHTML+=(questions[i].question)
}


var question = document.getElementById("question-title")

for (var i=0; i <questions.length; i++) {

}
question.innerText(questions[i].question)