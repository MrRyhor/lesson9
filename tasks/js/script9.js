function getArrWithFirstLetterOfNames(names) {
    let firstLetterNames = names.map(elemnt => elemnt[0])
    return firstLetterNames
}

let names = ['Ivan', 'john', 'Kate', 'Den', 'Jake', 'Paul', 'Jenifer', 'George']

result1.innerHTML = `[${getArrWithFirstLetterOfNames(names)}]`