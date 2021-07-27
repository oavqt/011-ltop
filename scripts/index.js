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
  if (elements.length === 1) {
    return document.querySelector(elements);
  } else {
    for (let u = 0; u < elements.length; u++) {
      let element = document.querySelector(elements[u]);
      elementsArray.push(element);
    }
    return elementsArray;
  }
}

//Interface

function cContainers() {
  const container = document.querySelector('.container');
  createElement('div', '', 'container__left', container);
  createElement('div', '', 'container__middle', container);
  createElement('div', '', 'container__right', container);
}

cContainers();

//
