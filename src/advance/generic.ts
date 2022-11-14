// generics
// const dataMhs = (data: string[]): string[] => { // string type in params only
//   return new Array().concat(data)
// }

// const getStrArr = dataMhs(['satu', 'dua', 'tiga']) // can be static type only

const dataMhs = <T>(data: T[]): T[] => { // to set same type
  return new Array().concat(data)
}

const getStrArr = dataMhs(['satu', 'dua', 'tiga'])
const getNumArr = dataMhs([1, 2, 3, 4, 5, 6, 7])
const getBoolArr = dataMhs([true, false, false])
const getAnyArr = dataMhs([true, 2, 'string'])
const getArrArr = dataMhs([true, 2, 'string', [12, 34, 231]])

console.log(getAnyArr, getBoolArr, getNumArr, getStrArr, getArrArr)
