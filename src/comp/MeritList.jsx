import React from "react";
import "../assets/styledashboradcss/addmition.css";
import '../App.css'
function MeritList() {
  return (
    <div className="m-2 px-2 border shadow rounded">
      <div>
        <h6 className="text-success my-3 fw-semibold "> Check Marit List :</h6>
        <form>
          <div className="row px-sm-5 mx-sm-5   ">
            <div className="d-flex gap-3 align-items-center col-sm-6 mb-2 ">
              <label className="m-0 " htmlFor="">
                Application No. :
              </label>
              <input
                type="text"
                placeholder="Enter Application No... "
                className="inputit w-sm-50  "
              />
            </div>

            <div className="d-flex gap-3 align-items-center col-sm-6 ">
              <label className="m-0" htmlFor="">
                Date of Birth :{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Application No... "
                className="inputit w-50"
              />
            </div>

            <div className="d-flex gap-3 align-items-center col-sm-6  ">
              <label className="m-0" htmlFor="">
                Captcha Code :
              </label>
              <input
                type="text"
                placeholder="Enter Application No... "
                className="inputit w-50 mx-2"
              />
            </div>
          </div>
        </form>
        <hr />
        {/* <table className='table bg-white ' >
              <tr className='toptr'>
                <th style={{ width: "2%" }}>SR.NO </th>
                <th>GR NO.</th>
                <th>Student Name</th>
                <th>Father Name</th>
                <th>Date Of Birth</th>
                <th>Blood Group</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
            </table> */}
        <div className="row">
          <div className="col">
            <table class="table table-hover rounded-3 overflow-hidden">
              <thead className="bgcolordash">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeritList;
