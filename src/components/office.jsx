import React from "react";
import Navbar from "../comp/Navbar";
import Welcome from "../comp/Welcome";
import { FiPrinter } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { FaRegCopy } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import "../App.css";
import "./office.css";

function Office() {
  return (
    <>
      <Navbar />
      <Welcome />
      <div className="mx-auto mt-3" style={{ maxWidth: "95%" }}>
        <div className="row gap-5">
          <div className="col-3 border rounded-3 overflow-hidden p-0">
            <table className="table m-0">
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
          <div className="col-7 border rounded-3 overflow-hidden">
            <form>
              <div className="row">
                <div className="col p-0">
                  <p className="text-center bgcolordash m-0 p-2 fw-bold">
                    ADD PERMISSION TYPE
                  </p>
                </div>
              </div>
              <div className="form-group p-2">
                <label for="exampleInputEmail1">Permission Type :</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Permission of Leave"
                />
              </div>
              <div className="form-group p-2">
                <label for="exampleInputPassword1">Description :</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter something here..."
                />
              </div>
              <div className="row">
                <div className="col justify-content-end d-flex">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-11 p-0">
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
                <div className="row">
                  <div className="col">

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
