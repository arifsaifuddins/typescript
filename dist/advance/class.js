"use strict";
// classes
class PersonCall {
    // main value of constract
    constructor(n, a, t) {
        this.name = n;
        this.age = a;
        this.tempat = t;
    }
    // method
    sayHello() {
        return `hi, iam ${this.name} from ${this.tempat}, iam ${this.age} years old`;
    }
}
const ariefsaif = new PersonCall('arief', 23, 'jepara');
const umar = new PersonCall('umar', 21, 'jogja');
console.log(ariefsaif.sayHello());
console.log(ariefsaif.name);
// console.log(ariefsaif.age) // can't be access because private property
console.log(umar);
class Prs {
    constructor(na, ad, ag) {
        this.name = na;
        this.address = ad;
        this.age = ag;
    }
    greatting() {
        return `hi, iam ${this.name} from ${this.address}, iam ${this.age} years old`;
    }
}
class Women extends Prs {
    // override
    constructor(na, ad, ag, ge) {
        super(na, ad, ag); // super property getting from Prs class
        this.gender = ge;
    }
    add() {
        return this.address;
    }
}
const omar = new Prs('omar', 'jawa', 23);
const qomariyah = new Women('qomariyah', 'jambi', 23, false);
console.log(omar.greatting());
console.log(qomariyah.greatting());
console.log(qomariyah.add());
