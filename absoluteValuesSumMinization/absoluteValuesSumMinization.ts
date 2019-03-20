function absoluteValuesSumMinimization(a: number[]): number {
  return a[Math.ceil(a.length / 2) - 1];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 6, 7, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 5, 7, 7, 8]));
