export class MovieApp {
  constructor(containerId, movies) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('Контейнер для фильмов не найден');
      return;
    }

    this.movies = movies.map((movie, index) => ({
      ...movie,
      id: index,
      liked: false
    }));

    this.render();
  }

  toggleLike(id) {
    const movie = this.movies.find(m => m.id === id);
    if (movie) {
      movie.liked = !movie.liked;
      this.render();
    }
  }

  render() {
    this.container.innerHTML = '';

    this.movies.forEach(movie => {
      const movieEl = document.createElement('div');
      movieEl.className = 'movie';
      movieEl.innerHTML = `
        <span>${movie.title} (${movie.year})</span>
        <button class="like-btn">${movie.liked ? '❤️' : '🤍'}</button>
      `;

      const button = movieEl.querySelector('button');
      button.addEventListener('click', () => {
        this.toggleLike(movie.id);
      });

      this.container.appendChild(movieEl);
    });
  }
}