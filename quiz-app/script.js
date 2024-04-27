const questions = [
    {
        question: "Which city is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "New Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false },
        ]
    },
    {
        question: "What is the national animal of India?",
        answers: [
            { text: "Tiger", correct: true },
            { text: "Lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Leopard", correct: false },
        ]
    },
    {
        question: "Which river is considered the holiest river in India?",
        answers: [
            { text: "Ganges", correct: true },
            { text: "Yamuna", correct: false },
            { text: "Brahmaputra", correct: false },
            { text: "Godavari", correct: false },
        ]
    },
    {
        question: "What is the currency of India?",
        answers: [
            { text: "Rupee", correct: true },
            { text: "Rupiah", correct: false },
            { text: "Dollar", correct: false },
            { text: "Pound", correct: false },
        ]
    },
    {
        question: "Who was the first Prime Minister of India?",
        answers: [
            { text: "Indira Gandhi", correct: false },
            { text: "Jawaharlal Nehru", correct: true },
            { text: "Narendra Modi", correct: false },
            { text: "Rajiv Gandhi", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQ = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQ.question;

    currentQ.answers.forEach(answer => {
        const butn = document.createElement("button");
        butn.innerHTML = answer.text;
        butn.classList.add("btn");
        answersButtons.appendChild(butn);

        if (answer.correct)
            butn.dataset.correct = answer.correct;

        butn.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild);
    };
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct")
        score++;
    }
    else
        selectedButton.classList.add("incorrect")

    Array.from(answersButtons.children).forEach(button => {
        if (button.dataset.correct === "true")
            button.classList.add("correct");
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length)
        showQuestion();
    else
        showScore();
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length)
        handleNextButton();
    else
        startQuiz();
});

startQuiz();    