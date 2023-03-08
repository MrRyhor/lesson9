function getArrWithTaxes(prices) {
    const tax = 0.2
    let taxes = prices.map(element => element * tax)
    return taxes
}

let prices = [1230, 3400, 960, 700, 5200, 1870, 450, 570, 6700, 720]

result1.innerHTML = `[${getArrWithTaxes(prices)}]`
