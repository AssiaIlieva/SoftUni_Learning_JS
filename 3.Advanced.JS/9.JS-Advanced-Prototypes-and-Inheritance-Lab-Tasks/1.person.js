function createPerson(firstName, lastName) {
  const result = {
    firstName,
    lastName,
  };
  Object.defineProperty(result, "fullName", {
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      const names = value.split(" ");
      if (names.length === 2) {
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
  });
  return result;
}
let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName); //Tesla
