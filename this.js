const Mango = {
    color: 'Yellow',
    price: 120,
    weight: 120,
    about() {
        // return 'This mango price is ' + this.price + ' USD';
        return `This mango Color is ${this.color} Name`;
    }
}

console.log(Mango.about());
