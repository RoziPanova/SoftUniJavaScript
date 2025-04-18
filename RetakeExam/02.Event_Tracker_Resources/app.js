window.addEventListener("load", solve);

function solve() {
    // TODO

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

    const inputs = [...document.querySelectorAll('form.event-content input')];
    const saveBtnEl = document.querySelector('#save');
    const deleteBtnEl = document.querySelector('#events button.delete');

    const upcomingListEl = document.querySelector('#upcoming-list');
    const endedListEl = document.querySelector('#events-list');


    saveBtnEl.addEventListener('click', addHandler);
    deleteBtnEl.addEventListener('click', clearHandler);

    function createEntry({ event, note, date }) {
        const entryEl = createElement('li', { className: 'event-item', dataset: { event, note, date } }, upcomingListEl);
        const divEl = createElement('div', { className: 'event-container' }, entryEl);
        const articleEl = createElement('article', {}, divEl);
        createElement('p', { textContent: 'Name: ' + event }, articleEl);
        createElement('p', { textContent: 'Note: ' + note }, articleEl);
        createElement('p', { textContent: 'Date: ' + date }, articleEl);
        const btnDivEl = createElement('div', { className: 'buttons' }, divEl);
        createElement('button', { className: 'btn edit', textContent: 'Edit', onclick: editHandler }, btnDivEl);
        createElement('button', { className: 'btn done', textContent: 'Done', onclick: confirmHandler }, btnDivEl);
    }

    function createEntryEnded({ event, note, date }) {
        const entryEl = createElement('li', { className: 'event-item', dataset: { event, note, date } }, upcomingListEl);
        const divEl = createElement('div', { className: 'event-container' }, entryEl);
        const articleEl = createElement('article', {}, divEl);
        createElement('p', { textContent: 'Name: ' + event }, articleEl);
        createElement('p', { textContent: 'Note: ' + note }, articleEl);
        createElement('p', { textContent: 'Date: ' + date }, articleEl);
        const btnDivEl = createElement('div', { className: 'buttons' }, divEl);
        createElement('button', { className: 'btn edit', textContent: 'Edit', onclick: editHandler }, btnDivEl);
        createElement('button', { className: 'btn done', textContent: 'Done', onclick: confirmHandler }, btnDivEl);
    }

    function addHandler(e) {
        e.preventDefault();

        const [event, note, date] = inputs.map(field => field.value);

        if (!event || !note || !date) return;

        console.log(inputs);

        createEntry({ event, note, date });

        inputs.forEach(field => field.value = '');

        saveBtnEl.disabled = false;
    }

    function clearHandler(e) {
        e.preventDefault();

        endedListEl.innerHTML = '';
    }

    function editHandler(e) {
        e.preventDefault();

        const entryEl = e.target.closest('li');
        const values = Object.values(entryEl.dataset);

        inputs.forEach((field, index) => field.value = values[index]);

        entryEl.remove();

        saveBtnEl.disabled = false;
    }

    function confirmHandler(e) {
        e.preventDefault();

        const entryEl = e.target.closest('li');

        entryEl.remove();

        const articleEl = entryEl.querySelector('article');
        console.log(articleEl);

        entryEl.querySelector('div.event-container').remove();

        entryEl.appendChild(articleEl);

        endedListEl.append(entryEl);

        saveBtnEl.disabled = false;
    }


}



