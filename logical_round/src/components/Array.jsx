import React, { useState, useSyncExternalStore } from "react";

function Array() {

  // Task 1: Reverse a String
  // Create a function that takes any string and returns the reversed string.
  // Example: Input "Bibek" → Output "kebiB"

  //answer-->

  //  const Reverse = (str) => {
  //     let reverseString = str.split("").reverse("").join("");
  //     return reverseString;
  //   };

  //   console.log(Reverse("Bebek"));








  //Write a function to find and return the largest number from an array.
  // Example: Input [1, 7, 9, 2, 5] → Output 9

  // answer --> 

  //   const array = [1, 7, 9, 2, 5];

  //   function LargestNum(arr) {
  //     const largest = Math.max(...arr);
  //     return largest;
  //   }
  //   const largest = LargestNum(array);
  //   console.log("Largest from function",largest);







  // print even numbers from 1 to N

  //---> answer

  //   function evenNum() {
  //     let end = 10;
  //     let array = [];
  //     for (let i = 0; i <= end; i++) {
  //       if (i % 2 == 0) {
  //         array.push(i);
  //       }
  //       console.log(array);
  //     }
  //     return array;
  //   }
  //   evenNum();






  //sum of all numbers in array

  //answer -->

  //   function sumFunction() {
  //     let sum = 0;
  //     const arr = [1, 5, 9];
  //     const leng = arr.length;
  //     console.log(leng);

  //     for (let i = 0; i < leng; i++) {
  //       sum = sum + arr[i];
  //     }
  //     console.log(sum);
  //     return sum;
  //   }
  //   let hereSum = sumFunction();
  //   console.log(hereSum)






  //   Task 5: Basic useState Example in React
  // Implement a React component using the useState hook to dynamically change a name from an input field.
  // Requirements: Input field updates state, display current value in real-time

  //answer -->

  //using the useState hooks

  //   const [name, setName] = useState("");

  //   const handleOnChange = (e) => {
  //     setName(e);
  //     console.log(e);
  //   };







  // Task 8: Check for Palindrome
  // Create a function to determine if a string or number is a palindrome.
  // Examples: "madam" → true, 12421 → true, "hello" → false

  //answer -->

  //   function typeChecker(str) {
  //     if (typeof str === "number") {
  //       console.log("its a number");
  //       return String(str);
  //     } else return str;
  //   }

  //   function CheckPalindrome(str) {
  //     if (str.split("").reverse("").join("") == str) return true;
  //     else return false;
  //   }

  //   console.log(CheckPalindrome("madam"));
  //   console.log("the num is changed to string",CheckPalindrome(typeChecker(111)));







  // Task 9: Character Frequency Counter
  // Implement a function that counts the frequency of each character in a string.
  // Example: charCount("hello") → { h: 1, e: 1, l: 2, o: 1 }

  //answer -->

  // function Freq(str) {
  //   const charCount = [];

  //   for (let i of str) {
  //     charCount[i] = (charCount[i] || 0) + 1;
  //     console.log(charCount)
  //   }

  //   }
  //   Freq('abcisdsaj')





  









  // Write a function to flatten a deeply nested array structure.
  // Example: Input [1, [2, [3, 4], 5], 6] → Output [1, 2, 3, 4, 5, 6]

  //answer -->

  // function nontFlattenArray(array){
  //     let newarr= array.flat(2);
  //     console.log("flaten",newarr)
  //     return newarr;

  // }
  // nontFlattenArray([1, [2, [3, 4], 5], 6])








  // debug one

  // Debug Task 1: Variable Hoisting with var
  // javascript


  //answer -->

  // function test() {
  //       if (true) {
  //     var message = "Hi";
  //   }
  //   console.log(message);
  // What will this print and why?
  // }
  // test()

  // " Hi " will print cause the  message is var which is available in global scope
  // but if there was an let it would have given error

  // function test() {
  //       if (true) {
  //     let message = "Hi"; // what i did is var--> let and return the variable message to access
  //     return message
  //   }
  // }

  // console.log(test())






  // Debug Task 2: Object Comparison
  // javascript
  // const a = { name: "example" };
  // const b = { name: "example" };
  // console.log(a === b);
  // // True or false? Explain why.
  // Your Task: Provide the result and detailed explanation.


  //answer -->

  // const a = { name: "example" };
  // const b = { name: "example" };
  // console.log(a.name)
  // console.log(b.name)
  // // here the content is same but every object has its own reference
  // console.log(a ===b);// false cause these are 2 diff object so
  // console.log("same location",a ===a); //true cause same object

  // console.log(a.name ===b.name); // gives the true cause there is same content





  //  React Debugging (2 Tasks) - 3 Points Each
  // Debug Task 3: Event Handler Issue
  // javascript
  // <button onClick={handleClick()}>Click</button>
  // // What will be the result and how to fix it?

  //answer -->

  // basically there when onClick is called it should be defined  as :
  // () this is not required cause it doent return any thing we can directly invoke this function

  // const handleClick=()=>{
  //     console.log("clicked")
  // }








  // Debug Task 4: State Update Issue
  // javascript
  // const [count, setCount] = useState(0);
  // function increment() {
  //   setCount(count++);
  // }
  // // Is this correct? If not, how to fix it?
  // Your Task: Explain the issue and provide the correct solution.

  //answer -->

  // const [count, setCount] = useState(0);
  // function increment() {
  // setCount(count++);
  // }

  //the issue is the state is changed in 1st mount
  //  the count was not been increased there
  //  access the precious value then only set the count may solve

  // const [count,setCount]=useState(1);

  // function increment(){
  //     setCount((prev)=>{
  //         return prev+1

  //     })

  // }
  // const handleClick=()=>{
  //     increment()

  // }

  return (
    <>
      {/* <input
        onChange={(e) => handleOnChange(e.target.value)}
        type="text"
        placeholder="Enter the name"
      ></input> */}

      {/* <div>{name}</div> */}
      {/* <button onClick={handleClick}>Click</button> */}
      {/* {count} */}
      {/* <button onClick={handleClick} className="bg-blue-400">Click</button> */}
    </>
  );
}

export default Array;
