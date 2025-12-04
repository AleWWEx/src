import { MovieApp } from './App.js';

const moviesList = [
  { title: 'Интерстеллар', year: 2014 },
  { title: 'Начало', year: 2010 },
  { title: 'Матрица', year: 1999 },
  { title: 'Побег из Шоушенка', year: 1994 },
  { title: 'Властелин колец: Братство кольца', year: 2001 }
];

const app = new MovieApp('movies-container', moviesList);

window.__movieApp = app;