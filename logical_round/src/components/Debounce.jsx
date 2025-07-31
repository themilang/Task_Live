import React, { useEffect, useState } from "react";

function Debounce() {
  //     Task 6: Debounce Function Implementation
  // Create a debounced search functionality using the provided API.
  // API Endpoint: https://api.api-ninjas.com/v1/nutrition?query=1lb brisket and fries
  // Search Examples: momos, mango, fries, etc.
  // Requirements: Implement debounce to limit API calls, create search interface

//   const [search, setSearch] = useState();
//   const [changeVal, setChangeVal] = useState();

//   function handleSubmit() {
//     console.log(changeVal);
//   }

//   useEffect(() => {
//     fetch("https://api.api-ninjas.com/v1/nutrition?query=1lb")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, 500);

  //  Task 11: Find First Non-Repeating Character
  // Write a function to find the first character that appears only once in a string.
  // Example: firstUniqueChar("aabbcdeff") → 'c'

  // function nonRepeat(str) {
  //   const charCount = [];

  //   for (let i of str) {
  //     charCount[i] = (charCount[i] || 0) + 1;
  //   }

  //   for (let i of str) {
  //     if (charCount[i] === 1) {
  //       return i;
  //     }
  //   }

  //   return null;
  // }

  // console.log(nonRepeat("aabbcdeff"))

  return (
    <>
      <div className="">
        <input
          onChange={(e) => {
            setChangeVal(e.target.value);
          }}
          type="text"
          placeholder="Enter the text"
        />
      </div>

      <button onClick={handleSubmit} className="">
        search
      </button>
    </>
  );
}

export default Debounce;
