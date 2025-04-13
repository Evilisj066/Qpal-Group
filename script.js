
console.log("Career Compass script loaded!");

document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("careerQuiz");

  if (!quizForm) {
    console.error("Form with ID 'careerQuiz' not found!");
    return;
  }

  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let answers = [];
    for (let i = 1; i <= 25; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        document.getElementById("result").textContent = "❗ Please answer all 25 questions.";
        return;
      }
      answers.push(selected.value);
    }

    let counts = {};
    answers.forEach(value => {
      counts[value] = (counts[value] || 0) + 1;
    });

    let topCategory = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

    let result = "";
    switch (topCategory) {
      case "tech":
        result = "💻 You may enjoy careers in Technology, Engineering, or Data Science!";
        break;
      case "creative":
        result = "🎨 Creative fields like Design, Arts, or Media might be your vibe!";
        break;
      case "health":
        result = "🏥 A career in Healthcare or Psychology may suit you!";
        break;
      default:
        result = "📚 Consider exploring careers in Business, Education, or Social Sciences.";
    }

    document.getElementById("result").textContent = result;
  });
});
