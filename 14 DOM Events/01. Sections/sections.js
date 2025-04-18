document.addEventListener('DOMContentLoaded', solve);

function solve() {
   // TODO

   const formEl = document.querySelector('#task-input');
   const contentEl = document.querySelector('#content');

   formEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const section = formEl.querySelector('input[type="text"]').value.split(', ');

      section.forEach(element => {
         const newDivEl = document.createElement('div');
         const newPEl = document.createElement('p');


         newPEl.textContent = element;
         newPEl.style.display = 'none';

         newDivEl.append(newPEl);

         newDivEl.addEventListener('click', (e) => {
            e.target.querySelector('p').style.display = 'block';
         });

         contentEl.append(newDivEl);
      });
   });
}