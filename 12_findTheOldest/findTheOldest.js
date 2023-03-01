const findTheOldest = function(peopleArray) {
  peopleArray.forEach(person => {
    person.yearOfDeath ??= new Date().getFullYear();
  });
  peopleArray.sort(function(a, b){return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)});
  return peopleArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
