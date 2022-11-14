// classes
class PersonCall {

  // properties
  name: string // anywhere can be access || public name
  // protected name: string // only can use in this class and extended class with this
  private age: number // only can use in this class
  // age: number
  tempat: any

  // main value of constract
  constructor(n: string, a: number, t: string) {
    this.name = n
    this.age = a
    this.tempat = t
  }

  // method
  sayHello(): string {
    return `hi, iam ${this.name} from ${this.tempat}, iam ${this.age} years old`
  }
}

const ariefsaif = new PersonCall('arief', 23, 'jepara')
const umar = new PersonCall('umar', 21, 'jogja')

console.log(ariefsaif.sayHello())
console.log(ariefsaif.name)
// console.log(ariefsaif.age) // can't be access because private property

console.log(umar)

interface Mhs {
  name: string
  address: string
  age: number
  greatting(): string
}

class Prs implements Mhs {

  name: string
  address: string
  age: number

  constructor(na: string, ad: string, ag: number) {
    this.name = na
    this.address = ad
    this.age = ag
  }

  greatting(): string {
    return `hi, iam ${this.name} from ${this.address}, iam ${this.age} years old`
  }
}

class Women extends Prs {
  gender: boolean

  // override
  constructor(na: string, ad: string, ag: number, ge: boolean) {
    super(na, ad, ag) // super property getting from Prs class
    this.gender = ge
  }

  add(): string {
    return this.address
  }
}

const omar = new Prs('omar', 'jawa', 23)
const qomariyah = new Women('qomariyah', 'jambi', 23, false)

console.log(omar.greatting())
console.log(qomariyah.greatting())
console.log(qomariyah.add())