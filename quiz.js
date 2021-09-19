const quizForm = document.querySelector(".quiz-form");
const buttonSubmit = document.querySelector("#btn-submit");
const outputDivQuiz = document.querySelector("#output-div-quiz");

const correctAnswers = ["90°", "right angled","true","5 : 3","36"];

function calculateScore() {
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[i]) {
            score += 1;
        }
        i += 1;
    }
    outputDivQuiz.innerText = "Your Score = " + score;
}

buttonSubmit.addEventListener("click", calculateScore);