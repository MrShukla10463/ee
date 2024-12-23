// Select menu toggle button and nav links container
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Add click event listener to toggle button
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Toggle the 'active' class on the navLinks container
});

// Add click event listeners to all navigation links
const navItems = document.querySelectorAll('#navLinks a'); // Select all links within the nav

navItems.forEach((navItem) => {
  navItem.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the href attribute
    const targetId = navItem.getAttribute('href').slice(1); // Remove the "#" from the ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section with smooth behavior
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Close the toggle menu if it's open
      navLinks.classList.remove('active');
    }
  });
});
