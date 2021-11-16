class Fruit {

    constructor(name) {
        this.name = name;
    }

    fol() {
        console.log(this.name + ' Is too much tasty');
    }

    static jackfruit() {
        console.log('jackfruit is very pupular Fruit')
    }
}

let add = new Fruit('Mango');
add.fol();

Fruit.jackfruit();
