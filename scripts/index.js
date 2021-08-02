//Library Interface

//Element Factory

function createElement(tag, textContent, className, append) {
  let tempVariable = document.createElement(tag);
  tempVariable.className = className;
  tempVariable.textContent = textContent;
  if (append) append.appendChild(tempVariable);
  return tempVariable;
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

function cLibrary() {
  const library = document.querySelector('.library');
  createElement('div', '', 'library__bookcase', library);
}

function cBookCase() {
  const bookcase = getElement('.library__bookcase');
  createElement('div', '', 'bookcase__header', bookcase);
  createElement('div', '', 'bookcase__grid', bookcase);
  createElement('div', '', 'bookcase__form', bookcase);
  createElement('div', '', 'bookcase__footer', bookcase);
}

function cHeaderFooter() {
  const middlelibraryTopBot = getElement(
    '.bookcase__header',
    '.bookcase__footer'
  );
  createElement('input', '', 'input input--search', middlelibraryTopBot[0]);
  createElement('button', '', 'btn btn--search', middlelibraryTopBot[0]);
  createElement('button', '', 'btn btn--form', middlelibraryTopBot[1]);
}

function cFormLabel() {
  const form = getElement('.bookcase__form');
  createElement('label', 'Title', 'label label--title', form);
  createElement('label', 'Author', 'label label--author', form);
  createElement('label', 'Description', 'label label--description', form);
  createElement('label', 'Genre', 'label label--genre', form);
  createElement('label', 'Language', 'label label--language', form);
  createElement('label', 'Publisher', 'label label--publisher', form);
  createElement('label', 'Publication date', 'label label--date', form);
  createElement('label', 'ISBN-10', 'label label--ten', form);
  createElement('label', 'ISBN-13', 'label label--thirteen', form);
  createElement('label', 'Pages', 'label label--pages', form);
  createElement('div', '', 'form__buttons', form);
}

function cFormInput() {
  const label = getElement(
    '.label--title',
    '.label--author',
    '.label--description',
    '.label--genre',
    '.label--language',
    '.label--publisher',
    '.label--date',
    '.label--ten',
    '.label--thirteen',
    '.label--pages',
    '.form__buttons'
  );
  createElement('input', '', 'input input--title', label[0]);
  createElement('input', '', 'input input--author', label[1]);
  createElement('input', '', 'input input--description', label[2]);
  createElement('input', '', 'input input--genre', label[3]);
  createElement('input', '', 'input input--language', label[4]);
  createElement('input', '', 'input input--publisher', label[5]);
  createElement('input', '', 'input input--date', label[6]);
  createElement('input', '', 'input input--ten', label[7]);
  createElement('input', '', 'input input--thirteen', label[8]);
  createElement('input', '', 'input input--pages', label[9]);
  createElement('button', 'Cancel', 'btn btn--cancel', label[10]);
  createElement('button', 'Add', 'btn btn--add', label[10]);
}

function cAttributes() {
  const input = getElement(
    '.input--search',
    '.input--title',
    '.input--author',
    '.input--description',
    '.input--genre',
    '.input--language',
    '.input--publisher',
    '.input--date',
    '.input--ten',
    '.input--thirteen'
  );

  {
    for (let u = 0; u < input.length; u++) {
      input[u].type = 'text';
    }

    getElement('.input--pages').setAttribute('type', 'number');
    getElement('.input--search').setAttribute('placeholder', 'Search...');
  }
}

cLibrary();
cBookCase();
cHeaderFooter();
cFormLabel();
cFormInput();
cAttributes();

//
