function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error('You must use the "new" operator to call the constructor.');
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        if (read) {
            return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, already read';
        } else {
            return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, not read yet';
        }
    }
}

const Hobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, true);
console.log(Hobbit.info());

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function () {
    console.log(`Hello, I am ${this.name}!`)
}

function Player(name, marker) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.name = name;
    this.marker = marker;
    // this.sayName = function () {
    //     console.log(this.name)
    // };
}

// Why not just define this function in Player?
Player.prototype.sayHello = function () {
    console.log('Hello, I am a player!');
}

Player.prototype.getMarker = function () {
    console.log(`My marker is ${this.marker}`);
}

console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype);

// make Player objects inherit from Person
Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log(Object.getPrototypeOf(Player.prototype) === Person.prototype);

const player1 = new Player('harry', 'X');
const player2 = new Player('steve', 'O');

player1.sayName();
player2.sayName();

player1.getMarker();
player2.getMarker();

console.log(`Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2) is ${Object.getPrototypeOf(player1) === Object.getPrototypeOf(player2)}`);

console.log(`Object.getPrototypeOf(player1) === Player.prototype is ${Object.getPrototypeOf(player1) === Player.prototype}`);

// console.log(`Object.getPrototypeOf(player1.prototype) === Object.getPrototypeOf(player2.prototype) is ${Object.getPrototypeOf(player1.prototype) === Object.getPrototypeOf(player2.prototype)}`);

console.log(`Object.getPrototypeOf(Player.prototype) === Object.getPrototypeOf(Book.prototype) is ${Object.getPrototypeOf(Player.prototype) === Object.getPrototypeOf(Book.prototype)}`);

console.log(`Object.getPrototypeOf(Player.prototype) === Object.prototype is ${Object.getPrototypeOf(Player.prototype) === Object.prototype}`);

console.log(`Object.getPrototypeOf(Player) === Object.getPrototypeOf(Book) is ${Object.getPrototypeOf(Player) === Object.getPrototypeOf(Book)}`);

console.log(`Object.getPrototypeOf(Player) === Function.prototype is ${Object.getPrototypeOf(Player) === Function.prototype}`);

console.log(`Object.getPrototypeOf(Player) === Object.prototype is ${Object.getPrototypeOf(Player) === Object.prototype}`);

console.log(`Object.getPrototypeOf(Function.prototype) === Object.prototype is ${Object.getPrototypeOf(Function.prototype) === Object.prototype}`);