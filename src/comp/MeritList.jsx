import React, { useRef } from "react";
import "../assets/styledashboradcss/addmition.css";
import '../App.css'
import Captcha from "./Captcha";
function MeritList() {
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null)
    // Add more refs for additional input fields if needed
  ];

  // Function to focus on the next input field
  const focusNextInput = (index) => {
    // If current input is not the last one
    if (index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus(); // Focus on the next input field
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission behavior
      focusNextInput(index); // Focus on the next input field
    }
  };

  return (
    <div className="m-2 px-2 border shadow rounded">
        <h6 className="text-success my-3 fw-semibold "> Check Marit List :</h6>
        <form>
          <div className="row px-sm-5 mx-sm-5   ">
            <div className="d-flex gap-3 align-items-center col-sm-6 mb-2 ">
              <label className="m-0 " htmlFor="">
                Application No. :
              </label>
              <input
                ref={inputRefs[0]}
                onKeyPress={(event) => handleKeyPress(event, 0)}
                type="text"
                placeholder="Enter Application No... "
                className="inputit w-sm-50 form-control  "
              />
            </div>

            <div className="d-flex gap-3 align-items-center col-sm-6 ">
              <label className="m-0" htmlFor="">
                Date of Birth :{" "}
              </label>
              <input
                ref={inputRefs[1]}
                onKeyPress={(event) => handleKeyPress(event, 1)}
                type="text"
                placeholder="Enter Date of Birth... "
                className="inputit w-50 form-control"
              />
            </div>

            <div className="d-flex gap-3 align-items-center col-sm-6  ">
              <label className="m-0" htmlFor="">
                Captcha Code :
              </label>
              {/* <input
                ref={inputRefs[2]}
                onKeyPress={(event) => handleKeyPress(event, 2)}
                type="text"
                placeholder="Enter Captcha Code... "
                className="inputit w-50 mx-2 form-control"
              /> */}
              <Captcha />
            </div>
          </div>
        </form>
        <hr />
      
        <div className="row">
        <div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
        <th scope="col">Heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    </div>
  );
}

export default MeritList;
