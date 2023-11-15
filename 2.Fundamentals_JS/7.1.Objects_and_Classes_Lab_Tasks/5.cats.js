function catCreator(array){
    class Cat{
        constructor(name, age){
            this.name = name,
            this.age = age 
            }
        meow()  {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let element of array){
        let [cat, age] = element.split(' ');
        let tempCat = new Cat(cat, age);
        tempCat.meow();

    }
}
catCreator(['Candy 1', 'Poppy 3', 'Nyx 2'])