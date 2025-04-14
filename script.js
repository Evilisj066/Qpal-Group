let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const quizForm = document.getElementById("careerQuiz");

function showQuestion(index) {
  questions.forEach((q, i) => {
    q.style.display = i === index ? "block" : "none";
    q.style.opacity = i === index ? 1 : 0;
  });

  prevButton.style.display = index > 0 ? "inline-block" : "none";
  nextButton.style.display = index < questions.length - 1 ? "inline-block" : "none";
  if (index === questions.length - 1) quizForm.querySelector("button[type=submit]").style.display = "inline-block";
  else quizForm.querySelector("button[type=submit]").style.display = "none";
}

nextButton.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    questions[currentQuestion].classList.add("fade-out");
    setTimeout(() => {
      currentQuestion++;
      showQuestion(currentQuestion);
    }, 300);
  }
});

prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  showQuestion(currentQuestion);
});

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = document.querySelectorAll("input[type=radio]:checked");
  const resultSection = document.getElementById("results");
  const suggestion = document.getElementById("careerSuggestion");

  if (answers.length < 25) {
    suggestion.textContent = "Please answer all 25 questions to get your result.";
    resultSection.style.display = "block";
    return;
  }

  const score = {
    tech: 0,
    health: 0,
    arts: 0,
    business: 0
  };

  answers.forEach(answer => {
    const career = answer.getAttribute("data-career");
    if (career && score[career] !== undefined) {
      score[career]++;
    }
  });

  let topCareer = null;
  let maxScore = -1;
  for (const [career, value] of Object.entries(score)) {
    if (value > maxScore) {
      maxScore = value;
      topCareer = career;
    }
  }

  if (topCareer) {
    const messages = {
      tech: "Technology - You could explore careers in programming, IT, or engineering.",
      health: "Health - Consider nursing, medicine, therapy, or public health.",
      arts: "Arts - Maybe pursue graphic design, music, writing, or performing arts.",
      business: "Business - You might shine in entrepreneurship, marketing, or finance."
    };
    suggestion.textContent = messages[topCareer];
    showCareerRoadmap(topCareer);
  } else {
    suggestion.textContent = "Please answer all questions to get a result.";
  }

  resultSection.style.display = "block";
  resultSection.scrollIntoView({ behavior: "smooth" });
});

async function showCareerRoadmap(careerKey) {
  try {
    const response = await fetch("career_roadmaps.json");
    const data = await response.json();
    const roadmap = data[careerKey];

    const container = document.getElementById("roadmap");
    if (!roadmap || !container) return;

    container.innerHTML = `
      <h3>📍 Career Roadmap: ${roadmap.title}</h3>
      <p><strong>SHS Track:</strong> ${roadmap.shs_track}</p>
      <p><strong>College Courses:</strong> ${roadmap.college_courses.join(", ")}</p>
      <p><strong>Skills & Certifications:</strong> ${roadmap.skills_certifications.join(", ")}</p>
      <p><strong>Entry-level Jobs:</strong> ${roadmap.entry_level_jobs.join(", ")}</p>
      <p><strong>Advanced Jobs:</strong> ${roadmap.advanced_jobs.join(", ")}</p>
    `;
  } catch (err) {
    console.error("Failed to load career roadmap:", err);
    const container = document.getElementById("roadmap");
    if (container) {
      container.innerHTML = "<p>⚠️ Unable to load roadmap. Please try again later.</p>";
    }
  }
}
