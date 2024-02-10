import React from "react";
import Navbar from "../comp/Navbar";
import Welcome from "../comp/Welcome";
import { FiPrinter } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { FaRegCopy } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import "../App.css";
import "./office.css";
import { FaCaretDown } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
// import { Dropdown } from "react-bootstrap";

function Office() {
  return (
    <>
      <Navbar />
      {/* <Welcome /> */}
      <div className="mx-auto mt-3 px-4">
        <div className="row gap-5">
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
                <tr>
                  <td>Permission</td>
                </tr>
                <tr>
                  <td>Inward / Dispatch</td>
                </tr>
                <tr>
                  <td>Gate Pass</td>
                </tr>
                <tr>
                  <td>Complaint</td>
                </tr>
                <tr>
                  <td>Issue of TC/CC</td>
                </tr>
              </tbody>
            </table>
          </div>
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
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Permission of Leave"
                />
              </div>
              <div className="form-group p-2 m-0">
                <label for="exampleInputPassword1">Description :</label>
                <input
                  type="textbox"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter something here..."
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
        <div className="row mt-4">
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
      </div>
    </>
  );
}

export default Office;
