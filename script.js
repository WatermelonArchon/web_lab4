//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ

/** 1
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i); 
    }
    return arr;
}
// console.log(getIntervalArray(1, 5))

// 1.2
function getIntervalArray2(start,end) {
    let length = end - start + 1;
    
    return Array.from({ length }, (_, index) => start + index);
}
// console.log(getIntervalMethodArray(-2, 2))

/** 2
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        let num1 = arr1[i] ?? 0;
        let num2 = arr2[i] ?? 0;
        result.push(num1 + num2);}
    return result;
}
// console.log(sumArrays([1, 2, 3], [4, 5, 6]));   

// 2.2
function sumArrays2(arr1, arr2){
    let longerArray = arr1.length >= arr2.length ? arr1 : arr2;
    let shorterArray = arr1.length < arr2.length ? arr1 : arr2;
    return longerArray.map((value, index) => {
        let otherValue = shorterArray[index] ?? 0;
        return value + otherValue;});
}
// console.log(sumArrays2([1, 2, 3], [4, 5, 6]));  


/** 3
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i; }}
    return -1; }
// console.log(findElement(['Array', 'Number', 'string'], 'Date'));

// 3.2
function findElement2(arr, value) {
    return arr.indexOf(value);}
// console.log(findElement2(['Ace', 10, true], 10));

/** 4
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(arr, item) {
    let count = 0;
    for (let element of arr) {
        if (element === item) {
            count++;}}
    
    return count;}
// console.log(findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1)); 

// 4.2
function findAllOccurrences2(arr, item) {
    return arr.filter(element => element === item).length;
}
// console.log(findAllOccurrences2([ 0, 0, 1, 1, 1, 2 ], 1)); 

/** 5
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(arr) {
    let result = [];
    for (let element of arr) {
        if (element) {
            result.push(element);}}
    return result;}
// console.log(removeFalsyValues([ 0, false, 'cat', NaN, true, '' ])); 

// 5.2
function removeFalsyValues2(arr) {
    return arr.filter(Boolean);
}
//console.log(removeFalsyValues2([ 1, 2, 3, 4, 5, 'false' ]))

/** 6
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
    let lengths = [];
    for (let str of arr) {
        lengths.push(str.length); }
    return lengths;}
// console.log(getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]));

// 6.2
function getStringsLength2(arr) {
    return arr.map(str => str.length);
}
// console.log(getStringsLength2([ 'angular', 'react', 'ember' ])); 

/** 7
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage(arr) {
    if (arr.length === 0) 
        return 0;
    let sum = 0;
    for (let num of arr) {
        sum += num;}
    let average = sum / arr.length;
    return Number(average.toFixed(2));}
// console.log(getAverage([])); 

// 7.2
function getAverage2(arr) {
    if (arr.length === 0) 
        return 0;
    let sum = arr.reduce((acc, num) => acc + num, 0);
    return +(sum / arr.length).toFixed(2);}
// console.log(getAverage2([])); 

/** 8
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(arr) {
    if (arr.length <= 1) 
        return true;
    let targetLength = arr[0].length;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length !== targetLength) {
            return false;}}
    return true; }
// console.log(isSameLength(['orange', 'banana', 'cherry']));

// 8.2
function isSameLength2(arr) {
    if (arr.length <= 1) 
        return true;
    return arr.every(str => str.length === arr[0].length);}
// console.log(isSameLength2(['cat', 'dog', 'elephant']));

/** 9
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return true;}}
    return false; }
// console.log(isValueEqualsIndex([0, 1, 2, 3, 4])); 

// 9.2
function isValueEqualsIndex2(arr) {
    return arr.some((value, index) => value === index);}
// console.log(isValueEqualsIndex2([2, 1, 0, 4, 5]));  

/** 10
 * Inserts the item into specified array at specified index.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        if (i === index) {
            result.push(item);}
        if (i < arr.length) {
            result.push(arr[i]);}}
    return result;}
// console.log(insertItem([1, 3, 4, 5], 2, 1));

// 10.2
function insertItem2(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;}
// console.log(insertItem2([ 1, 'b', 'c'], 'x', 0));

/** 11
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead(arr, n) {
    let result = [];
    let limit = Math.min(n, arr.length);
    for (let i = 0; i < limit; i++) {
        result.push(arr[i]);}
    return result;}
//console.log(getHead([ 1, 3, 4, 5 ], 2));

// 11.2
function getHead2(arr, n) {
    return arr.slice(0, n);}
//console.log(getHead2([ 1, 3, 4, 5 ], 2));

/** 12
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(arr, n) {
    let result = [];
    let start = Math.max(0, arr.length - n);
    for (let i = start; i < arr.length; i++) {
        result.push(arr[i]);}
    return result;}
//console.log(getTail([ 1, 3, 4, 5 ], 2)); 

// 12.2
function getTail2(arr, n) {
    return n === 0 ? [] : arr.slice(-n);
}
//console.log(getTail2([ 1, 3, 4, 5 ], 2)); 

/** 13
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);}
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);}
    return result;}
//console.log(doubleArray(['Ace', 10, true])); 

// 13.2
function doubleArray2(arr) {
    return arr.concat(arr);}
//console.log(doubleArray2(['Ace', 10, true])); 

/**14
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += ',';}}
    return result;}
//console.log(toStringList([0, false, 'cat', NaN, true, '']));

// 14.2
function toStringList2(arr) {
    return arr.join(',');}
//console.log(toStringList2([0, false, 'cat', NaN, true, '']));


/** 15
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(arr) {
    let uniqueArr = [];
    for (let item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);}}
    return uniqueArr;}
//console.log(distinct([ 1, 2, 3, 3, 2, 1 ])); 

// 15.2
function distinct2(arr) {
    return [...new Set(arr)];}
//console.log(distinct2([ 1, 2, 3, 3, 2, 1 ])); 

/** 16
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(n, size) {
    let arr = [];
    if (n === 1) {
        for (let i = 0; i < size; i++) {
            arr.push(0);}
        return arr;}
    for (let i = 0; i < size; i++) {
        arr.push(createNDimensionalArray(n - 1, size));}
    return arr;}
//console.log(JSON.stringify(createNDimensionalArray(2, 3)));

// 16.2
function createNDimensionalArray2(n, size) {
    if (n === 1) {
        return Array(size).fill(0);}

    return Array.from({ length: size }, () => 
        createNDimensionalArray2(n - 1, size));}
// console.log(JSON.stringify(createNDimensionalArray2(3, 2)));

/** 17
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray(nestedArray) {
    let result = [];
    for (let item of nestedArray) {
        if (Array.isArray(item)) {
            result.push(...flattenArrayWithLoop(item));
        } else {
            result.push(item);}}
    return result;}
// console.log(flattenArray([1, [2, [3, 4], 5], 6])); 

// 17.2
function flattenArray2(nestedArray) {
    return nestedArray.flat(Infinity);}
// console.log(flattenArray2([1, [2, [3, 4], 5], 6])); 

/** 18
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    let result = [];
    for (let  item of arr) {
        let children = childrenSelector(item);
        result.push(...children);}
    return result;}
// console.log(selectMany([[1, 2], [3, 4], [5, 6]], (x) => x)); 

// 18.2
function selectMany2(arr, childrenSelector) {
    return arr.flatMap(childrenSelector);}
//console.log(selectMany2([[1, 2], [3, 4], [5, 6]], (x) => x)); 

/** 19
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance(arr) {
    let balance = 0;
    for (let month of arr) {
        let [income, expense] = month; 
        balance += (income - expense);}
    return balance;}
// console.log(calculateBalance([[10, 8], [5, 1]]));

// 19.2
function calculateBalance2(arr) {
    return arr.reduce((acc, [income, expense]) => acc + (income - expense), 0);}
// console.log(calculateBalance2([[10, 8], [5, 1]]));

/**20
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks(arr, chunkSize) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        let chunk = arr.slice(i, i + chunkSize);
        chunks.push(chunk);}
    return chunks;}
// console.log(createChunks([1, 2, 3, 4, 5, 6, 7], 3)); 

// 20.2
function createChunks2(arr, chunkSize) {
    let chunksCount = Math.ceil(arr.length / chunkSize);
    return Array.from({ length: chunksCount }, (_, index) => {
        let start = index * chunkSize;
        return arr.slice(start, start + chunkSize);});}
// console.log(createChunks2([1, 2, 3, 4, 5, 6, 7], 3)); 

/** 21
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
    let result = [];
    for (let i = 0; i < len; i++) {
        result.push(1 + i * 2);} 
    return result;}
//console.log(generateOdds(0));

// 21.2
function generateOdds2(len) {
    return Array.from({ length: len }, (_, index) => 1 + index * 2);}
//console.log(generateOdds2(0));

/** 22
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
function getElementByIndices(arr, indices) {
    let current = arr;
    for (let index of indices) {
        current = current[index];}
    return current;}
//console.log(getElementByIndices([[1, 2], [3, 4], [5, 6]], [0, 0]));

// 22.2
function getElementByIndices2(arr, indices) {
    return indices.reduce((acc, index) => acc[index], arr);}
//console.log(getElementByIndices2([[1, 2], [3, 4], [5, 6]], [0, 0]));

/** 23
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount(arr) {
    let count = 0;
    for (let element of arr) {
        if (!element) {
            count++;}}
    return count;}
// console.log(getFalsyValuesCount([])); 

// 23.2
function getFalsyValuesCount2(arr) {
    return arr.filter(element => !element).length;}
// console.log(getFalsyValuesCount2([]));  

/** 24
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);}}
        matrix.push(row);}
    return matrix;}
// console.log(getIdentityMatrix(1)); 

// 24.2
function getIdentityMatrix2(n) {
    return Array.from({ length: n }, (_, rowIndex) => 
        Array.from({ length: n }, (__, colIndex) => 
            rowIndex === colIndex ? 1 : 0));}
// console.log(getIdentityMatrix2(2));

/** 25
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(numbers) {
    let indices = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            indices.push(i);}}
    return indices;}
// console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5]));

// 25.2
function getIndicesOfOddNumbers2(numbers) {
    return numbers.reduce((acc, num, i) => {
        if (num % 2 !== 0) {
            acc.push(i);}
        return acc;}, []);}
// console.log(getIndicesOfOddNumbers2([1, 2, 3, 4, 5]));

/** 26
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(arr) {
    let result = [];
    for (let num of arr) {
        let hex = num.toString(16).padStart(6, '0').toUpperCase();
        result.push(`#${hex}`);}
    return result;}
// console.log(getHexRGBValues([0, 255, 16777215])); 

// 26.2
function getHexRGBValues2(arr) {
    return arr.map(num => {
        let hex = num.toString(16).padStart(6, '0').toUpperCase();
        return `#${hex}`;});}
// console.log(getHexRGBValues2([0, 255, 16777215])); 

/** 27
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(arr, n) {
    if (arr.length === 0) 
        return [];
    let sorted = [...arr];
    // пузырек по убыванию
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (sorted[j] < sorted[j + 1]) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;}}}
    let result = [];
    let limit = Math.min(n, sorted.length);
    for (let i = 0; i < limit; i++) {
        result.push(sorted[i]);}
    return result;}
// console.log(getMaxItems([10, 2, 7, 5, 3, -5], 3));

// 27.2
function getMaxItems2(arr, n) {
    return [...arr].sort((a, b) => b - a).slice(0, n);}
// console.log(getMaxItems2([10, 2, 7, 5, 3, -5], 3));

/** 28
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(arr1, arr2) {
    let common = [];
    for (let item of arr1) {
        if (arr2.includes(item) && !common.includes(item)) {
            common.push(item);}}
    return common;}
// console.log(findCommonElements([1, 2, 3], [2, 3, 4]));

// 28.2
function findCommonElements2(arr1, arr2) {
    let set2 = new Set(arr2);
    let filtered = arr1.filter(item => set2.has(item));
    return [...new Set(filtered)];}
// console.log(findCommonElements2([1, 2, 3], [2, 3, 4]));

/** 29
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(nums) {
    if (nums.length === 0) 
        return 0;
    let maxLen = 1;
    let currentLen = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLen++;
        } else {
            currentLen = 1;}
        if (currentLen > maxLen) {
            maxLen = currentLen;}}
    return maxLen;}
// console.log(findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]));

// 29.2
function findLongestIncreasingSubsequence2(nums) {
    if (nums.length === 0) 
        return 0;
    let result = nums.reduce((acc, currentNum, index) => {
        if (index === 0)
            return acc;
        let prevNum = nums[index - 1];
        if (currentNum > prevNum) {
            acc.current += 1;
            acc.max = Math.max(acc.max, acc.current);
        } else {
            acc.current = 1;}
        return acc;
    }, { current: 1, max: 1 });
    return result.max;}
// console.log(findLongestIncreasingSubsequence2([50, 3, 10, 7, 40, 80]));

/** 30
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let count = i + 1;
        for (let j = 0; j < count; j++) {
            result.push(arr[i]);}}
    return result;}
// console.log(propagateItemsByPositionIndex(['a', 'b'])); 

// 30.2
function propagateItemsByPositionIndex2(arr) {
    return arr.flatMap((item, index) => 
        Array.from({ length: index + 1 }, () => item));}
// console.log(propagateItemsByPositionIndex2(['a', 'b', 'c', null]));

/** 31
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(arr, n) {
    if (arr.length === 0) return arr;
  let result = [...arr]; 
  let length = result.length;
  let count = n % length;
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      let lastElement = result.pop();
      result.unshift(lastElement);}
  } else if (count < 0) {
    count = Math.abs(count);
    for (let i = 0; i < count; i++) {
      const firstElement = result.shift();
      result.push(firstElement);}}}
// console.log(shiftArray([1, 2, 3, 4, 5], 2));

// 31.2
function shiftArray2(arr, n) {
    if (arr.length === 0) return arr;
  let length = arr.length;
  let shiftIndex = (n % length + length) % length;
  let rightPart = arr.slice(-shiftIndex);
  let leftPart = arr.slice(0, length - shiftIndex);
  return [...rightPart, ...leftPart];}
// console.log(shiftArray2([1, 2, 3, 4, 5], 2)); 

/** 32
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
    if (arr.length === 0) return [];
    const digitOrder = [
        'zero', 'one', 'two', 'three', 'four', 
        'five', 'six', 'seven', 'eight', 'nine'];
    let sorted = [...arr];
    for (let i = 0; i < sorted.length; i++) {
        for (let j = 0; j < sorted.length - 1 - i; j++) {
            let val1 = digitOrder.indexOf(sorted[j]);
            let val2 = digitOrder.indexOf(sorted[j + 1]);
            if (val1 > val2) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;}}}
    return sorted;}
// console.log(sortDigitNamesByNumericOrder([ 'nine', 'one' ])); 

// 32.2
function sortDigitNamesByNumericOrder2(arr) {
    let digitWeights = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9};
    return [...arr].sort((a, b) => digitWeights[a] - digitWeights[b]);}
// console.log(sortDigitNamesByNumericOrder2([ 'nine', 'eight', 'nine', 'eight' ]));

/** 33
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(arr) {
    if (arr.length <= 1) return [...arr];
    let result = [];
    let len = arr.length;
    let halfLen = Math.floor(len / 2);
    let tailStart = len - halfLen;
    for (let i = tailStart; i < len; i++) {
        result.push(arr[i]);}
    if (len % 2 !== 0) {
        result.push(arr[halfLen]);}
    for (let i = 0; i < halfLen; i++) {
        result.push(arr[i]);}
    return result;}
// console.log(swapHeadAndTail([1, 2, 3, 4, 5]));

// 33.2
function swapHeadAndTail2(arr) {
    let len = arr.length;
    let halfLen = Math.floor(len / 2);
    let head = arr.slice(0, halfLen);
    let middle = arr.slice(halfLen, len - halfLen);
    let tail = arr.slice(len - halfLen);
    return [...tail, ...middle, ...head];}
// console.log(swapHeadAndTail2([1, 2, 3, 4, 5]));
