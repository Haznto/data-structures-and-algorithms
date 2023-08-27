'use strict';

/* eslint-disable no-dupe-class-members */
/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable eol-last */

const {sortMoviesByDate, sortMoviesTitle} = require('../sorting-comparisons')
const moviesArr = require('../movies.json')

let sortedByDate = [
    {
      title: 'Ahsoka',
      release_date: '2023-08-22',
      genres: [ 'action', 'adventure', 'science' ]
    },
    {
      title: 'Meg 2: The Trench',
      release_date: '2023-08-02',
      genres: [ 'action', 'adventure' ]
    },
    {
      title: 'Oppenheimer',
      release_date: '2023-07-19',
      genres: [ 'history', 'thriller', 'drama' ]
    },
    {
      title: 'Elemental',
      release_date: '2023-06-14',
      genres: [ 'horror', 'mystery', 'drama', 'thriller' ]
    },
    {
      title: 'Spider-Man: Across the Spider-Verse',
      release_date: '2023-05-31',
      genres: [ 'action', 'adventure', 'comedy', 'fantasy' ]
    }
  ]
let sortedByTitle = [
    {
      title: 'Ahsoka',
      release_date: '2023-08-22',
      genres: [ 'action', 'adventure', 'science' ]
    },
    {
      title: 'Elemental',
      release_date: '2023-06-14',
      genres: [ 'horror', 'mystery', 'drama', 'thriller' ]
    },
    {
      title: 'Meg 2: The Trench',
      release_date: '2023-08-02',
      genres: [ 'action', 'adventure' ]
    },
    {
      title: 'Oppenheimer',
      release_date: '2023-07-19',
      genres: [ 'history', 'thriller', 'drama' ]
    },
    {
      title: 'Spider-Man: Across the Spider-Verse',
      release_date: '2023-05-31',
      genres: [ 'action', 'adventure', 'comedy', 'fantasy' ]
    }
  ]

describe('Testing comparative sort ', () => {
    
    
    it('Returns a sorted array of movies by release date', () => { 
        
        expect(sortMoviesByDate(moviesArr)).toEqual(sortedByDate)
    })
    it('Returns a sorted array of movies by title', () => { 
        
        expect(sortMoviesTitle(moviesArr)).toEqual(sortedByTitle)
    })
})