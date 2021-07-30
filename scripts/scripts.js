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

//Library

function books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  };
}

//
