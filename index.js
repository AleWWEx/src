const moviesList = [
  { title: 'Интерстеллар', year: 2014 },
  { title: 'Начало', year: 2010 },
  { title: 'Матрица', year: 1999 },
  { title: 'Побег из Шоушенка', year: 1994 },
  { title: 'Властелин колец: Братство кольца', year: 2001 }
];

let likedState = {};
let currentView = 'all';

if (localStorage.getItem('filmLikes')) {
  likedState = JSON.parse(localStorage.getItem('filmLikes'));
}

const container = document.getElementById('movies-container');
const btnAll = document.getElementById('show-all');
const btnLiked = document.getElementById('show-liked');

function saveLikes() {
  localStorage.setItem('filmLikes', JSON.stringify(likedState));
}

function render() {
  container.innerHTML = '';

  let moviesToRender = [];

  if (currentView === 'all') {
    moviesToRender = moviesList.map((movie, index) => ({ ...movie, index }));
  } else if (currentView === 'liked') {
    moviesToRender = moviesList
      .map((movie, index) => ({ ...movie, index }))
      .filter(({ index }) => likedState[index]);
  }

  if (moviesToRender.length === 0) {
    container.innerHTML = '<p>Нет фильмов</p>';
    return;
  }

  moviesToRender.forEach(({ title, year, index }) => {
    const isLiked = likedState[index] || false;

    const movieEl = document.createElement('div');
    movieEl.className = 'movie';

    const titleEl = document.createElement('span');
    titleEl.textContent = `${title} (${year})`;

    const likeBtn = document.createElement('button');
    likeBtn.className = 'like-btn';
    likeBtn.textContent = isLiked ? '❤️' : '🤍';

    likeBtn.addEventListener('click', () => {
      likedState[index] = !likedState[index];
      saveLikes();
      render();
    });

    movieEl.appendChild(titleEl);
    if (currentView === 'all') {
      movieEl.appendChild(likeBtn);
    }

    container.appendChild(movieEl);
  });
}

function switchView(view) {
  currentView = view;
  btnAll.classList.toggle('active', view === 'all');
  btnLiked.classList.toggle('active', view === 'liked');
  render();
}

btnAll.addEventListener('click', () => switchView('all'));
btnLiked.addEventListener('click', () => switchView('liked'));

render();