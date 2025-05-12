// DOM elements
const savePrefsBtn = document.getElementById('savePrefs');
const animateBtn = document.getElementById('animateBtn');
const animatedElement = document.getElementById('animatedElement');
const usernameInput = document.getElementById('username');
const themeSelect = document.getElementById('theme');

// Load preferences from localStorage
function loadPreferences() {
    const savedUsername = localStorage.getItem('username');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedUsername) {
        usernameInput.value = savedUsername;
    }
    
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }
}

// Save preferences to localStorage
function savePreferences() {
    const username = usernameInput.value;
    const theme = themeSelect.value;
    
    localStorage.setItem('username', username);
    localStorage.setItem('theme', theme);
    
    applyTheme(theme);
    
    // Show feedback animation
    savePrefsBtn.textContent = 'Saved!';
    savePrefsBtn.style.backgroundColor = '#2E7D32';
    
    setTimeout(() => {
        savePrefsBtn.textContent = 'Save Preferences';
        savePrefsBtn.style.backgroundColor = '#4CAF50';
    }, 1500);
}

// Apply selected theme
function applyTheme(theme) {
    document.body.className = theme;
}

// Toggle animation on the box
function toggleAnimation() {
    // Remove any existing animation classes
    animatedElement.className = 'box';
    
    // Get a random animation
    const animations = ['spin', 'bounce', 'color-change'];
    const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    
    // Apply the animation
    animatedElement.classList.add(randomAnim);
    
    // Change button text temporarily
    animateBtn.textContent = 'Animating...';
    setTimeout(() => {
        animateBtn.textContent = 'Click to Animate';
    }, 1000);
}

// Event listeners
savePrefsBtn.addEventListener('click', savePreferences);
animateBtn.addEventListener('click', toggleAnimation);

// Initialize
loadPreferences();