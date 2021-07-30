//Library

//Interface

getElement('.btn--form').addEventListener('click', addToForm);

function addToForm() {
  getElement('.bookcase__footer').classList.toggle('bookcase__footer--active');
  getElement('.bookcase__form').classList.toggle('bookcase__form--active');
  getElement('.btn--form').classList.toggle('btn--form--active');
}

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
