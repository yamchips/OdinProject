const myLibrary = []

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error('You must use the "new" operator to call the constructor.');
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book, library) {
    library.push(book);
}

// fill some data
const book1 = new Book('Harry Potter 1', 'J.K. Rowling', 400, true);
const book2 = new Book('Algorithms', 'Dr Unknown', 800, false);
const book3 = new Book('Game of Thrones', 'George R.R. Martin', 1200, false);

addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);

// display book
// create the head
const heads = ['Id', 'Title', 'Author', 'Pages', 'Read', 'Change Read Status', 'Delete'];
const tableHead = document.querySelector('.library').querySelector('thead');
for (let head of heads) {
    const name = document.createElement('th');
    name.textContent = head;
    tableHead.appendChild(name);
}
// iterate through the library and create rows
const tableBody = document.querySelector('.library').querySelector('tbody');
displayLib();

function createCell(value, bookId, isBtn = false, onClick = null) {
    const cell = document.createElement('td');
    if (isBtn) {
        const btn = document.createElement('button');
        btn.textContent = value;
        btn.dataset.id = bookId;
        btn.classList.add(value.toLowerCase());
        if (onClick) {
            btn.addEventListener('click', onClick);
        }
        cell.appendChild(btn);
    } else {
        cell.textContent = value;
    }
    return cell;
}

// task 4, delete book by id
function deleteBookById(e) {
    let index = myLibrary.findIndex(book => book.id === e.target.dataset.id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
    displayLib();
}

// task 5, toggle book read status
Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleReadStatus(e) {
    let book = myLibrary.find(book => book.id === e.target.dataset.id);
    if (book) {
        book.toggleRead();
    }
    displayLib();
}

function displayLib() {
    tableBody.replaceChildren();
    for (let book of myLibrary) {
        const row = document.createElement('tr');
        Object.values(book).forEach(value => row.appendChild(createCell(value)));
        row.appendChild(createCell('Change', book.id, true, (e) => toggleReadStatus(e)));
        row.appendChild(createCell('Delete', book.id, true, (e) => deleteBookById(e)));
        tableBody.appendChild(row);
    }
}


// task 4, add new book
const addNewBookBtn = document.querySelector('.add-new-book');
const bookDialog = document.querySelector('.newBook');
const submitBtn = document.querySelector('.submit');
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const newPages = document.querySelector('#pages');
const newRead = document.querySelector('#read');
const form = bookDialog.querySelector('form');

// open the dialog modally
addNewBookBtn.addEventListener('click', () => {
    form.reset();
    bookDialog.showModal();
});

// submit button create a Book instance
let newBook = null;
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.checked);
    bookDialog.close();
})

bookDialog.addEventListener('close', () => {
    if (newBook) {
        addBookToLibrary(newBook, myLibrary);
        newBook = null;
        displayLib();
    }
});