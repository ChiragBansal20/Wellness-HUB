// theme.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.textContent = 'Toggle Theme';
    document.body.appendChild(themeToggle);
  
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);
  
    themeToggle.addEventListener('click', () => {
      const newTheme = document.body.getAttribute('data-theme') === 'black-orange' ? 
        'light' : 'black-orange';
      
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Update button text
      themeToggle.textContent = newTheme === 'black-orange' ? 
        'Light Theme' : 'Dark Theme';
    });
  
    // Set initial button text
    themeToggle.textContent = currentTheme === 'black-orange' ? 
      'Light Theme' : 'Dark Theme';
  });
  