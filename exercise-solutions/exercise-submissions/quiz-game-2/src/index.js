import getRandomQuestion from './questions'
let quiz = []

var quizStage = 0
let correctAnswer = 0

export function startQuiz() {
    quiz = getRandomQuestion(1)[0]
}


function displayQuiz() {

    let question = quiz[quizStage]
    let alternatives = quiz.alternatives

    document.getElementsByClassName("question-container")[0].innerHTML = quiz.question
    for (var i = 0; i < alternatives.length; i++) {
        let containerName = "alternative " + i
        document.getElementsByClassName(containerName)[0].innerHTML = alternatives[i]
        console.log(alternatives[i])
    }
    this.correctAnswer = quiz.correctAnswer
    this.quizStage++
}

function checkAnswer(answer) {
    if (answer === this.correctAnswer) {
        alert("Correct!")
        if (this.quizStage < questions.length) {
            populateQuiz()
        } else {
            alert("No more questions")
        }

    } else {
        alert("Wrong! Try again")
    }
}



