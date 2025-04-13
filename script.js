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
      answers.push(selected.dataset.career); // Use data-career attribute
    }

    let counts = {};
    answers.forEach(value => {
      counts[value] = (counts[value] || 0) + 1;
    });

    let topCategory = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

    let result = "";
    switch (topCategory) {
      case "tech":
        result = "💻 You may enjoy careers in Technology, Engineering, or IT!";
        break;
      case "health":
        result = "🏥 You might thrive in Healthcare, Psychology, or Life Sciences!";
        break;
      case "arts":
        result = "🎨 Creative fields like Arts, Media, or Communication could be your path!";
        break;
      case "business":
        result = "📊 Business, Marketing, or Entrepreneurship might be perfect for you!";
        break;
      default:
        result = "🔍 Hmm, try answering again! We couldn't determine a clear match.";
    }

    document.getElementById("result").textContent = result;
  });
});
