import React from 'react'
import Purpose from './purpose'
import { FiPrinter } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { FaRegCopy } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import InwardDispatch from "../comp/InwardDispatch";
import { useRef } from 'react';
const Permission = () => {

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
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
              <div className="form-group p-2 m-0">
                <label for="exampleInputEmail1">Permission Type :</label>
                <input ref={inputRefs[0]}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Permission of Leave"
                  onKeyPress={(event) => handleKeyPress(event, 0)}
                />
              </div>
              <div className="form-group p-2 m-0">
                <label for="exampleInputPassword1">Description :</label>
                <input ref={inputRefs[1]} 
                  type="textbox"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter something here..."
                  onKeyPress={(event) => handleKeyPress(event, 1)}
                />
                
              </div>
              <div className="row">
                <div className="col justify-content-end d-flex align-items-center">
                  <button type="submit" class="btn btn-primary my-3">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-4 px-4">
          <div className="col p-0">
            <div className="col border rounded-3 overflow-hidden">
              <form>
                <div className="row">
                  <div className="col p-0">
                    <p className="text-center bgcolordash m-0 p-2 fw-bold">
                      PERMISSION LIST
                    </p>
                  </div>
                </div>
                <div className="row py-3 px-4 justify-content-between">
                  <div className="col-5">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-auto d-flex gap-4 border-bottom">
                    <FiPrinter className="fs-4 icons" />
                    <FaRegCopy className="fs-4 icons" />
                    <GrDocument className="fs-4 icons" />
                    <MdMenuBook className="fs-4 icons" />
                  </div>
                </div>
                <div className="row  px-4 pb-3 border-bottom">
                  <div className="col">
                  <button className="btn border d-flex align-items-center gap-4 m-0">Permission Type <FaCaretDown className="fs-5"/></button>
                  </div>
                </div>
                <div className="row py-2 px-3">
                  <div className="col">
                    <ol>
                      <div className="row py-2">
                        <div className="col d-flex justify-content-between">
                          <li>General Permission</li>
                          <span className="d-flex gap-4">
                          <FaPen className="fs-5 icons"/>
                          <RxCross1 className="fs-4 icons"/>
                          </span>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col d-flex justify-content-between">
                          <li>General Permission</li>
                          <span className="d-flex gap-4">
                          <FaPen className="fs-5 icons"/>
                          <RxCross1 className="fs-4 icons"/>
                          </span>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col d-flex justify-content-between">
                          <li>General Permission</li>
                          <span className="d-flex gap-4">
                          <FaPen className="fs-5 icons"/>
                          <RxCross1 className="fs-4 icons"/>
                          </span>
                        </div>
                      </div>
                    </ol>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default Permission
