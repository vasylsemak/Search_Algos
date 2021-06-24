const myArr = [10, 20, 30, 40, 50, 60, 70, 80, 90]

const binerySearch = (target, arr) => {
  // define start index, end index and middle
  let leftIdx = 0
  let rightIdx = arr.length
  let middleIdx = Math.floor(rightIdx /  2)

  // if middle elem is target -> return middle index
  if(target === arr[middleIdx]) return middleIdx
  // if target is less than middle elem:
  //   - cut right side of array
  //   - run f-n recursively on left side
  else if(target < arr[middleIdx]) {
    rightIdx = middleIdx
    console.log("left side check")
    return binerySearch(target, arr.slice(0, rightIdx))
  }
  // if target is greater than middle elem:
  //   - cut left side of array
  //   - run f-n recursively on right side
  else if(target > arr[middleIdx]) {
    leftIdx = middleIdx
    console.log("right side check")
    return leftIdx + binerySearch(target, arr.slice(leftIdx))
  }

  // if no target in array
  return -1;
}

console.log(
  "target index is: ",
  binerySearch(90, myArr)
)
