const findTheOldest = function (people) {
    let oldest = people[0]
    let age;
    for (const person of people) {
        if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear()
        else {
            age = person.yearOfDeath - person.yearOfBirth
        }

        if (age > oldest.yearOfDeath - oldest.yearOfBirth) {
            oldest = person
        }
    }
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
