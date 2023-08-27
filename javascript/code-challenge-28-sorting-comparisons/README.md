# Comparative-sort

## NOTE: This Code Challenge didn't require Whiteboarding

## Problem Domain:

Functions accepting data as movies, to sort them by title or by release date.

input: an Array of movie objects

output: Sorted Array.

## Efficency

**Time O( n log(n) ).**

**Space O(1).**

---

## The CODE

``` javascript

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

```

## For Testing

Navigate to the challenge directory then type `npm test -- sorting-comparison.test.js`
