// interfaces
interface PersonInterface {
  readonly id: number // readonly is can't change or assign the value
  name: string
  isStudent: boolean
  age?: number // ? is mean optional value
}

const person: PersonInterface = {
  id: 2384773822,
  name: 'arief',
  isStudent: true,
  // age:34 // optional field
}

// person.id = 21 // can't change because readonly

// the defferent between type and interface
type Point = string | boolean | number // can accept any type
// interface Points = string // can't to define one value with equal
const p1: Point = 23


// function interface
interface MathFunc {
  (x: number, y: number): number
}

const hasilTambah: MathFunc = (num1, num2) => num1 + num2
const hasilKurang: MathFunc = (num1, num2) => num1 - num2
console.log(hasilTambah(12, 34))

interface FullnameFunc {
  (firstname: string, lastname: string): string
}

const arief: FullnameFunc = (fn, ln) => fn + ln
console.log(arief('arief', 'saifuddien'))