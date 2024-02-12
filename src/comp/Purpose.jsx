// import React, { useState } from "react";
// import { useContext } from "react";
// import { OfficeContext } from "../context/OfficeContext";

// const Purpose = () => {

//   const {setofficeindex,officeindex } = useContext(OfficeContext);
//   const [activeButton, setActiveButton] = useState(0);

//   const handleButtonClick = (buttonNumber) => {
//     setActiveButton(buttonNumber);
//     // console.log("Index is: ", buttonNumber)
//   };

//   const purpose = [
//     "Permission",
//     "Inward / Dispatch",
//     "Gate Pass",
//     "Complaint",
//     "Issue of Tc/CC",
//   ];
//   return (
//     <>
//       <div className="col">
//         <div className="rounded-2 border overflow-hidden">
//           <div className="row bgcolordash">
//             <div className="col d-flex align-items-center justify-content-center">
//               <p className="m-0 p-2 fw-bold">PURPOSE</p>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col p-0">
//               {
//                 purpose.map((btnName,index) =>{
//                   return (
//                     <button onClick={() => {setofficeindex(index);handleButtonClick(index);}} className="btn w-100 m-0 p-2 mt-2">{btnName}</button>
//                   )
//                 })
//               }
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Purpose;

import React, { useState } from "react";
import { useContext } from "react";
import { OfficeContext } from "../context/OfficeContext";

const Purpose = () => {

  const { setofficeindex, officeindex } = useContext(OfficeContext);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    // console.log("Index is: ", buttonNumber)
  };

  const purpose = [
    "Permission",
    "Inward / Dispatch",
    "Gate Pass",
    "Complaint",
    "Issue of Tc/CC",
  ];
  return (
    <>
      <div className="col">
        <div className="rounded-2 border overflow-hidden">
          <div className="row bgcolordash">
            <div className="col d-flex align-items-center justify-content-center">
              <p className="m-0 p-2 fw-bold">PURPOSE</p>
            </div>
          </div>
          <div className="row">
            <div className="col p-0">
              {
                purpose.map((btnName, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => { setofficeindex(index); handleButtonClick(index); }}
                      className={`btn w-100 m-0 p-2 mt-2 myButton ${activeButton === index ? 'isSelected' : ''}`}
                    >
                      {btnName}
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purpose;
