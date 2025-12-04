export class MovieApp {
  constructor(containerId, movies) {
    this.container = document.getElementById(containerId);
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
    this.container.innerHTML = this.movies
      .map(movie => `
        <div class="movie">
          <span>${movie.title} (${movie.year})</span>
          <button class="like-btn ${movie.liked ? 'liked' : ''}"
                  onclick="window.__movieApp.toggleLike(${movie.id})">
            ${movie.liked ? '❤️' : '🤍'}
          </button>
        </div>
      `)
      .join('');
  }
}