/** @type {import('tailwindcss').Config} */

module.exports = {

    content: [
        './index.html',
        './script.js' // Adjust these paths to match where your HTML and JavaScript files are located
    ],
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
