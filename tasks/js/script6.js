function getElementsMoreThanFirstMultuplyBy2(arr) {
    arr.forEach((element, index, arrRef) => {
        if (element > arrRef[0]) arrRef[index] *= 2
    })
    return arr
}

let arr = [2, -8, 3, 4, -12, 8, 14, -5, 5, -2, 6]

result1.innerHTML = `[${getElementsMoreThanFirstMultuplyBy2(arr)}]`
