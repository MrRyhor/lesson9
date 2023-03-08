function getArrWithDiscounPrices(prices) {
    const discountTax = 1.3
    prices.forEach((element, index, arrRef) => {
        if (element > 1000) arrRef[index] = (arrRef[index] / discountTax).toFixed(2)
    })
    return prices
}

let prices = [1230, 3400, 960, 700, 5200, 1870, 450, 570, 6700, 720]

result1.innerHTML = `[${getArrWithDiscounPrices(prices)}]`