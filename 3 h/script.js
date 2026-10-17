// Fase 4: cuestionario interactivo sobre el Beato David Carlos de Vergara Marañón.
const quizForm = document.querySelector("#quiz-form");
const quizResult = document.querySelector("#quiz-result");
const correctAnswers = { q1: "b", q2: "a", q3: "c", q4: "a", q5: "b" };
const totalQuestions = Object.keys(correctAnswers).length;

quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const answers = new FormData(quizForm);
    let score = 0;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        if (answers.get(question) === correctAnswer) score++;
    }

    const percentage = Math.round((score / totalQuestions) * 100);
    let message;
    if (score === totalQuestions) {
        message = `¡Excelente! Respondiste correctamente ${score} de ${totalQuestions} preguntas (${percentage}%).`;
    } else if (score >= 3) {
        message = `¡Muy bien! Respondiste correctamente ${score} de ${totalQuestions} preguntas (${percentage}%). Podés repasar el contenido y volver a intentarlo.`;
    } else {
        message = `Obtuviste ${score} de ${totalQuestions} respuestas correctas (${percentage}%). Te recomendamos releer la biografía y probar otra vez.`;
    }

    quizResult.textContent = message;
    quizResult.className = `quiz-result ${score >= 3 ? "success" : "partial"}`;
});

quizForm.addEventListener("reset", () => {
    quizResult.textContent = "";
    quizResult.className = "quiz-result";
});
