function Hero(name, level) {
    this.name = name;
    this.level = level;
}

let hero1 = new Hero('Bjorn', 1);
console.log(Object.getPrototypeOf(hero1));

Hero.prototype.greet = function () {
    return `${this.name} says Hello.`;
}

function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
    return `${this.name} attacks with the ${this.weapon}`;
}

Healer.prototype.heal = function () {
    return `${this.name} casts ${this.spell}`;
}

const player1 = new Warrior('Bjorn', 1, 'axe');
const player2 = new Healer('Kanin', 1, 'cure');

player1.attack();
player2.heal();
player1.greet();
player2.greet();
