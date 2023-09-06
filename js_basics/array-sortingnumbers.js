
const numbers = [1, 5, 7, 40, 16, 15, 20];

const numbersSorted = numbers.sort();
console.log(numbersSorted);

const numbersReallySorted = numbers.sort((n1, n2) => n1 - n2);
const numbersReallySortedDes = numbers.sort((n1, n2) => n2 - n1);

console.log(numbersReallySorted);
console.log(numbersReallySortedDes);

/*
n1     n2      n1 - n2      interpretation                      result
1      15      -14          1 should be coming before 15       [1, 15]
15     16      -1           15 should be coming before 20       [1, 15, 16]
16     20      -4           16 should be coming before 20       [1, 15, 16, 20]
20     40      -20          20 should be coming before 40
40     5       35           5 should be before 40
*/