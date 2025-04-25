const myLibrary = [];
const addBookButton = document.querySelector('.add-book-button');
const dialog = document.querySelector('dialog')
const submitForm = document.querySelector('.submit-form');
const form = document.querySelector('form');
const contentWrapper = document.querySelector('.content-wrapper');

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.uniqueID = crypto.randomUUID();
}

Book.prototype.changeReadStatus = function() {
  this.read = !this.read;
};

function renderBook(newBook) {
  const bookDisplay = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h4");
  const bookRead = document.createElement("button");
  const numOfPages = document.createElement("p");
  const deleteButton = document.createElement("button");

  // By default the button's type is 'submit' so we have to change it to just button
  bookRead.type = "button";

  bookTitle.classList.add('book-title');
  bookAuthor.classList.add('book-author');
  bookRead.classList.add('book-read');
  numOfPages.classList.add('book-num-of-pages');
  bookDisplay.classList.add('book-display');
  deleteButton.classList.add('delete-book-button');
  if (newBook.read === true) {
    bookRead.classList.add('has-read');
    bookRead.textContent = "Read";
  }
  else {
    bookRead.classList.add('not-read');
    bookRead.textContent = "Not Read";
  }

  bookAuthor.textContent = newBook.author;
  bookTitle.textContent = newBook.title;
  numOfPages.textContent = newBook.numPages;
  deleteButton.textContent = 'Delete Book';

  bookDisplay.appendChild(bookTitle);
  bookDisplay.appendChild(bookAuthor);
  bookDisplay.appendChild(bookRead);
  bookDisplay.appendChild(numOfPages);
  bookDisplay.appendChild(deleteButton);
  bookDisplay.setAttribute("data-unique-id", newBook.uniqueID);

  contentWrapper.appendChild(bookDisplay);
}

function addBookToLibrary(title, author, numPages, read) {
  const newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
  renderBook(newBook);
}

// addBookToLibrary("The amazing spider-man", "Stan Lee", "200", "true");
// addBookToLibrary("Poopy", "Stan Lee", "200", "true");
// addBookToLibrary("Gangsters say whaaaaat?", "Stan Lee", "50", "false");

addBookButton.addEventListener('click', function() {
  dialog.showModal();
});

submitForm.addEventListener('click', function(event) {
  const input_book_name = document.querySelector('input[id="book_name"]');
  const input_author_name = document.querySelector('input[id="author_name"]');
  const input_number = document.querySelector('input[id="num_of_pages"]');
  const input_read = document.querySelector('input[type="checkbox"]');

  console.log(input_read.checked)

  addBookToLibrary(
    input_book_name.value, 
    input_author_name.value, 
    input_number.value, 
    input_read.checked);

  event.preventDefault();
  form.reset();
  dialog.close();
});

// // TODO: I need to use event delegation to get the book we are trying to delete
//? First I need to add the listener to the body

// Finds the book that needs to be deleted
// First deletes it in the dom then in the `myLibrary` array

document.body.addEventListener('click', function(event) {
    console.log(event);
    if (event.target.matches(".delete-book-button")) {
      const divId = event.target.parentNode.dataset.uniqueId;
      const deleteElement = document.querySelector(`[data-unique-id="${divId}"]`);
      deleteElement.remove();
      for (let index = 0; index < myLibrary.length; index++) {
        if (divId === myLibrary[index].uniqueID) {
          myLibrary.splice(index, 1);
          break;
        }
      }
    }
    else if (event.target.matches(".book-read")) {
      const divId = event.target.parentNode.dataset.uniqueId;
      for (let index = 0; index < myLibrary.length; index++) {
        if (divId === myLibrary[index].uniqueID) {
          const book = myLibrary[index];
          console.log(book);
          book.changeReadStatus();
          if (book.read === true) {
            event.target.classList.remove('not-read');
            event.target.classList.add('has-read');
            event.target.textContent = "Read";
          }
          else {
            event.target.classList.remove('has-read');
            event.target.classList.add('not-read');
            event.target.textContent = "Not Read";
          }
          console.log(book);
          break;
        }
      }
    }

});


// // TODO: Then I need to use event.target.data-unique-ID (I do not know if this is the right syntax)
// // TODO: Then use a for loop that loops through the library array and finds the object with the specific data-unique-ID
// // TODO: To do the above we need to use spilce because it modifies the original array
// // TODO: While using the for loop we would need to keep track of the array index so we can use it in splice
// // TODO: Somewhere in here we need to delete it from the DOM

// addBookToLibrary("DELETE", "Stan Lee", "203", "true");
// addBookToLibrary("Nah", "Stan Lee", "203", "true");