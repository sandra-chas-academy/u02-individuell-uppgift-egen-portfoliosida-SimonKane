const navBar = document.querySelector("nav");
const hamburgerBtn = document.querySelector(".hamburger-menu");
const linkMenu = document.querySelector(".links");
const navLinks = document.querySelector(".nav-links");
const mainContainer = document.querySelector(".container");
const aboutText = document.querySelector(".about-me-text");
let headline = "";
const text =
  "I am an aspiring coder, passionate about learning and growing in the world of programming. Currently, I am immersing myself in various coding languages, including JavaScript, Python, and C#. My goal is to build a strong foundation in software development and expand my skill set to become a versatile programmer capable of tackling a wide range of projects. In addition to coding, I enjoy exploring the logic behind technology and understanding how different systems work together to create innovative solutions. My learning journey is driven by curiosity and the desire to create something meaningful that can impact others positively. And yes i look like Mandelman";

const token =
  "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";
async function fetchGitAPI() {
  const projectDiv = document.querySelector(".project-cards");
  try {
    await fetch(
      "https://api.github.com/user/repos?affiliation=owner,collaborator",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        projectDiv.innerHTML = "";
        data.forEach((repo) => {
          const projectCard = document.createElement("div");
          projectCard.classList.add("project-card");
          projectCard.innerHTML = `<img class="project-image" src="./img/profilepic.jpg" alt=""> <div class="project-info"><p>{ ${repo.name} }</p></div>`;
          projectDiv.append(projectCard);
        });
      });
  } catch (error) {
    console.error(error);
  }
}

async function fetchCV() {
  try {
    await fetch("about.json")
      .then((res) => res.json())
      .then((data) => {
        const cvSection = document.querySelector(".cv");
        const cvDiv = document.createElement("div");
        const cvHeadline = document.createElement("h1");
        cvHeadline.classList.add("cv-header");
        cvHeadline.textContent = "CV: Education";
        cvDiv.append(cvHeadline);
        const workHeadline = document.createElement("h1");
        workHeadline.classList.add("cv-header");
        workHeadline.textContent = "CV: Work";

        data.education.forEach((school) => {
          cvDiv.innerHTML += `<div class="education">
            <h2>${school.institution}:</h2>
            <p>${school.location}</p>
            <p>${school.start_year} - ${school.end_year}</p>`;
        });
        cvSection.append(cvDiv);

        let workDiv = document.createElement("div");
        workDiv.append(workHeadline);
        data.work_experience.forEach((work, i) => {
          workDiv.innerHTML += `<div class="work">
          <h2>${work.title}:</h2>
          <p>${work.company}</p>
          <p>${work.start_year} - ${work.end_year}</p>
        </div>`;
        });

        cvSection.append(workDiv);
      });
  } catch (error) {
    console.error(error);
  }
}

if (window.innerWidth < 750) {
  linkMenu.classList.add("hidden");
  navBar.classList.add("width");
}

hamburgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("width");
  linkMenu.classList.toggle("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    navBar.classList.remove("width");
    linkMenu.classList.remove("hidden");
  } else if (window.innerWidth <= 750) {
    navBar.classList.add("width");
    linkMenu.classList.add("hidden");
  }
});

navLinks.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (window.innerWidth <= 750) {
    linkMenu.classList.add("hidden");
    navBar.classList.add("width");
  }
  if (button && button.classList.contains("about-me-btn")) {
    headline = "Simon Kane";
    const aboutMeHTML = `<section class="main-page">
  <h1>${headline}</h1>
  <img src="./img/profilepic.jpg" alt="simonkane" />
  <div class="text">
  <p class="about-me-text">${text}</p>
  </div> </section>`;
    mainContainer.innerHTML = aboutMeHTML;
  }
  if (button && button.classList.contains("cv-btn")) {
    headline = "CV";
    mainContainer.innerHTML = "";
    const cvHTML = `<section class="cv">
    </section>`;
    mainContainer.innerHTML = cvHTML;
    fetchCV();
  }
  if (button && button.classList.contains("projects-btn")) {
    headline = "Projects";
    mainContainer.innerHTML = "";
    const projectsHTML = `<section class="projects">
  <h1>${headline}</h1>
      <div class="project-cards">
       <div class="loading-placeholder"></div>
        <div class="loading-placeholder"></div>
        <div class="loading-placeholder"></div>
      </div>
    </section>`;
    mainContainer.innerHTML = projectsHTML;
    // fetchGitAPI();
  }
});

//Eventlystnare för att hovra över Nav-knappar
navLinks.addEventListener("mouseover", (e) => {
  const button = e.target.closest("li");
  if (button && button.querySelector("p")) {
    let text = button.querySelector("p");
    text.style.width = "100px";
    text.style.opacity = "1";
    text.style.transform =
      window.innerWidth < 750 ? "translate(0, -100px)" : "translate(0, -70px)";
  }
});

navLinks.addEventListener("mouseout", (e) => {
  const button = e.target.closest("li");

  if (button && button.querySelector("p")) {
    let text = button.querySelector("p");
    text.style.width = "0";
    text.style.opacity = "0";
    text.style.transform = "translate(0, 30px)";
  }
});

//Function för "typwritereffekt" på texten på about

function typeWriter(aboutText) {
  let index = 0;

  function writer() {
    if (index < text.length) {
      aboutText.textContent += text.charAt(index);
      index++;
      setTimeout(writer, 20);
    }
  }
  writer();
}

typeWriter(aboutText);
