var quizStage = 0
let correctAnswer

const questions = [
    {
        question: "How many lives in Oslo?",
        alternatives: [
            "680000",
            "620000",
            "550000",
            "870000",
        ],
        correctAnswer: 0
    },
    {
        question: "How do you do?",
        alternatives: [
            "Ok",
            "Fine",
            "Good",
            "Well",
        ],
        correctAnswer: 0
    },
    {
        question: "Hit or miss?",
        alternatives: [
            "I guess",
            "They never",
            "Miss, huh",
            "Mwaah",
        ],
        correctAnswer: 3
    }
]


function startQuiz() {
    this.quizStage = 0;
    populateQuiz()
}


function populateQuiz() {

    let quiz = questions[quizStage]
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



