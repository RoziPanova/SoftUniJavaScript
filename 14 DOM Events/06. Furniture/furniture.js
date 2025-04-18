document.addEventListener('DOMContentLoaded', solve);

function solve() {
  const inputFormEl = document.querySelector('#input');
  inputFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputEl = e.target.querySelector('textarea');
    const data = JSON.parse(inputEl.value);
    const productListEl = document.querySelector('table tbody');

    data.forEach(item => {

      const product = document.createElement('tr');

      const productImgCell = document.createElement('td');
      const productImgEl = document.createElement('img');

      productImgEl.setAttribute('src', item.img);
      productImgCell.append(productImgEl);

      const productNameCell = document.createElement('td');
      productNameCell.textContent = item.name;

      const productPriceCell = document.createElement('td');
      productPriceCell.textContent = item.price;

      const productDecFactorCell = document.createElement('td');
      productDecFactorCell.textContent = item.decFactor;

      const productCheckCell = document.createElement('td');
      const productCheckInput = document.createElement('input');
      productCheckInput.setAttribute('type', 'checkbox');
      productCheckCell.append(productCheckInput);


      product.append(
        productImgCell,
        productNameCell,
        productPriceCell,
        productDecFactorCell,
        productCheckCell
      );

      productListEl.append(product);
    });

  });

  const shopFormEl = document.querySelector('#shop');

  shopFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const outputEl = e.target.querySelector('textarea');

    const data = [...document.querySelectorAll('table tbody tr:has(input:checked)')]
      .map(el => ({
        name: el.children[1].textContent.trim(),
        price: Number(el.children[2].textContent),
        decFactor: Number(el.children[3].textContent)
      }));

    let output = `Bought furniture: ${data.map(el => el.name).join(', ')} \n`;
    output += `Total price: ${data.reduce((total, el) => total + el.price, 0)} \n`;
    output += `Average decoration factor: ${data.reduce((factor, el) => factor + el.decFactor, 0) / data.length} \n`;


    outputEl.value = output;
  })
}