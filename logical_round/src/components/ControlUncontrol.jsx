// import React, { useState } from "react";

// function CUForm() {
//   const [data, setData] = useState("");

//   function onSubmit() {
//     console.log("the data is ", data);
//   }

//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <div className="">
//           <input
//             onChange={(e) => {
//               setData(e.target.value);
//             }}
//             type="text"
//             placeholder="Enter the text"
//           />
//         </div>
//       </form>
//     </>
//   );
// }

// export default CUForm;

// uncntrolled

// import React from "react";

// function Uncontrol() {
//   function submitform() {
//     console.log(window.data.value);
//   }

//   return (
//     <>
//       <form onSubmit={submitform}>
//         <input type="text" />

//         <input type="submit" value="Submit" />
//       </form>
//     </>
//   );
// }

// export default Uncontrol;
import React from 'react'

function ControlUncontrol() {
  return (
    <div>ControlUncontrol</div>
  )
}

export default ControlUncontrol