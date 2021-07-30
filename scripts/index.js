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
  createElement('div', '', '', 'bookcase__form', bookcase);
  createElement('div', '', '', 'bookcase__footer', bookcase);
}

function cHeaderFooter() {
  const middlelibraryTopBot = getElement(
    '.bookcase__header',
    '.bookcase__footer'
  );
  createElement(
    'input',
    'search',
    '',
    'input input--search',
    middlelibraryTopBot[0]
  );
  createElement('button', '', '', 'btn btn--search', middlelibraryTopBot[0]);
  createElement('button', '', '', 'btn btn--form', middlelibraryTopBot[1]);
}

function cBookCaseBook() {
  const bookcase = getElement('.bookcase__grid');
  createElementGrid(5, 'div', '', '', 'bookcase__book', bookcase);
}

function cFormLabel() {
  const form = getElement('.bookcase__form');
  createElement('label', '', 'Title', 'label label--title', form);
  createElement('label', '', 'Author', 'label label--author', form);
  createElement('label', '', 'Description', 'label label--description', form);
  createElement('label', '', 'Genre', 'label label--genre', form);
  createElement('label', '', 'Pages', 'label label--pages', form);
  createElement('label', '', '', 'label label--buttons', form);
}

function cFormInput() {
  const label = getElement(
    '.label--title',
    '.label--author',
    '.label--description',
    '.label--genre',
    '.label--pages',
    '.label--buttons'
  );
  createElement('input', 'text', '', 'input input--title', label[0]);
  createElement('input', 'text', '', 'input input--author', label[1]);
  createElement('input', 'text', '', 'input input--description', label[2]);
  createElement('input', 'text', '', 'input input--genre', label[3]);
  createElement('input', 'number', '', 'input input--pages', label[4]);
  createElement('button', '', 'Cancel', 'btn btn--cancel', label[5]);
  createElement('button', '', 'Add', 'btn btn--add', label[5]);
}

cLibrary();
cBookCase();
cBookCaseBook();
cHeaderFooter();
cFormLabel();
cFormInput();

//
