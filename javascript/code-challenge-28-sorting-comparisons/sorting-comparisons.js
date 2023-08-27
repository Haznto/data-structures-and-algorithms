/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

'use strict'

const moviesArray = require('./movies.json')

// console.log(moviesArray)

function sortMoviesByDate(moviesArray) {
    let sorted = moviesArray.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
    return sorted
}
function sortMoviesTitle(moviesArray) {
    let regx = /^(The|A|An)\s+/i;

    moviesArray.forEach(movie => {
        const match = movie.title.match(regx);
        // console.log(match)
        if (match) {
            // console.log(match, '-------------')
            movie.title = movie.title.replace(match[0], '');
        }
    });

    let sorted = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
}

console.log(sortMoviesByDate(moviesArray))
console.log(sortMoviesTitle(moviesArray))


module.exports = {
    sortMoviesByDate, sortMoviesTitle
}