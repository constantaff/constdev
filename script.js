'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Анастасия"
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        list = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkBox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = addInput.value;
        const favorite = checkBox.checked;

        if (newFilm) {
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, list);
        }

        event.target.reset();
    });

    console.log("Privet!");
    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        films.movies.sort();
        films.movies.forEach((film, i) => {
            parent.innerHTML += ` 
        <li class="promo__interactive-item">№:${i+1} ${film} 
        <div class="delete"></div>
        </li>
        `;
        });


        const deleteAdv = (arr) => {
            arr.forEach(item => {
                item.remove();
            });
        };


        const makeChanges = () => {
            genre.textContent = 'DRAMA';
            poster.style.backgroundImage = 'url("img/bg.jpg")';
        };

        createMovieList(movieDB.movies, list);
        sortArr(movieDB.movies);
        deleteAdv(adv);
        makeChanges();

    };
});

console.log("HellO!");