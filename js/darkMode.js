const darkModeToggle = document.getElementById('darkmode');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode'); // Toggle the 'dark-mode' class on the body
});

// Check for the user's preference (e.g., using local storage)
const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the initial dark mode based on user preference
if (userPrefersDark) {
  body.classList.add('dark-mode');
}