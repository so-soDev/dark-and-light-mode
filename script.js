// Get the theme toggle checkbox element by its ID
const themeCheckbox = document.getElementById('toggle-checkbox');

// Add an event listener for when the checkbox state changes
themeCheckbox.addEventListener('change', () => {
    // Check if the checkbox is selected
    if (themeCheckbox.checked) {
        // Set the 'dark' theme attribute on the root element (html)
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        // Remove the theme attribute to revert to the light theme
        document.documentElement.removeAttribute('data-theme');
    }
});
