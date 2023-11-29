//Navigation
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}



// Avatar Section
// Get all .member-avatar img elements
const memberAvatarImages = document.querySelectorAll('.member-avatar img');

// Add a hover event listener to each .member-avatar img element
memberAvatarImages.forEach((img) => {
  img.addEventListener('mouseover', () => {
    // Generate a random color
    const randomColor = getRandomColor();

    // Change the background color and maintain the border-radius style
    const container = img.parentElement;
    container.style.backgroundColor = randomColor;
    container.style.borderRadius = '250px'; // Apply your border-radius style
  });
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
