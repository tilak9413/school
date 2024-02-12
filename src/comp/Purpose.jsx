import React, { useState } from "react";
import { useContext } from "react";
import { OfficeContext } from "../context/OfficeContext";

const Purpose = () => {

  const {setofficeindex,officeindex } = useContext(OfficeContext);
  const [isSelected, setisSelected] = useState(0);

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
        <table className="table m-0 rounded overflow-hidden">
          <thead>
            <tr>
              <th scope="col" style={{ backgroundColor: "#81a4ff" }}>
                PURPOSE
              </th>
            </tr>
          </thead>
          <tbody>
            {purpose.map((value, index) => (
              <tr key={index}>
                <td onClick={() => setofficeindex(index)} id={index}>
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Purpose;
