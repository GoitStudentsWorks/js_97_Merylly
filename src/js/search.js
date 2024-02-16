import { getApiInfo } from './api.js';

document.addEventListener('DOMContentLoaded', async function () {
    const switchItems = document.querySelectorAll('.switch-item');
    const exercisesList = document.querySelector('.exercises-list');
    const bpList = document.querySelector('.bp-list');
    const bpFormWrapper = document.querySelector('.bp-form-wraper');
    const bpSearchInput = document.querySelector('.bp-search-input');
    const bpSearchButton = document.querySelector('.bp-search-button');
    let isSearched = false;

    // switch-item 
    for (let i = 0; i < switchItems.length; i++) {
        switchItems[i].addEventListener('click', async function() {
            const filter = switchItems[i].dataset.filter;

            if (isSearched) {
                const searchTerm = bpSearchInput.value.trim().toLowerCase();
                performSearch('Muscles', 'All', searchTerm);
            } else {
                clearSearchResults();
            }
        });
    }

    // Чистимо попередній пошук
    function clearSearchResults() {
        bpList.innerHTML = '';
    }

    // Пошук
    async function performSearch(filter, subtype, searchTerm) {
        const filteredExercises = Array.from(bpList.children).filter(exercise =>
            exercise.textContent.toLowerCase().includes(searchTerm)
        );
        if (filteredExercises.length === 0) {
            renderErrorMessage('');
        } else {
            renderExercises(filteredExercises, bpList);
        }
        isSearched = true;
    }

    // Помилка пошуку
    function renderErrorMessage(message) {
        bpList.innerHTML = `<p class="exercise-no-result">
              Unfortunately,  <span class="exercise-span"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`;
    }

    async function renderExercises(exercises, list) {
        list.innerHTML = '';
        for (let i = 0; i < exercises.length; i++) {
            const exercise = exercises[i];
            const li = document.createElement('li');
            li.classList.add('bp-item');
            li.dataset.id = exercise.dataset.id;
            li.innerHTML = exercise.innerHTML;
            li.addEventListener('click', function() {
                bpFormWrapper.classList.remove('visually-hidden');
            });

            list.appendChild(li);
        }
    }

    bpSearchInput.closest('form').addEventListener('submit', function(event) {
        event.preventDefault();

        const searchTerm = bpSearchInput.value.trim().toLowerCase();
        performSearch('Muscles', 'All', searchTerm);

        bpSearchInput.value = '';
    });

    // відправка 
    bpSearchButton.addEventListener('click', function(event) {
        event.preventDefault();
        const filter = document.querySelector('.switch-item.is-active').dataset.filter;
        const subtype = 'All';
        const searchTerm = bpSearchInput.value.trim().toLowerCase();
        performSearch(filter, subtype, searchTerm);

        bpSearchInput.value = '';
    });

    exercisesList.addEventListener('click', function(event) {
        const targetItem = event.target.closest('.exercises-item');
        if (targetItem) {
            event.preventDefault();
            bpFormWrapper.classList.remove('visually-hidden');
        }
    });

    //Перехід switchItems
switchItems.forEach(item => {
    item.addEventListener('click', function() {
        if (!bpList.classList.contains('visually-hidden')) {
            bpList.classList.add('visually-hidden');
        }
        if (exercisesList.classList.contains('visually-hidden')) {
            exercisesList.classList.remove('visually-hidden');
        }
    });
});


});
