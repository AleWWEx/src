import React, { useState } from 'react';

const App = () => {
  const initialMovies = [
    { id: 1, title: 'Интерстеллар', year: 2014, genre: 'Фантастика' },
    { id: 2, title: 'Начало', year: 2010, genre: 'Триллер' },
    { id: 3, title: 'Побег из Шоушенка', year: 1994, genre: 'Драма' },
    { id: 4, title: 'Матрица', year: 1999, genre: 'Боевик' },
    { id: 5, title: 'ВАЛЛ-И', year: 2008, genre: 'Мультфильм' },
  ];

  const [movies, setMovies] = useState(initialMovies);

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie =>
      movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
    ));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Список фильмов</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {movies.map(movie => (
          <li
            key={movie.id}
            style={{
              marginBottom: '12px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor: '#f9f9f9',
              fontWeight: movie.favorite ? 'bold' : 'normal',
            }}
          >
            <span>
              {movie.title} ({movie.year}) — {movie.genre}
            </span>
            <button
              onClick={() => toggleFavorite(movie.id)}
              style={{
                marginLeft: '12px',
                background: 'none',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                color: movie.favorite ? 'red' : 'black',
              }}
            >
              {movie.favorite ? '❤️' : '🖤'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;