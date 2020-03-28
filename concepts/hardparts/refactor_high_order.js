function copyArrayAndManipulate(array, instructions)
{
    const output = []
    for (let i=0; i < array.length; i++)
    {
        output.push(instructions(array[i]))
    }
    return output
}
const result = copyArrayAndManipulate([1,2,3], input => input * 2)

console.log(result)
