function solve() {
  //TODO
  const input = document.querySelector("#text").value.toLowerCase().split(" ");
  const namingConvention = document
    .querySelector("#naming-convention")
    .value.toLowerCase()
    .trim();
  const resultEl = document.querySelector("#result");

  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  switch (namingConvention) {
    case "camel case":
      resultEl.textContent =
        input[0] + input.slice(1).map(capitalizeWord).join("");
      break;
    case "pascal case":
      resultEl.textContent = input.map(capitalizeWord).join("");
      break;
    default:
      resultEl.textContent = "Error!";
      break;
  }
}
