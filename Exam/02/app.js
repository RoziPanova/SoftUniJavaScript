window.addEventListener("load", solve);

function solve() {

  function createElement(tag, properties, container) {
    const element = document.createElement(tag);

    Object.keys(properties).forEach(key => {
      if (typeof properties[key] === 'object') {
        Object.assign(element[key], properties[key]);
      } else {
        element[key] = properties[key];
      }
    });

    if (container) container.append(element);

    return element;
  }

  const fields = [...document.querySelectorAll('#email, #event, #location')];
  const btnNextEl = document.querySelector('#next-btn');

  const listPreviewEl = document.querySelector('#preview-list');
  const listApprovedEl = document.querySelector('#event-list');

  function createEvent({ email, event, location }) {
    const entryEl = createElement('li', { dataset: { email, event, location }, className: 'application' }, listPreviewEl);
    const articleEl = createElement('article', {}, entryEl);
    const paragraphEventEL = createElement('p', {}, articleEl);
    const paragraphLocationEL = createElement('p', {}, articleEl);
    createElement('h4', { textContent: email }, articleEl);
    createElement('strong', { textContent: 'Event:' }, paragraphEventEL);
    createElement('br', {}, paragraphEventEL);
    paragraphEventEL.innerHTML += event;
    createElement('strong', { textContent: 'Location:' }, paragraphLocationEL);
    createElement('br', {}, paragraphLocationEL);
    paragraphLocationEL.innerHTML += location;
    createElement('button', { className: 'action-btn edit', textContent: 'Edit', onclick: editHandler }, entryEl);
    createElement('button', { className: 'action-btn apply', textContent: 'Apply', onclick: applyHandler }, entryEl);

  }

  function editHandler(e) {
    const entryEl = e.target.closest('li');
    entryEl.remove();

    const values = [entryEl.dataset.email, entryEl.dataset.event, entryEl.dataset.location];

    fields.forEach((field, index) => field.value = values[index]);
    btnNextEl.disabled = false;

  }

  function applyHandler(e) {
    const entryEl = e.target.closest('li');
    entryEl.remove();
    entryEl.querySelector('button').remove();
    entryEl.querySelector('button').remove();
    listApprovedEl.append(entryEl);

    btnNextEl.disabled = false;
  }
  btnNextEl.addEventListener('click', (e) => {
    e.preventDefault();


    const [email, event, location] = fields.map(field => field.value);

    if (!email || !event || !location) return;

    createEvent({ email, event, location });

    e.target.disabled = true;
    fields.forEach(field => field.value = '');
  });

}