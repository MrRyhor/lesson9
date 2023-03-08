function createArr(qntOfElements) {
    return new Array(qntOfElements).fill(0)
}

const qntOfElements = parseInt(prompt('Введите кол-во эл-тов массива:'))

result1.innerHTML = `Array fill of Zeroes: <br>[<span>${createArr(qntOfElements)}</span>]`