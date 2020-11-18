function select(query) {
  return document.querySelector(query);
}

function selectAll(query) {
  return document.querySelectorAll(query);
}

function print(text) {
  return console.log(text);
}

function getInputValue(query) {
  return document.querySelector(query).value;
}

function onClick(query, functionToExecute) {
  return document
    .querySelector(query)
    .addEventListener("click", functionToExecute);
}

function onChange(query, functionToExecute) {
  return document
    .querySelector(query)
    .addEventListener("change", functionToExecute);
}

function changeHTML(query, text) {
  return (document.querySelector(query).innerHTML = text);
}

function changeHTMLall(query, text) {
  let queries = document.querySelectorAll(query);
  for (let i = 0; i < queries.length; i++) {
    tag.innerHTML = text;
  }
}
