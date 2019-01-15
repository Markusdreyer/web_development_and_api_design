let quizzes = {
    question1: {
        question: "How many lives in Oslo",
        alternative1: "630000",
        alternative2: "420000",
        alternative3: "850000",
        alternative4: "270000",
        correctAnswer: this.alternative3,
    },
    question2: {
        question: "How do you do?",
        alternative1: "20000",
        alternative2: "40000",
        alternative3: "50000",
        alternative4: "60000",
        correctAnswer: this.alternative3,
    },
    question3: {
        question: "How many Oslo lives?",
        alternative1: "20000",
        alternative2: "40000",
        alternative3: "50000",
        alternative4: "60000",
        correctAnswer: this.alternative3,
    },
    question4: {
        question: "Oslo is many?",
        alternative1: "20000",
        alternative2: "40000",
        alternative3: "50000",
        alternative4: "60000",
        correctAnswer: this.alternative3,
    }

}

/*
    FIX: Runs twice. Cancel after first run
*/

function startQuiz() {
    var i = 1;
    for (var key in quizzes) {
        if (!quizzes.hasOwnProperty(key)) continue;
        var obj = quizzes[key];
        for (var prop in obj) {
            if (!obj.hasOwnProperty(prop)) continue;
            if (prop == "question") {
                document.getElementsByClassName("question-container")[0].innerHTML = obj[prop]
                console.log("SHIT: " + obj[prop])
            } else if (prop.includes("alternative")) {
                let containerName = "alternative " + i
                document.getElementsByClassName(containerName)[0].innerHTML = obj[prop]
                console.log(prop + " = " + obj[prop]);
                i++
            }
            console.log(i)
        }
    }
}


console.log(quizzes.question1.question)