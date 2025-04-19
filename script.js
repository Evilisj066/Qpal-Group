let currentQuestion = 0;
const scores = { tech: 0, health: 0, arts: 0, business: 0 };
const userAnswers = [];

const quizData = [
  {
    question: "What kind of weekend project excites you most?",
    options: [
      { text: "Writing a short story or composing music", career: "arts" },
      { text: "Researching market trends for a new idea", career: "business" },
      { text: "Creating a website for fun", career: "tech" },
      { text: "Volunteering at a health awareness event", career: "health" }
    ]
  },
  {
    question: "What role do you usually take in group activities?",
    options: [
      { text: "Making it visually creative and fun", career: "arts" },
      { text: "Organizing tasks and managing time", career: "business" },
      { text: "Handling tech tools or presentations", career: "tech" },
      { text: "Supportive and ensuring everyone's okay", career: "health" }
    ]
  },
  {
    question: "What would you most like to be recognized for?",
    options: [
      { text: "Making a viral art piece", career: "arts" },
      { text: "Building a startup from scratch", career: "business" },
      { text: "Inventing a useful gadget", career: "tech" },
      { text: "Saving or improving lives", career: "health" }
    ]
  },
  {
    question: "Which of these best matches your personality?",
    options: [
      { text: "Imaginative and expressive", career: "arts" },
      { text: "Driven and goal-oriented", career: "business" },
      { text: "Logical and curious", career: "tech" },
      { text: "Compassionate and patient", career: "health" }
    ]
  },
  {
    question: "What kind of news headline would make you proud?",
    options: [
      { text: "Student’s Music Video Goes Viral Worldwide", career: "arts" },
      { text: "Young Entrepreneur Wins Global Pitch Contest", career: "business" },
      { text: "High Schooler Hacks Solution to Global Problem", career: "tech" },
      { text: "Teen Develops Community Wellness App", career: "health" }
    ]
  },
  
  {
    question: "You’d love a class focused on:",
    options: [
      { text: "Film editing and animation", career: "arts" },
      { text: "Business leadership and finance", career: "business" },
      { text: "Game design and programming", career: "tech" },
      { text: "Human anatomy and mental health", career: "health" }
    ]
  },
  {
    question: "Pick a fun activity for your school club:",
    options: [
      { text: "Host a poetry slam or open mic", career: "arts" },
      { text: "Host a mini business pitch competition", career: "business" },
      { text: "Code a chatbot together", career: "tech" },
      { text: "Hold a CPR training session", career: "health" }
    ]
  },
  {
    question: "If you could intern anywhere, you'd pick:",
    options: [
      { text: "A media production studio", career: "arts" },
      { text: "A marketing agency", career: "business" },
      { text: "A startup accelerator", career: "tech" },
      { text: "A health and wellness center", career: "health" }
    ]
  },
  {
    question: "What’s your favorite kind of school project?",
    options: [
      { text: "Designing posters or presentations", career: "arts" },
      { text: "Running a mock business or shop", career: "business" },
      { text: "Building something with tech", career: "tech" },
      { text: "Creating a health awareness campaign", career: "health" }
    ]
  },
  {
    question: "Your ideal future includes...",
    options: [
      { text: "Making meaningful content", career: "arts" },
      { text: "Managing your own company", career: "business" },
      { text: "Working in a cutting-edge tech role", career: "tech" },
      { text: "Helping others stay physically or mentally healthy", career: "health" }
    ]
  },
  {
    question: "Which extracurricular would you join?",
    options: [
      { text: "Theater or film club", career: "arts" },
      { text: "Junior entrepreneurs club", career: "business" },
      { text: "Robotics or coding club", career: "tech" },
      { text: "Red Cross Youth or health club", career: "health" }
    ]
  },
  {
    question: "What inspires you the most?",
    options: [
      { text: "Artists who express deep truths", career: "arts" },
      { text: "Self-made success stories", career: "business" },
      { text: "Innovation that changes lives", career: "tech" },
      { text: "People who heal and serve others", career: "health" }
    ]
  },
  {
    question: "Which environment do you thrive in?",
    options: [
      { text: "Open, expressive, and collaborative", career: "arts" },
      { text: "Fast-paced and competitive", career: "business" },
      { text: "Structured but flexible for problem-solving", career: "tech" },
      { text: "Caring and community-centered", career: "health" }
    ]
  },
  {
    question: "How do you like to spend your free time?",
    options: [
      { text: "Drawing, filming, or creating", career: "arts" },
      { text: "Planning future goals and hustles", career: "business" },
      { text: "Learning a new software or tool", career: "tech" },
      { text: "Exercising or meditating", career: "health" }
    ]
  },
  {
    question: "A career should be...",
    options: [
      { text: "An outlet for expression", career: "arts" },
      { text: "A way to grow your legacy", career: "business" },
      { text: "A space for constant innovation", career: "tech" },
      { text: "A calling to help others", career: "health" }
    ]
  },
  {
    question: "What would your dream internship involve?",
    options: [
      { text: "Assisting with a film or creative project", career: "arts" },
      { text: "Helping with product development", career: "business" },
      { text: "Working with real developers", career: "tech" },
      { text: "Shadowing doctors or nurses", career: "health" }
    ]
  },
  {
    question: "You’ve been given ₱10,000 to start a project. What do you do?",
    options: [
      { text: "Make a short film or zine", career: "arts" },
      { text: "Start a small online business", career: "business" },
      { text: "Buy parts to build a custom PC or robot", career: "tech" },
      { text: "Donate and organize a medical drive", career: "health" }
    ]
  },
  {
    question: "Which subject are you naturally drawn to?",
    options: [
      { text: "Literature or creative writing", career: "arts" },
      { text: "Accounting or economics", career: "business" },
      { text: "ICT or computer science", career: "tech" },
      { text: "Biology or chemistry", career: "health" }
    ]
  },
  {
    question: "In a crisis, you're most likely to:",
    options: [
      { text: "Use creativity to communicate or comfort", career: "arts" },
      { text: "Take charge and delegate tasks", career: "business" },
      { text: "Try to find the root cause and fix it", career: "tech" },
      { text: "Stay calm and offer first aid", career: "health" }
    ]
  },
  {
    question: "What makes a leader great?",
    options: [
      { text: "Being inspirational and creative", career: "arts" },
      { text: "Vision and decision-making", career: "business" },
      { text: "The ability to solve complex problems", career: "tech" },
      { text: "Empathy and support", career: "health" }
    ]
  },
  {
    question: "What would you prefer to create?",
    options: [
      { text: "A short story or music piece", career: "arts" },
      { text: "A pitch deck for investors", career: "business" },
      { text: "A mobile app", career: "tech" },
      { text: "A mental health support plan", career: "health" }
    ]
  },
  {
    question: "How do you feel about challenges?",
    options: [
      { text: "I express them through art", career: "arts" },
      { text: "They motivate me to work smarter", career: "business" },
      { text: "I treat them like puzzles to solve", career: "tech" },
      { text: "I grow from helping others through theirs", career: "health" }
    ]
  },
  {
    question: "If you could master one skill, what would it be?",
    options: [
      { text: "Cinematography", career: "arts" },
      { text: "Strategic planning", career: "business" },
      { text: "AI or machine learning", career: "tech" },
      { text: "Emergency response and care", career: "health" }
    ]
  },
  {
    question: "What’s your dream workplace like?",
    options: [
      { text: "Full of imagination and self-expression", career: "arts" },
      { text: "Competitive but rewarding", career: "business" },
      { text: "Innovative and experimental", career: "tech" },
      { text: "Supportive and service-oriented", career: "health" }
    ]
  },
  {
    question: "What type of impact do you want to leave?",
    options: [
      { text: "Inspire people through art and ideas", career: "arts" },
      { text: "Build something that lasts generations", career: "business" },
      { text: "Solve global problems with technology", career: "tech" },
      { text: "Improve the lives of others", career: "health" }
    ]
  }
  // ... (Add the remaining 20 questions here to complete the quiz)
];

const questionContainer = document.getElementById("question-container");
const resultSection = document.getElementById("result");
const trackResult = document.getElementById("track-result");

// Optional spinner
const loader = document.createElement("div");
loader.id = "loader";
loader.style.display = "none";
loader.innerHTML = `<p>Loading...</p>`;
document.body.appendChild(loader);

function showQuestion() {
  const current = quizData[currentQuestion];
  if (!current) return;

  questionContainer.innerHTML = `
    <h2>Question ${currentQuestion + 1} of ${quizData.length}</h2>
    <p>${current.question}</p>
    <form id="question-form">
      ${current.options
        .map(
          (opt) => `
        <label>
          <input type="radio" name="answer" value="${opt.career}" required />
          ${opt.text}
        </label>`
        )
        .join("")}
      <button type="submit">${currentQuestion === quizData.length - 1 ? "Finish" : "Next"}</button>
    </form>
  `;

  const form = document.getElementById("question-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const selected = form.answer.value;
    if (selected) {
      scores[selected]++;
      userAnswers.push({
        question: quizData[currentQuestion].question,
        answer: form.querySelector("input:checked").nextSibling.textContent.trim(),
        career: selected
      });
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  });
}

function showResult() {
  questionContainer.style.display = "none";

  let topCareer = Object.entries(scores).reduce(
    (max, entry) => (entry[1] > max[1] ? entry : max),
    ["", -1]
  )[0];

  const messages = {
    tech: "Technology - You could explore careers in programming, IT, or engineering.",
    health: "Health - Consider nursing, medicine, therapy, or public health.",
    arts: "Arts - Maybe pursue graphic design, music, writing, or performing arts.",
    business: "Business - You might shine in entrepreneurship, marketing, or finance."
  };

  trackResult.textContent = messages[topCareer];
  resultSection.style.display = "block";

  showCareerRoadmap(topCareer);
  showAnswerSummary();
  showRetakeButton();
}

async function showCareerRoadmap(careerKey) {
  loader.style.display = "block";
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

    container.style.display = "block";
  } catch (err) {
    console.error("Failed to load career roadmap:", err);
    const container = document.getElementById("roadmap");
    if (container) {
      container.innerHTML = "<p>⚠️ Unable to load roadmap. Please try again later.</p>";
      container.style.display = "block";
    }
  } finally {
    loader.style.display = "none";
  }
}

function showAnswerSummary() {
  const summary = document.createElement("div");
  summary.classList.add("result-section");
  summary.innerHTML = `
    <h3>📝 Your Answers Summary:</h3>
    <ul>
      ${userAnswers
        .map((item, i) => `<li><strong>Q${i + 1}:</strong> ${item.answer} (${item.career})</li>`)
        .join("")}
    </ul>
  `;
  resultSection.appendChild(summary);
}

function showRetakeButton() {
  const btnContainer = document.createElement("div");
  btnContainer.style.textAlign = "center";
  btnContainer.style.marginTop = "30px";

  const retakeBtn = document.createElement("button");
  retakeBtn.textContent = "Retake Quiz";
  retakeBtn.style.marginRight = "15px";
  retakeBtn.style.padding = "10px 20px";
  retakeBtn.style.borderRadius = "5px";
  retakeBtn.style.border = "none";
  retakeBtn.style.backgroundColor = "#007bff";
  retakeBtn.style.color = "white";
  retakeBtn.onclick = () => location.reload();

  const homeBtn = document.createElement("a");
  homeBtn.textContent = "⬅ Back to Home";
  homeBtn.href = "index.html";
  homeBtn.style.padding = "10px 20px";
  homeBtn.style.borderRadius = "5px";
  homeBtn.style.backgroundColor = "#6e8efb";
  homeBtn.style.color = "white";
  homeBtn.style.textDecoration = "none";

  btnContainer.appendChild(retakeBtn);
  btnContainer.appendChild(homeBtn);
  resultSection.appendChild(btnContainer);
}


function setupDarkModeToggle() {
  const toggle = document.createElement("button");
  toggle.id = "dark-mode-toggle";
  toggle.textContent = "🌙 Toggle Dark Mode";
  toggle.style.position = "fixed";
  toggle.style.top = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "10px";
  toggle.style.zIndex = "999";

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  });

  document.body.appendChild(toggle);

  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
}

// Add dark mode styles
const darkStyle = document.createElement("style");
darkStyle.textContent += `
  input[type="radio"] {
    margin-right: 8px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  a:hover {
    opacity: 0.9;
  }

  label {
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .result-section {
    background: #2c2c2c;
    padding: 15px;
    margin-top: 20px;
    border-radius: 10px;
  }
`;

document.head.appendChild(darkStyle);

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showQuestion();
  setupDarkModeToggle();
});
