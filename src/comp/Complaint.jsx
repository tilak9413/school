import React from "react";
import Navbar from "../comp/Navbar";
import Welcome from "../comp/Welcome";
import { FiPrinter } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { FaRegCopy } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import "../App.css";
import { FaCaretDown } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Purpose from "../comp/purpose";
import { FaCloudUploadAlt } from "react-icons/fa";

function Complaint() {
  return (
    <>
      <div className="mx-auto mt-3 px-4">
        <div className="row gap-5">
          <Purpose />
          <div className="col-8 border rounded-3 overflow-hidden">
            <div className="row">
              <div className="col p-0">
                <div className="col border overflow-hidden">
                  <form>
                    <div className="row">
                      <div className="col p-0">
                        <p className="text-center bgcolordash m-0 p-2 fw-bold">
                          COMPLAINT LIST
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
                    <div className="row px-4 gap-4 border-bottom pb-2">
                      <div className="col-auto">Complaint No.</div>
                      <div className="col-auto">Complaint Type</div>
                      <div className="col-auto">Name</div>
                      <div className="col-auto">Phone no.</div>
                      <div className="col-auto">Date</div>
                    </div>
                    <div className="row px-4 gap-4 pt-3">
                      <div className="col-2 ps-4">1.</div>
                      <div className="col-2 ">General</div>
                      <div className="col-auto p-0">General</div>
                      <div className="col-auto ps-3 p-0">99999*****</div>
                      <div className="col-auto">12-02-2023</div>
                      <div className="col d-flex justify-content-end gap-4">
                        <FaPen className="fs-5 icons" />
                        <RxCross1 className="fs-4 icons" />
                      </div>
                    </div>
                    <div className="row px-4 gap-4 py-3">
                      <div className="col-2 ps-4">1.</div>
                      <div className="col-2 ">General</div>
                      <div className="col-auto p-0">General</div>
                      <div className="col-auto ps-3 p-0">99999*****</div>
                      <div className="col-auto">12-02-2023</div>
                      <div className="col d-flex justify-content-end gap-4">
                        <FaPen className="fs-5 icons" />
                        <RxCross1 className="fs-4 icons" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row p-2">
                  <div className="col">
                    Records: 2 of 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col p-0">
            <div className="col border rounded-3 overflow-hidden">
              <form>
                <div className="row">
                  <div className="col p-0">
                    <p className="text-center bgcolordash m-0 p-2 fw-bold">
                      INWARD / DISPATCH
                    </p>
                  </div>
                </div>
                <div className="row px-4 py-2 gap-5">
                  <div className="col-2">
                    <label htmlFor="">Complaint Type: </label>
                    <select name="" id="" className="form-control">
                      <option value="">General</option>
                      <option value="">Danger</option>
                      <option value="">Serious</option>
                    </select>
                  </div>
                  <div className="col-2">
                    <label htmlFor="">Source: </label>
                    <select name="" id="" className="form-control">
                      <option value="">Student</option>
                      <option value="">Parents</option>
                      <option value="">Mother</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="">Complaint By: </label>
                    <input className="form-control" type="text" placeholder="Name of Person who complain"/>
                  </div>
                </div>
                <div className="row px-4 py-2 gap-5">
                  <div className="col-2">
                    <label htmlFor="">Phone no </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-2">
                    <label htmlFor="">Date: </label>
                    <input className="form-control" type="date" />
                  </div>
                  <div className="col">
                    <label htmlFor="">Description: </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row px-4 py-2 gap-5">
                  <div className="col-2">
                    <label htmlFor="">Action Taken: </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-4">
                    <label htmlFor="">Attach Document: </label>
                    <div className="border form-control d-flex justify-content-center align-items-center gap-2">
                      <FaCloudUploadAlt className="fs-4" />
                      Drag and drop a file or click
                    </div>
                  </div>
                  <div className="col pt-2 d-flex justify-content-end">
                    <button className="btn btn-primary mt-4">Save</button>
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

export default Complaint;
