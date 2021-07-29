//Library Interface

//Element Factory

function createElement(tag, type, textContent, className, append) {
  tempVariable = document.createElement(tag);
  tempVariable.className = className;
  tempVariable.textContent = textContent;
  if (type) tempVariable.type = type;
  if (append) append.appendChild(tempVariable);
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

function createElementGrid(
  numberOfTags,
  tag,
  type,
  textContent,
  className,
  append
) {
  for (let u = 0; u < numberOfTags; u++) {
    createElement(tag, type, textContent, className, append);
  }
}

//Interface

function cLibrary() {
  const library = document.querySelector('.library');
  createElement('div', '', '', 'library__bookcase', library);
}

function cBookCase() {
  const bookcase = getElement('.library__bookcase');
  createElement('div', '', '', 'bookcase__header', bookcase);
  createElement('div', '', '', 'bookcase__grid', bookcase);
  createElement('div', '', '', 'bookcase__footer', bookcase);
}

function cHeaderFooterElements() {
  const middlelibraryTopBot = getElement(
    '.bookcase__header',
    '.bookcase__footer'
  );
  createElement('input', 'search', '', 'input', middlelibraryTopBot[0]);
  createElement('button', '', '', 'btn btn--search', middlelibraryTopBot[0]);
  createElement('button', '', '', 'btn btn-add', middlelibraryTopBot[1]);
}

function cBookCaseBook() {
  const bookcase = getElement('.bookcase__grid');
  createElementGrid(5, 'div', '', '', 'bookcase__book', bookcase);
}

cLibrary();
cBookCase();
cBookCaseBook();
cHeaderFooterElements();

//
