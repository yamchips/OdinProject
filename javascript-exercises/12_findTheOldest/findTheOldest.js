const findTheOldest = function(people) {
    function getAge(person) {
        person.yearOfDeath ??= (new Date()).getFullYear();
        return person.yearOfDeath - person.yearOfBirth;
        // if ('yearOfDeath' in person) {
        //     return person.yearOfDeath - person.yearOfBirth;
        // } else {
        //     return (new Date()).getFullYear() - person.yearOfBirth;
        // }
    }
    people.sort((a, b) => getAge(b) - getAge(a));
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
