function solve() {
  const outputEl = document.querySelector("#output");

  const tHeadRow = document.querySelector("table thead tr");
  const tBoduRow = document.querySelectorAll("table tbody tr");

  const checkedInputElements = [...tHeadRow.children]
    .map((th, i) => ({
      el: th.children[0],
      name: th.children[0].getAttribute("name"),
      index: i,
    }))
    .filter((obj) => obj.el.checked);

  const outputData = [...tBoduRow].map((row) => {
    return checkedInputElements.reduce((acc, input) => {
      acc[input.name] = row.children[input.index].textContent;
      return acc;
    }, {});
  });

  outputEl.value=JSON.stringify(outputData);
}
