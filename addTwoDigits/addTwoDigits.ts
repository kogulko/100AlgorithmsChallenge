function addTwoDigits(n: any): number {
    return n.toString().split('').reduce((sum, current) => sum + parseInt(current), 0);
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(111));
console.log(addTwoDigits(1000000));