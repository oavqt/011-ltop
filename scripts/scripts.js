//Library

//Interface

function createBookElement() {
  const bookcase = getElement('.bookcase__grid');
  const book = createElement('div', '', 'bookcase__book', '');
  bookcase.appendChild(book);

  const miscellaneous = createElement('div', '', 'bookcase__miscellaneous');

  let element = [
    createElement('div', '', 'bookcase__title', book),
    createElement('div', '', 'bookcase__author', book),
    createElement('div', '', 'bookcase__description', book),
    book.appendChild(miscellaneous),
    createElement('div', '', 'bookcase__genre', miscellaneous),
    createElement('div', '', 'bookcase__language', miscellaneous),
    createElement('div', '', 'bookcase__publisher', miscellaneous),
    createElement('div', '', 'bookcase__date', miscellaneous),
    createElement('div', '', 'bookcase__ten', miscellaneous),
    createElement('div', '', 'bookcase__thirteen', miscellaneous),
    createElement('div', '', 'bookcase__pages', miscellaneous),
    createElement('button', 'Delete', 'btn btn--delete', miscellaneous),
    createElement('button', '', 'btn btn--book', book),
    book,
  ];

  return element;
}

function createBookElementElement() {
  const element = createBookElement();

  createElement('h2', `${this.title}`, 'book__title', element[0]);
  createElement('h3', `${this.author}`, 'book__author', element[1]);
  createElement('p', `${this.description}`, 'book__description', element[2]);
  createElement('span', `${this.genre}`, 'book__genre', element[4]);
  createElement('span', `${this.language}`, 'book__language', element[5]);
  createElement('span', `${this.publisher}`, 'book__publisher', element[6]);
  createElement('span', `${this.date}`, 'book__date', element[7]);
  createElement('span', `${this.ten}`, 'book__ten', element[8]);
  createElement('span', `${this.thirteen}`, 'book__thirteen', element[9]);
  createElement('span', `${this.pages}`, 'book__pages', element[10]);

  element[element.length - 1].setAttribute(
    'data-pos',
    `${myLibrary.indexOf(this)}`
  );
}

function clearForm() {
  const input = getElement(
    '.input--title',
    '.input--author',
    '.input--description',
    '.input--genre',
    '.input--language',
    '.input--publisher',
    '.input--date',
    '.input--ten',
    '.input--thirteen',
    '.input--pages'
  );

  input[0].value = '';
  input[1].value = '';
  input[2].value = '';
  input[3].value = '';
  input[4].value = '';
  input[5].value = '';
  input[6].value = '';
  input[7].value = '';
  input[8].value = '';
  input[9].value = '';

  getElement('.bookcase__form').classList.add('bookcase__form--fade');
  getElement('.bookcase__form').classList.remove('bookcase__form--active');
}

function btnScroll(e) {
  if (
    e.target &&
    e.target.matches('button') &&
    e.target.className.includes('btn btn--book' || 'btn btn--book--active')
  ) {
    btnScrollDiv(e.target);
  }
}

function btnScrollDiv(btn) {
  const miscellaneous = [
    ...document.querySelectorAll('.bookcase__miscellaneous'),
  ];
  let top;
  let addRemove;

  if (btn.className.includes('btn--book--active'))
    (top = 0), (addRemove = 'remove');
  else (top = 300), (addRemove = 'add');

  miscellaneous.forEach((div) => {
    if (btn.previousSibling === div) {
      div.scrollTo({
        top: `${top}`,
        behavior: 'smooth',
      });
    }
  });

  btn.classList[`${addRemove}`]('btn--book--active');
}

//Library

let myLibrary = [];

function book(
  title,
  author,
  description,
  genre,
  language,
  publisher,
  date,
  ten,
  thirteen,
  pages
) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.genre = genre;
  this.language = language;
  this.publisher = publisher;
  this.date = date;
  this.ten = ten;
  this.thirteen = thirteen;
  this.pages = pages;
  this.info = () => {
    return `${this.title}, ${this.author}, ${this.description}, ${this.genre}, ${this.language}, ${this.publisher}, ${this.date}, ${this.ten}, ${this.thirteen}, ${this.pages}`;
  };
}

//create

book.prototype.create = createBookElementElement;

function addBookToLibrary() {
  const input = getElement(
    '.input--title',
    '.input--author',
    '.input--description',
    '.input--genre',
    '.input--language',
    '.input--publisher',
    '.input--date',
    '.input--ten',
    '.input--thirteen',
    '.input--pages'
  );

  const title = input[0].value;
  const author = input[1].value;
  const description = input[2].value;
  const genre = input[3].value;
  const language = input[4].value;
  const publisher = input[5].value;
  const date = input[6].value;
  const ten = input[7].value;
  const thirteen = input[8].value;
  const pages = input[9].value;

  if (
    title !== '' &&
    author !== '' &&
    description !== '' &&
    genre !== '' &&
    language !== '' &&
    pages !== ''
  ) {
    myLibrary.push(
      new book(
        title,
        author,
        description,
        genre,
        language,
        publisher,
        date,
        ten,
        thirteen,
        pages
      )
    );

    myLibrary[myLibrary.length - 1].create();

    clearForm();
  }
}

//Library Events

getElement('.btn--form').addEventListener('click', () => {
  getElement('.bookcase__form').classList.remove('bookcase__form--fade');
  getElement('.bookcase__form').classList.add('bookcase__form--active');
});

getElement('.btn--cancel').addEventListener('click', () => {
  getElement('.bookcase__form').classList.add('bookcase__form--fade');
  getElement('.bookcase__form').classList.remove('bookcase__form--active');
});

getElement('.btn--add').addEventListener('click', addBookToLibrary);

document.body.addEventListener('click', btnScroll, false);

//
