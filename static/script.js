function speakKannada(word) {

    if (!("speechSynthesis" in window)) {
        alert("Speech is not supported in this browser.");
        return;
    }

    const speech = new SpeechSynthesisUtterance(word);

    speech.lang = "kn-IN";
    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}

function checkQuiz() {
    const answers = {
        q1: "hello",
        q2: "thankyou",
        q3: "yes",
        q4: "water",
        q5: "no"
    };

    let score = 0;

    for (let question in answers) {
        const selected = document.querySelector(
            `input[name="${question}"]:checked`
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    localStorage.setItem("kannadaQuizScore", score);

    const result = document.getElementById("quiz-result");
    result.style.display = "block";
    result.textContent = `Your Score: ${score} out of 5`;
}

function resetQuiz() {
    document.getElementById("quiz-form").reset();

    const result = document.getElementById("quiz-result");
    result.style.display = "none";
    result.textContent = "";
}
// DISPLAY QUIZ SCORE ON PROGRESS PAGE

document.addEventListener("DOMContentLoaded", function () {

    const scoreElement = document.getElementById("quiz-score");
    const messageElement = document.getElementById("quiz-message");

    if (scoreElement) {
        const savedScore = localStorage.getItem("kannadaQuizScore");

        if (savedScore !== null) {
            scoreElement.textContent = savedScore + " / 5";

            messageElement.textContent =
                "Great! You have completed your Kannada quiz.";
        }
    }

});