// function
const helloSay = (age: number, my: string): string => {
  return `hello, iam ${my}, iam ${age} years old`
}

function greating(message: string | boolean | number): void { // noting to return with void
  console.log(message)
  return
}

helloSay(23, 'arief')
greating('this void return')