function createArr(qntOfElements) {
    return new Array(qntOfElements).fill(1)
}

function createNewArr(arrayFillOf1) {
    const halfArr = arrayFillOf1.length / 2
    return arrayFillOf1.fill(7, halfArr)
}

const qntOfElements = parseInt(prompt('Введите кол-во эл-тов массива:'))

const arrayFillOf1 = createArr(qntOfElements)

result1.innerHTML = `Array: <br>[<span>${createNewArr(arrayFillOf1)}</span>]`

