class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `kenalkan ${this.name} dan dia berumur ${this.age} tahun.`;
    }
}

const person1 = new Person("rick sang babu", 20);
console.log(person1.introduce());

const person2 = new Person("joe raja iblis", 100);
console.log(person2.introduce());
