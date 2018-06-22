function ageCalculator(name, yearOfBirth, CurrentYear) {
  var age = CurrentYear - yearOfBirth
  return name + " is " + age + " years old."
}

console.log(ageCalculator("Suzie", 1986, 2018));
console.log(ageCalculator("Jack", 2006, 2018));
console.log(ageCalculator("Ali", 2018, 2018));


/* another way of doing it which I like better

function ageCalculator(name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth
  console.log(name + " is " + age + " years old.");
}

ageCalculator("Suzie", 1986, 2018);
ageCalculator("Jack", 2006, 2018);
ageCalculator("Ali", 2018, 2018) */