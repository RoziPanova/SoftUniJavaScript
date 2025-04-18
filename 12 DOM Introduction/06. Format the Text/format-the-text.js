function solve() {
  // TODO

  const inputEl = document.querySelector("#input");
  const outputEL = document.querySelector("#output");

  const sentences = inputEl.value.split(". ");
  const sentPerPar = 3;

  const numberOfPar = Math.ceil(sentences.length / sentPerPar);

  let output = "";

  for (let i = 0; i < numberOfPar; i++) {
    let p = i * sentPerPar;
    output += "<p>";
    output += sentences.slice(p, p + sentPerPar).join(". ");
    output += "</p>";
  }
  outputEL.innerHTML = output;
}
