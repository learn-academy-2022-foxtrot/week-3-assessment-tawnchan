// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe the name of the function and structure the the test.
// the function will be called "printFib".
// this function is going to take in a number and returns an array of the Fibonacci sequence in length equal to the given variable.
describe("printFib", () => {
  // describe what the function will do with an 'it()' statement.
  // within the 'it()' perentheses we will explain in plain english what the function will do
  it(`takes in an input of a number greatr than 2 and return an array of that length containing Fibonacci sequence`, () => {
  // with an expect statement method, we will pass through the given variables through the function we called "printFib" .toEqual our expected outcome:
  
    expect(printFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(printFib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
//Output: ReferenceError: printFib is not defined, this is a good error because the test works but we haven't defined the function 'printFib' yet.. which should return a pass once we create the function that will make this test pass.  


// b) Create the function that makes the test pass.

// declare the function and build structure.
// function with const, name it pintFib, which takes in a number (n) as reference.
const printFib = (n) => {
  // declare an array and set the index to 1.
  let fibNumSequence = [1]
  // declare a method called 'nexTerm' with an initial value of 1.
  let nextTerm = 1;
  // iterate through each index of the array 'fibNumSequence' starting at index 0 until the given num (n) is greater than the index -1. 
  for (let i = 0; i < n -1 ; i++) {
    //push the variable nextTerm to the array fibNumSequence to start after 1. 
    fibNumSequence.push(nextTerm)
    // assign nextTerm + fibNumSequence[i] to the variable nextTerm to continue adding on the sequence.
    nextTerm = nextTerm + fibNumSequence[i]
  }
  //print fibNumSequence
  return fibNumSequence
}

//calling on this function with the given variables will give an output of the number of index's of the Fibonnaci sequence similar to the number given. 

// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// describe the name of the function and structure the the test.
// the function will be called "lessToMore".
describe("lessToMore", () => {
  // describe what the function will do with an 'it()' statement.
  // within the 'it()' perentheses we will explain in plain english what the function will do
  it(`takes in an object and returns the only the values sorted from least to greatest`, () => {
  // with an expect statement method, we will pass through the given variables/objects through the function we called "lessTomore" .toEqual our expected outcome:
    expect(lessToMore(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(lessToMore(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
//outcome:  ReferenceError: lessToMore is not defined.  This is a good error since we haven't defined the sumOfArray function. Once we complete the function, the test should past. 

// b) Create the function that makes the test pass.
// declare the function 'lessToMore' that takes in an object, which in this case is an object with keys of name of the week and values of numbers (num).
const lessToMore = (object) => {
// return the Object.values returns the values of an (object) and  we .sort() it through with an anonymous function that takes in two variables.. num1 and num2 and it returns num1 - num2... whichever is higher goes on to the next index as it iterates through... the sort function returns an array equal to the index.length of the object given. 
  return Object.values(object).sort(function(num1, num2){return num1 - num2});
}

// const less = (obj) => {
//   const keys = Object.keys(obj);
//   let newArr = [];
//   array.sort(([,a],[,b]) => a-b);
//   newArr.push(obj [keys])
//   return newArr;
// }



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []


describe("sumOfArray", () => {
  it("partialSum will take in an array as an argument and return an array of the accumulating sum", () => {
    expect(sumOfArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(sumOfArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(sumOfArray(accountTransactions3)).toEqual([])
  })
})

// outcome: ReferenceError: sumOfArray is not defined.  This is a good error since we haven't defined the sumOfArray function. Once we complete the function, the test should past. 

// // b) Create the function that makes the test pass.

const sumOfArray = (arr) => {
  let tempArr = [arr[0]];
  if (arr.length === 0) {
    return [];
  } else if {
    for (i=1, i<arr.length, )
  }
}


