const myLibrary = [];

function Book(name, author, numPages, read, uniqueID) {
  this.name = name;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.uniqueID = uniqueID;
}

function addBookToLibrary(name, author, numPages, read) {
  const newBook = new Book(name, author, numPages, read, crypto.randomUUID());
  myLibrary.push(newBook);
}