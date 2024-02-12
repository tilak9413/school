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

function InwardDispatch() {
  return (
    <>
      {/* <Welcome /> */}
      <div className="mx-auto mt-3 px-4">
        <div className="row gap-5">
          <Purpose />
          <div className="col-8 border rounded-3 overflow-hidden">
          <div className="row">
          <div className="col p-0">
            <div className="col border rounded-3 overflow-hidden">
              <form>
                <div className="row">
                  <div className="col p-0">
                    <p className="text-center bgcolordash m-0 p-2 fw-bold">
                      POSTAL INWARD / DISPATCH LIST
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
                  <button className="btn border d-flex align-items-center gap-4 m-0">Dispatch (sent)<FaCaretDown className="fs-5"/></button>
                  </div>
                </div>
                <div className="row py-2 px-3">
                  <div className="col">
                    <ol>
                      <div className="row py-2">
                        <div className="col d-flex justify-content-between">
                          <li>Dispatch of test papers</li>
                          <span className="d-flex gap-4">
                          <FaPen className="fs-5 icons"/>
                          <RxCross1 className="fs-4 icons"/>
                          </span>
                        </div>
                      </div>
                      <div className="row py-2">
                        <div className="col d-flex justify-content-between">
                          <li>Dispatch of test papers</li>
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
                    <label htmlFor="">Postal Type: </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-2">
                    <label htmlFor="">Date: </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col">
                    <label htmlFor="">Address: </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row px-4 py-2 gap-5">
                  <div className="col-2">
                    <label htmlFor="">From: </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-2">
                    <label htmlFor="">To: </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col">
                    <label htmlFor="">Title: </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="row px-4 py-2 gap-5">
                  <div className="col-2">
                    <label htmlFor="">Reference No: </label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="col-4">
                    <label htmlFor="">Attach Document: </label>
                    <div className="border form-control d-flex justify-content-center align-items-center gap-2">
                    <FaCloudUploadAlt className="fs-4"/>Drag and drop a file or click
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

export default InwardDispatch;
