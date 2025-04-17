const myLibrary = [];
const addBookButton = document.querySelector('.add-book-button');
const dialog = document.querySelector('dialog')

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.uniqueID = crypto.randomUUID();
}

function renderBook(newBook) {
  const bookDisplay = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h4");
  const bookRead = document.createElement("p");
  const numOfPages = document.createElement("p");

  bookTitle.classList.add('book-title')
  bookAuthor.classList.add('book-author')
  bookRead.classList.add('book-read')
  numOfPages.classList.add('book-num-of-pages')
  bookDisplay.classList.add('book-display')

  bookTitle.textContent = newBook.title;
  bookAuthor.textContent = newBook.author;
  bookRead.textContent = newBook.read;
  numOfPages.textContent = newBook.numPages;

  bookDisplay.appendChild(bookTitle);
  bookDisplay.appendChild(bookAuthor);
  bookDisplay.appendChild(bookRead);
  bookDisplay.appendChild(numOfPages);
  bookDisplay.classList.add(newBook.uniqueID);

  document.body.appendChild(bookDisplay);
}

function addBookToLibrary(title, author, numPages, read) {
  const newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
  renderBook(newBook);
}

// addBookToLibrary("The amazing spider-man", "Stan Lee", "200", "true");
// addBookToLibrary("Poopy", "Stan Lee", "200", "true");
// addBookToLibrary("Gangsters say whaaaaat?", "Stan Lee", "50", "false");

// console.log(addBookButton)

addBookButton.addEventListener('click', function() {
  dialog.showModal();
});