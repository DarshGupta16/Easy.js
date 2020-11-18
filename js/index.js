// select and print functions
let selectDemo = select("#selectDemo");
print(selectDemo);
print(selectDemo.innerHTML);

// changeHTML function
changeHTML("#selectDemo", "Changed innerHTML");

// Select All function
let allH6 = selectAll("h6");
for (h6 of allH6) h6.innerHTML = "Changed innerHTML";

// getInputValue and onClick functions
function executeOnClick() {
  let myInput = getInputValue("#printText");
  print(myInput);
}

onClick("#printTextBtn", executeOnClick);
