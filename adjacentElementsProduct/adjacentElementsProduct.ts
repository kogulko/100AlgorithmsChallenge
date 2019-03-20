function adjacentElementsProduct(inputArray: number[]): number {
    let maxProduct: number = -Infinity;
    inputArray.forEach((_value: number, index: number) => {
        if (index < inputArray.length - 1) {
            maxProduct = Math.max(maxProduct, inputArray[index] * inputArray[index + 1])
        }
    })
    return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, -6, 2, -5, 7, -3]));