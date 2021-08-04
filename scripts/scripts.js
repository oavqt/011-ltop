//Library

//Interface

function createBookElement(read) {
  const bookcase = getElement('.bookcase__grid');
  const book = createElement('div', '', 'bookcase__book', '');
  const miscellaneous = createElement('div', '', 'bookcase__miscellaneous');

  bookcase.appendChild(book);

  let btn;
  if (read === 'yes')
    btn = createElement('button', '', 'btn btn--read btn--read--active', book);
  else btn = createElement('button', '', 'btn btn--read', book);

  let element = [
    btn,
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
  const element = createBookElement(this.read);

  createElement('h2', `${this.title}`, 'book__title', element[1]);
  createElement('h3', `${this.author}`, 'book__author', element[2]);
  createElement('p', `${this.description}`, 'book__description', element[3]);
  createElement('span', `${this.genre}`, 'book__genre', element[5]);
  createElement('span', `${this.language}`, 'book__language', element[6]);
  createElement('span', `${this.publisher}`, 'book__publisher', element[7]);
  createElement('span', `${this.date}`, 'book__date', element[8]);
  createElement('span', `${this.ten}`, 'book__ten', element[9]);
  createElement('span', `${this.thirteen}`, 'book__thirteen', element[10]);
  createElement('span', `${this.pages}`, 'book__pages', element[11]);

  element[element.length - 1].setAttribute(
    'data-pos',
    `${myLibrary.indexOf(this)}`
  );

  this.data = myLibrary.indexOf(this);
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

function btn(e) {
  if (
    e.target &&
    e.target.matches('button') &&
    e.target.className.includes('btn btn--book' || 'btn btn--book--active')
  ) {
    scrollBook(e.target);
  } else if (
    e.target &&
    e.target.matches('button') &&
    e.target.className.includes('btn btn--delete')
  ) {
    deleteBook(e.target);
  } else if (
    e.target &&
    e.target.matches('button') &&
    e.target.className.includes('btn btn--read')
  ) {
    read(e.target);
  }
}

function scrollBook(btn) {
  const miscellaneous = [
    ...document.querySelectorAll('.bookcase__miscellaneous'),
  ];

  let addRemove;
  let top;

  if (btn.className.includes('btn--book--active'))
    (top = 0), (addRemove = 'remove');
  else (top = 1000), (addRemove = 'add');

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

function deleteBook(btn) {
  const bookcase = getElement('.bookcase__grid');
  const book = [...document.querySelectorAll('.bookcase__book')];

  book.forEach((book) => {
    if (book.contains(btn)) {
      myLibrary.splice(book.dataset['pos'], 1);
    }
    book.remove();
  });

  while (bookcase.firstChild) {
    bookcase.remove(bookcase.lastChild);
  }

  for (let u = 0; u < myLibrary.length; u++) {
    myLibrary[u].data = [u].toString();
    myLibrary[u].create();
  }

  store();
}

function read(btn) {
  const book = [...document.querySelectorAll('.bookcase__book')];

  let read;
  if (btn.className.includes('btn--read--active'))
    btn.classList.remove('btn--read--active'), (read = 'no');
  else btn.classList.add('btn--read--active'), (read = 'yes');

  book.forEach((book) => {
    if (book.contains(btn)) {
      for (let u = 0; u < myLibrary.length; u++) {
        if (myLibrary[u].data === +book.dataset['pos']) {
          myLibrary[u].read = read;
        }
      }
    }
  });

  store();
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
  pages,
  data,
  read
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
  this.data = data;
  this.read = read;
  this.info = () => {
    return `${this.title}, ${this.author}, ${this.description}, ${this.genre}, ${this.language}, ${this.publisher}, ${this.date}, ${this.ten}, ${this.thirteen}, ${this.pages}`;
  };
}

//Create

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
  const data = '';
  const read = 'no';

  if (
    title !== '' &&
    author !== '' &&
    description !== '' &&
    genre !== '' &&
    language !== '' &&
    publisher !== '' &&
    date !== '' &&
    ten !== '' &&
    thirteen !== '' &&
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
        pages,
        data,
        read
      )
    );

    myLibrary[myLibrary.length - 1].create();

    clearForm();

    store();
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

document.body.addEventListener('click', btn, false);

// Local Storage

function isStorageAvailable(type) {
  let storage;

  try {
    storage = window[type];
    let temp = 'yep';
    storage.setItem(temp, temp);
    storage.removeItem(temp);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      (e.code === 22 ||
        e.code === 1014 ||
        e.name === 'QuotaExceededError' ||
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      storage &&
      storage.length !== 0
    );
  }
}

function store() {
  if (isStorageAvailable('localStorage')) {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  } else console.log('noLocalStorage');
}

function getLocaleStorage() {
  let unparseMyLibrary = localStorage.getItem('myLibrary');
  let parseMyLibrary = JSON.parse(unparseMyLibrary);

  if (parseMyLibrary === null) return;

  for (let u = 0; u < parseMyLibrary.length; u++) {
    myLibrary.push(
      new book(
        parseMyLibrary[u].title,
        parseMyLibrary[u].author,
        parseMyLibrary[u].description,
        parseMyLibrary[u].genre,
        parseMyLibrary[u].language,
        parseMyLibrary[u].publisher,
        parseMyLibrary[u].date,
        parseMyLibrary[u].ten,
        parseMyLibrary[u].thirteen,
        parseMyLibrary[u].pages,
        parseMyLibrary[u].data,
        parseMyLibrary[u].read
      )
    );

    myLibrary[myLibrary.length - 1].create();
  }
}

getLocaleStorage();

//
