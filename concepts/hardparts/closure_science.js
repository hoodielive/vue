function createFunction()
{
    function multiplyBy2(num)
    {
        return num * 2
    }
    return multiplyBy2
}

const generatedFunc = createFunction()

console.log(generatedFunc)

const result = generatedFunc(3)
console.log(result)

function outer()
{
    let counter = 0;
    function incrementCounter()
    {
        counter++
    }
    incrementCounter()
}

outer()
