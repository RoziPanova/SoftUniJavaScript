
// API Functions

function loadResources(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function createResource(baseUrl, resource, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(resource)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function updateResource(baseUrl, resource, onSuccess) {
    fetch(baseUrl + resource._id, {
        method: 'PUT',
        body: JSON.stringify(resource)
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

function deleteResource(baseUrl, resource, onSuccess) {
    fetch(baseUrl + resource._id, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(onSuccess)
        .catch(error => console.error('Error: ', error));
}

// UTIL Functions

function createElement(tag, properties, container) {
    const element = document.createElement(tag);

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

    const baseUrl = 'http://localhost:3030/jsonstore/orders/';

    const inputs = [...document.querySelectorAll('#name,#quantity,#date')];

    const btnOrderEl = document.querySelector('#order-btn');
    const btnEditEl = document.querySelector('#edit-order');
    const btnLoadEl = document.querySelector('#load-orders');

    const divOrdersEl = document.querySelector('#list');

    btnLoadEl.addEventListener('click', loadEntries);
    btnOrderEl.addEventListener('click', createHandler);
    btnEditEl.addEventListener('click', updateHandler);

    function loadEntries() {
        divOrdersEl.innerHTML = '';

        loadResources(baseUrl, (result) => {
            Object.values(result).forEach(createEntry);
        });
    }

    function createEntry({ name, quantity, date, _id }) {
        const divContainerEl = createElement('div', { className: 'container', dataset: { name, quantity, date, _id } }, divOrdersEl);
        createElement('h2', { textContent: name }, divContainerEl);
        createElement('h3', { textContent: date }, divContainerEl);
        createElement('h3', { textContent: quantity }, divContainerEl);
        createElement('button', { className: 'change-btn', textContent: 'Change', onclick: changeHandler }, divContainerEl);
        createElement('button', { className: 'done-btn', textContent: 'Done', onclick: deleteHandler }, divContainerEl);

    }

    function createHandler(e) {
        e.preventDefault();

        const [name, quantity, date] = inputs.map(field => field.value);

        if (!name || !quantity || !date) return;

        const resourceObject = { name, quantity, date };

        console.log(resourceObject);

        createResource(baseUrl, resourceObject, (result) => {
            createEntry(result);
        });

        inputs.forEach(field => field.value = '');
    }

    let updatedEl = '';
    function changeHandler(e) {
        const entryEl = e.target.closest('div');
        const values = Object.values(entryEl.dataset);

        inputs.forEach((field, index) => field.value = values[index]);

        entryEl.classList.add('active');

        updatedEl = divOrdersEl.querySelector('.active');
        console.log(updatedEl);

        divOrdersEl.removeChild(updatedEl);

        btnEditEl.disabled = false;
        btnOrderEl.disabled = true;
    }

    function updateHandler(e) {
        e.preventDefault();

        const [name, quantity, date] = inputs.map(field => field.value);

        if (!name || !quantity || !date) return;

        const entryEl = updatedEl;

        console.log(entryEl);

        const resourceObject = { name, quantity, date, _id: entryEl.dataset._id };

        updateResource(baseUrl, resourceObject, (result) => {
            loadEntries();
            inputs.forEach(field => field.value = '');
            btnOrderEl.disabled = false;
            btnEditEl.disabled = true;
        });
    }

    function deleteEntry({ name, quantity, date, _id }) {
        divOrdersEl.querySelector(`div[data-_id="${_id}"]`).remove();
    }

    function deleteHandler(e) {
        const entryEl = e.target.closest('div');
        const resourceObject = Object.assign({}, entryEl.dataset);

        deleteResource(baseUrl, resourceObject, deleteEntry);
    }

}
document.addEventListener('DOMContentLoaded', init);