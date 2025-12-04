const moviesList = [
  { title: 'Интерстеллар', year: 2014 },
  { title: 'Начало', year: 2010 },
  { title: 'Матрица', year: 1999 },
  { title: 'Побег из Шоушенка', year: 1994 },
  { title: 'Властелин колец: Братство кольца', year: 2001 }
];

const likedState = {};

const container = document.getElementById('movies-container');


function render() {
  container.innerHTML = '';

  moviesList.forEach((movie, index) => {
    const isLiked = likedState[index] || false;

    const movieEl = document.createElement('div');
    movieEl.className = 'movie';

    const titleEl = document.createElement('span');
    titleEl.textContent = `${movie.title} (${movie.year})`;

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.textContent = isLiked ? '❤️' : '🤍';

    likeBtn.addEventListener('click', () => {
      likedState[index] = !likedState[index];
      render();
    });

    movieEl.appendChild(titleEl);
    movieEl.appendChild(likeBtn);
    container.appendChild(movieEl);
  });
}

render();