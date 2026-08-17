let isProjectsVisible = true;

function toggleProjects() {
  const details = document.getElementById("previousProjects");
  const button = document.getElementById("toggleBtn");

  isProjectsVisible =!isProjectsVisible

  if (details.style.display === "none") {
    details.style.display = "block";
    button.textContent = "Hide Project Details";
  } else {
      details.style.display = "none";
      button.textContent = "Show Project Details";
  }
  
}

function setGreeting() {
    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("timeGreeting").textContent = greeting;
    }
    window.onload = function() {
        setGreeting();
    };
