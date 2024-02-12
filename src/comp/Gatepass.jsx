import React from "react";
import { useState } from "react";
import Purpose from "./purpose";
import "../App.css";
import "../components/office.css";

const Gatepass = () => {
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [validUpto, setValidUpto] = useState("");
  const [studentId, setStudentId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate the pass using the input details
    const pass = {
      fullName,
      contactNo,
      email,
      validUpto,
      studentId,
    };
    console.log("Generated Pass:", pass);
    // You can further process or display the pass as needed
  };
  return (
    <>
      <div className="row gap-5 px-4 mt-3">
        <Purpose />
        <div className="col-8 border rounded-3 overflow-hidden">
          <form>
            <div className="row">
              <div className="col p-0">
                <p className="text-center bgcolordash m-0 p-2 fw-bold">
                  ADD PERMISSION TYPE
                </p>
              </div>
            </div>
            <div className="row px-3 py-2">
              <div className="col">
                <label htmlFor="">Full Name: </label>
                <input
                  type="text"
                  className="form-control"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="">Contact No: </label>
                <input
                  type="text"
                  className="form-control"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
              <div className="col">
                <label htmlFor="">Email Address: </label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row px-3 py-2">
              <div className="col">
                <label htmlFor="">Supplier Type: </label>
                <select name="" id="" className="form-control">
                  <option value="">Student</option>
                  <option value="">Teacher</option>
                  <option value="">Guardians</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="">Supplier Id: </label>
                <input type="text" className="form-control" value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}/>
              </div>
              <div className="col">
                <label htmlFor="">Valid Upto: </label>
                <input
                  type="date"
                  className="form-control"
                  value={validUpto}
                  onChange={(e) => setValidUpto(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-2 justify-content-center">
              <button
                type="submit"
                className="btn btn-primary w-25 m-0"
                onClick={handleSubmit}
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-4 px-4 rounded-5 overflow-hidden">
        <div className="col border p-0">
          <p className="text-center bg-light m-0 p-2 fw-bold">
            SUPPLIER GATE PASS
          </p>
        </div>
        <div className="p-0">
          <div
            className="col p-0 border d-flex justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <main id="main" class="output">
              <div className="ac-card">
                <div className="ac-card-image">
                  <img src="https://cdn-icons-png.flaticon.com/512/5850/5850276.png" alt="" />
                </div>
                <div className="ac-card-info">
                  <p>
                    <strong>{studentId}</strong>
                    <br />
                    <strong id="name">{fullName}</strong>
                    <br />
                    <span id="studentNumber">{contactNo }</span>
                  </p>
                  <p id="partTime" className="">
                   {email}
                  </p>
                  <p id="date" className="ac-card-date">{validUpto}</p>
                </div>
                <img
                  className="ac-icon"
                  src="https://imdac.github.io/images/codepen/AC_ICON_1C_BLK_70x58.png"
                />
                <div className="ac-card-footer">
                  <img
                    className="ac-logo"
                    src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png"
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gatepass;
