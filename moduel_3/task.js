let movies = [
  { title: 'Incepta', ratting: 8.9, year: 2010, genre: 'Sci-fi' },
  { title: 'Oplake', ratting: 3.5, year: 2013, genre: 'flop' },
  { title: 'Koakjcdi', ratting: 6.5, year: 2022, genre: 'Sci-fi' },
  { title: 'Rose', ratting: 9.7, year: 2032, genre: 'Romance' },
  { title: 'Titaniq', ratting: 9.6, year: 1967, genre: 'Romance' },
];

let topSci = movies
  .filter((m) => m.genre === 'Sci-fi')
  .sort((a, b) => a.ratting - b.ratting)
  .map((m) => `title: ${m.title}, ratting:${m.ratting}`);
console.log(topSci);
