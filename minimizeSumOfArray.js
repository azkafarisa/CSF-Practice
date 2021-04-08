// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/train/javascript

function minSum(arr) {
    let length = arr.length;
    
    // using bubble sort
      for (let x= 0; x< length; x++){
      for (let y= 0; y< length; y++){
        if (arr[y] > arr[y + 1]) {
          let temp = arr[y];
          arr[y] = arr[y + 1];
          arr[y + 1] = temp;
        }
      }
    }
    let sortedArr = arr;
    
    // using sort function to sort number in javascript
    // let sortedArr = arr.sort((a, b) => a - b);
    
    // find the sum of array
    let sum = 0;
    let j = length - 1;
    for (let i=0; i<length/2; i++) {
      let result = sortedArr[i] * sortedArr[j];
      j--;
      sum = sum + result;
    }
    
    return sum;
  }

  describe("Basic Tests", function(){
    it("should return the minimum sum", function(){
      Test.assertEquals(minSum([5,4,2,3]), 22);
      Test.assertEquals(minSum([12,6,10,26,3,24]), 342);
      Test.assertEquals(minSum([9,2,8,7,5,4,0,6]), 74);
    });
  });