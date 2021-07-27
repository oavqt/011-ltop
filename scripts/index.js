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

function createElementGrid(numberOfTags, tag, textContent, className, append) {
  for (let u = 0; u < numberOfTags; u++) {
    createElement(tag, textContent, className, append);
  }
}

//Interface

function cContainers() {
  const container = document.querySelector('.container');
  createElement('div', '', 'container__left', container);
  createElement('div', '', 'container__middle', container);
  createElement('div', '', 'container__right', container);
}

function cMiddleContainer() {
  const middle = getElement('.container__middle');
  createElement('div', '', 'container__middle__top', middle);
  createElement('div', '', 'container__middle__bookcase', middle);
  createElement('div', '', 'container__middle__bot', middle);
}

function cMiddleContainerTopBot() {
  const middleContainerTopBot = getElement(
    '.container__middle__top',
    '.container__middle__bot'
  );
  createElement(
    'div',
    '',
    'container__middle__top__temp',
    middleContainerTopBot[0]
  );
  createElement(
    'div',
    '',
    'container__middle__bot__temp',
    middleContainerTopBot[1]
  );
}

function cMiddleContainerBookcase() {
  const bookcase = getElement('.container__middle__bookcase');
  createElementGrid(
    69,
    'div',
    '',
    'container__middle__bookcase__book',
    bookcase
  );
}

cContainers();
cMiddleContainer();
cMiddleContainerTopBot();
cMiddleContainerBookcase();

//
