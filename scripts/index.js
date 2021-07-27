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

function cMiddleContainer() {
  const middle = getElement('.container__middle');
  createElement('div', '', 'container__middle__top', middle);
  createElement('div', '', 'container__middle__mid', middle);
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

cContainers();
cMiddleContainer();
cMiddleContainerTopBot();

//
