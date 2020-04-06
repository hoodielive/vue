function copyArrayAndDivideBy2(array)
{
    const output = []

    for (let i = 0; i < array.length; i++)
    {
        output.push(array[i] / 2)
    }
    return output
}

const myArray = [1,2,3]
const result = copyArrayAndDivideBy2(myArray)

// high order
function copyArrayAndManipulate(array, instructions)
{
    const output = []
    for (let i = 0; i < array.length; i++)
    {
        output.push(instructions(array[i]))
    }
    return output
}

function multiplyBy2(input)
{
    return input * 2
}

const result2 = copyArrayAndManipulate([1,2,3], multiplyBy2)
console.log(result2)
