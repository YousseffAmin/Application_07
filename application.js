document.addEventListener('DOMContentLoaded', () => {
    // Cache elements
    const movieForm = document.getElementById('movie-form');
    const movieInput = document.querySelector('#movie-input');
    const movieList = document.getElementById('movie-list');
    const movieTemplate = document.getElementById('movie-template').content;

    // Event listener to submission
    movieForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addMovie();
    });

    // Function to add any movie
    function addMovie() {
        const movieName = movieInput.value.trim();
        if (movieName === '') return;

        // Clones the templates
        const newMovie = movieTemplate.cloneNode(true);

        // Modify text 
        newMovie.querySelector('.movie-name').textContent = movieName;

        // Event listener to  remove button
        newMovie.querySelector('.remove-btn').addEventListener('click', (event) => {
            const item = event.target.parentNode;
            movieList.removeChild(item);
        });

        // Append new movie here
        movieList.appendChild(newMovie);

        // Clear input
        movieInput.value = '';
    }

    // Event-based voledation
    movieInput.addEventListener('input', () => {
        if (movieInput.value.trim() === '') {
            movieInput.setCustomValidity('Movie name cannot be empty.');
            movieInput.style.borderColor = 'red';
        } else {
            movieInput.setCustomValidity('');
            movieInput.style.borderColor = '';
        }
    });
});
