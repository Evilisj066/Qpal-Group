document.getElementById("careerQuiz").addEventListener("submit", function (e) {
  e.preventDefault(); // 🚫 Stop the form from submitting

  const answers = document.querySelectorAll("input[type=radio]:checked");
  const score = {
    tech: 0,
    health: 0,
    arts: 0,
    business: 0
  };

  // Count selected answers by category
  answers.forEach(answer => {
    const career = answer.getAttribute("data-career");
    if (career && score[career] !== undefined) {
      score[career]++;
    }
  });

  // Determine the highest scoring career path
  let topCareer = null;
  let maxScore = -1;
  for (const [career, value] of Object.entries(score)) {
    if (value > maxScore) {
      maxScore = value;
      topCareer = career;
    }
  }

  // Show the result
  const resultSection = document.getElementById("results");
  const suggestion = document.getElementById("careerSuggestion");

  if (topCareer) {
    suggestion.textContent = {
      tech: "Technology - You could explore careers in programming, IT, or engineering.",
      health: "Health - Consider nursing, medicine, therapy, or public health.",
      arts: "Arts - Maybe pursue graphic design, music, writing, or performing arts.",
      business: "Business - You might shine in entrepreneurship, marketing, or finance."
    }[topCareer];
  } else {
    suggestion.textContent = "Please answer all questions to get a result.";
  }

  resultSection.style.display = "block";
  resultSection.scrollIntoView({ behavior: "smooth" }); // Optional: scroll to result
});
