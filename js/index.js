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

// onChange
function executeOnChange() {
  print(getInputValue("#onChangeText"));
}

onChange("#onChangeText", executeOnChange);

// createElem, createTxtNode and addNode
let para = createElem("p");
let node = createTxtNode("This is a new paragraph");

addNode(para, node);

let element = select("#div1");
addNode(element, para);

// addNodeBefore
let para2 = createElem("p");
let node2 = createTxtNode("New para");
addNode(para2, node2);

let element2 = select("#div2");
let referenceNode = select("#p3");

addNodeBefore(element2, para2, referenceNode);

// removeElem
removeElem("#removeElemDemo");
