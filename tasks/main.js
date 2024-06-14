// flatMap() => combines map() and flat() into one call
const arr = [
    { arr: [1, 2, 3] },
    { arr: [3, 4, 5] },
    { arr: [5, 6, 7] }
  ];
let result = [...new Set (arr.flatMap(el => el.arr))]
console.log(result);
