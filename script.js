const myLibrary = [];

function Book(name, author, numPages, read) {
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.uniqueID = crypto.randomUUID();
}

function addBookToLibrary(name, author, numPages, read) {
  const newBook = new Book(name, author, numPages, read);
  myLibrary.push(newBook);
  renderLibrary();
}

function renderLibrary() {
  
}

addBookToLibrary("The amazing spider-man", "Stan Lee", 200, true);
addBookToLibrary("Poopy", "Stan Lee", 200, true);
addBookToLibrary("Gangsters say whaaaaat?", "Stan Lee", 50, false);