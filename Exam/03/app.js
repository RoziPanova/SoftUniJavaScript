//http://localhost:3030/jsonstore/workout/
//http://localhost:3030/jsonstore/workout/:id

function loadWorkout(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function createWorkout(baseUrl, workout, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(workout)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function updateWorkout(baseUrl, workout, onSuccess) {
    fetch(baseUrl + workout._id, {
        method: 'PUT',
        body: JSON.stringify(workout)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function deleteWorkout(baseUrl, workout, onSuccess) {
    fetch(baseUrl + workout._id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function createElement(tag, properties, container) {
    const element = document.createElement(tag)

    Object.keys(properties).forEach(key => {
        if (typeof properties[key] === 'object') {
            element[key] ??= {};
            Object.assign(element[key], properties[key]);
        } else {
            element[key] = properties[key];
        }
    });

    if (container) container.append(element);

    return element;
}

function init() {

    const baseUrl = 'http://localhost:3030/jsonstore/workout/';

    const fields = [...document.querySelectorAll('#form form input[type="text"]')];
    const listEl = document.querySelector('#list');
    const btnLoadWorkout = document.querySelector('#load-workout');

    const btnAddWorkoutEl = document.querySelector('#add-workout');
    const btnEditWorkoutEl = document.querySelector('#edit-workout');


    btnAddWorkoutEl.addEventListener('click', createHandler);
    btnEditWorkoutEl.addEventListener('click', updateHandler);

    btnLoadWorkout.addEventListener('click', loadEntries);
    function loadEntries() {
        listEl.innerHTML = '';
        loadWorkout(baseUrl, (result) => {
            Object.values(result).forEach(createEntry);
        });
        console.log('loaded');
    }
    function createEntry({ workout, date, location, _id }) {
        const entryEl = createElement('div', { className: 'container', dataset: { workout, date, location, _id } }, listEl);

        createElement('h2', { textContent: workout }, entryEl);
        createElement('h3', { textContent: date }, entryEl);
        createElement('h3', { textContent: location }, entryEl).setAttribute('id', 'location');
        const buttonsEl = createElement('div', {}, entryEl);
        createElement('button', { className: 'change-btn', textContent: 'Change', onclick: changeHandler }, buttonsEl);
        createElement('button', { className: 'delete-btn', textContent: 'Done', onclick: deleteHandler }, buttonsEl);
        buttonsEl.setAttribute('id', 'buttons-container')
    }

    function changeHandler(e) {
        const entryEl = e.target.closest('div');
        const values = Object.values(entryEl.dataset);

        entryEl.classList.add('active');

        fields.forEach((field, index) => field.value = values[index]);
        console.log("created");
        btnAddWorkoutEl.disabled = true;
        btnEditWorkoutEl.disabled = false;
    }
    function deleteEntry({ workout, date, location, _id }) {
        listEl.querySelector(`div.container [data-_id="${_id}"]`).remove();
    }

    function deleteHandler(e) {
        const entryEl = e.target.closest('div .container');
        console.log(entryEl);

        const workout = Object.assign({}, entryEl.dataset);

        deleteWorkout(baseUrl, workout, (result) => {
            console.log(result);
            deleteEntry(result);
        });
    }

    function createHandler(e) {
        e.preventDefault();

        const [workout, location, date] = fields.map(field => field.value);

        if (!workout || !date || !location) return;

        const match = { workout, date, location };

        createMatch(baseUrl, match, (result) => {
            createEntry(result);
        });

        fields.forEach(field => field.value = '');
    }

    function updateHandler(e) {
        e.preventDefault();

        const [workout, date, location] = fields.map(field => field.value);

        if (!workout || !date || !location) return;

        const entryEl = listEl.querySelector('div.container.active');

        const match = { workout, date, location, _id: entryEl.dataset._id };

        updateWorkout(baseUrl, workout, (result) => {
            loadEntries();
            fields.forEach(field => field.value = '');
            btnAddWorkoutEl.disabled = false;
            btnEditWorkoutEl.disabled = true;
        });
    }

}

document.addEventListener('DOMContentLoaded', init);