function getArrWithNumStartsA(autoNumList) {
    let autoNumListStartsA = []
    autoNumList.forEach(element => {
        if (element[0] === 'A') autoNumListStartsA.push(element)
    })
    return autoNumListStartsA
}

let autoNumList = ['AA2345AA', 'BK1213BB', 'AT4556KT', 'CB3243AB', 'AE1214EA', 'BK5678BK', 'AT4321BK']

result1.innerHTML = getArrWithNumStartsA(autoNumList)