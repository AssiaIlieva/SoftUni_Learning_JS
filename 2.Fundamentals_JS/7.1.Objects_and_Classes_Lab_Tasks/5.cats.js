function catCreator(array){
    class Cat{
        constructor(name, age){
            this.name = name,
            this.age = age 
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            }
        }
    }
}