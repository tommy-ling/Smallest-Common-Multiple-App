const smallNum = document.querySelector('#smallernum')
const bigNum = document.querySelector('#biggernum')
const button = document.querySelector('button')
const result = document.querySelector('#result')

button.addEventListener('click', () => {
  result.value = smallestCommons([parseInt(smallNum.value), parseInt(bigNum.value)])
})

function smallestCommons(arr) {
  arr.sort((a,b) => a-b)

  let lowerNum = arr[0]
  let higherNum = arr[1]
  let newArr = []
  let primeOfArr = []
  let shortDivisionArr = [];

  // Create an array of nums inbetween the two extreme nums
  for(let i = lowerNum; i <= higherNum; i++) {
    newArr.push(i)
  }

  // Create an array of primes up until largest num
  for(let i = 1; i <= higherNum; i++) {
    let flag = 0;
    for(let j = 2; j < i; j++) {
      if(i % j === 0) {
        flag = 1;
        break;
      }
    }
    if(i > 1 && flag === 0) {
      primeOfArr.push(i)
    }
  }

  // Short Division
  for(let i = 0; i < primeOfArr.length; i++) {
    while(newArr.some((num) => num % primeOfArr[i] === 0)) {
      for(let j = 0; j < newArr.length; j++) {
        if(newArr[j] % primeOfArr[i] === 0) {
        newArr[j] = newArr[j] / primeOfArr[i]
        }
      } shortDivisionArr.push(primeOfArr[i])
    }
  }
  return shortDivisionArr.reduce((a,b) => a*b);
}