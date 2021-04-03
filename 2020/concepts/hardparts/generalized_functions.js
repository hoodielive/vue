
// DRY.

function squaringFunction(num) {
  return console.log(num * num)
}

squaringFunction(10)
squaringFunction(100)
squaringFunction(20)

function copyArrayAndMultiplyBy2(array) {
  const output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2)
  }
  return output;
}

const myArray = [1,2,3]
const result = copyArrayAndMultiplyBy2(myArray)
console.log("The result is: ", result)
