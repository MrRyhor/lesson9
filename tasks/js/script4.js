function getElementsMoreThan100(arr) {
    let result = ''
    for (const element of arr) {
        if (element > 100) result += `<p>${element}</p>`
    }
    return result
}

let arr = [2, 45, 112, 456, 65, 512, 34, 5, 934, 4, 6]

result1.innerHTML = getElementsMoreThan100(arr)