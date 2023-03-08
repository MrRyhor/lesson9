function getMultipleOfPositiveNum(arr) {
    let multip = 1
    for (const element of arr) {
        if (element > 0) multip *= element
    }
    return multip
}

let arr = [2, -8, 1, 4, -12, 8, 14, -5, 1, -2, 6]

result1.innerHTML = `Multiplication = ${getMultipleOfPositiveNum(arr)}`
