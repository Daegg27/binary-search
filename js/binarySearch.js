function binarySearch(numberToFind, sortedValues){
  let theMiddle = Math.floor(sortedValues.length / 2)
  
  while (sortedValues.length > 1){
    if(sortedValues[theMiddle] == numberToFind){
      return sortedValues[theMiddle]
    }
    else if (sortedValues[theMiddle] > numberToFind){
     sortedValues = sortedValues.slice(0, theMiddle)
    }
    else{
      sortedValues = sortedValues.slice(theMiddle, sortedValues.length + 1)
    }
    console.log(sortedValues)
  }
  return -1
}

var smallArray = [1,2,3,4,5]
var largeArray = [1,5,7,2,3,8,4,9]

console.log(binarySearch(1, smallArray) === 0);
// console.log(binarySearch(2, smallArray) === 1);
// console.log(binarySearch(3, smallArray) === 2);
// console.log(binarySearch(4, smallArray) === 3);
// console.log(binarySearch(5, smallArray) === 4);
// console.log(binarySearch(7, largeArray) === 5);
