//Library Interface

// Element Factory

function createElement(tag, textContent, className, append) {
  tempVariable = document.createElement(tag);
  tempVariable.className = className;
  tempVariable.textContent = textContent;
  if (append) {
    append.appendChild(tempVariable);
  }
}

function getElement(...elements) {
  let elementsArray = [];
  for (let u = 0; u <= elements.length; u++) {
    let element = document.querySelector(elements[u]);
    elementsArray.push(element);
  }
  return elementsArray;
}

//Interface

//
