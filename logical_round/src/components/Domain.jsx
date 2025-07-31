// import React, { useState } from "react";

// function Domain() {
//   const [typed, setTyped] = useState("");
//   const [result, setResult] = useState(null);

//   const handleOnChange = (e) => {
//     setTyped(e.target.value);
//   };

//   const handleClick = async () => {
//     try {
//       const response = await fetch(
//         `https://corsproxy.io/?https://api.api-ninjas.com/v1/whois?domain=${typed}`,
//         {
//           headers: {
//             "X-Api-Key": "8YkAze0SLoreY1RpKveCDA==q7aFiaV2SWvHacBF",
//           },
//         }
//       );

//       const data = await response.json();
//       console.log(data);
//       setResult(data);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching WHOIS data:", error);
//     }
//   };

//   return (
//     <div className="p-8">
//       <div className="flex gap-4">
//         <input
//           onChange={handleOnChange}
//           value={typed}
//           className="p-4 w-64 bg-blue-400 rounded-full text-white "
//           type="text"
//           placeholder="Enter domain"
//         />

//         <button
//           onClick={handleClick}
//           className="p-4 bg-green-500 rounded-full text-white font-semibold"
//         >
//           search
//         </button>
//       </div>

//       {result && <div>{JSON.stringify(result)}</div>}
//     </div>
//   );
// }

// export default Domain;
