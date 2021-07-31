//Library

//Interface

getElement('.btn--form').addEventListener('click', () => {
  getElement('.bookcase__form').classList.remove('bookcase__form--fade');
  getElement('.bookcase__form').classList.add('bookcase__form--active');
});

getElement('.btn--cancel').addEventListener('click', () => {
  getElement('.bookcase__form').classList.add('bookcase__form--fade');
  getElement('.bookcase__form').classList.remove('bookcase__form--active');
});

getElement('.btn--add').addEventListener('click', addBookToLibrary);

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

function createBookElement() {
  const book = createElement('div', '', 'bookcase__book', '');
  const bookcase = getElement('.bookcase__grid');
  bookcase.appendChild(book);
  createElement('h2', `${this.title}`, 'book__title', book);
  createElement('h3', `${this.author}`, 'book__author', book);
  createElement('p', `${this.description}`, 'book__description', book);
  createElement('span', `${this.genre}`, 'book__genre', book);
  createElement('span', `${this.language}`, 'book__language', book);
  createElement('span', `${this.publisher}`, 'book__publisher', book);
  createElement('span', `${this.date}`, 'book__date', book);
  createElement('span', `${this.ten}`, 'book__ten', book);
  createElement('span', `${this.thirteen}`, 'book__thirteen', book);
  createElement('span', `${this.pages}`, 'book__pages', book);
  console.log(myLibrary.indexOf(this));
  book.setAttribute('data-pos', `${myLibrary.indexOf(this)}`);
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

book.prototype.create = createBookElement;

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

//
