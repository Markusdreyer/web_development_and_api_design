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

export default function getRandomQuestion(numberOfQuestions) {
    let selectedQuestions = []
    for (var i = 0; i <= numberOfQuestions; i++) {
        selectedQuestions += questions[i]
    }
    return Array.from(selectedQuestions).map(e => questions[i]);
}
