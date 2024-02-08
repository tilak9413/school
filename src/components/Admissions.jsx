import React from 'react'
import InputComp from '../comp/InputComp'
import Navbar from '../comp/Navbar'
import Welcome from '../comp/Welcome'

function Admissions() {
  return (
    <>
<Navbar/>
<Welcome/>

      <div className="row border-bottom pb-5">
        <div className="col-sm-4">
          <InputComp name='WEBSITE TITLE'  />
        </div>
        <div className="col-sm-4">
          <InputComp name='OPEN/CLOSE TIME' />
        </div>
        <div className="col-sm-4">
          <InputComp name='BANK LOCATION CITY'  />
        </div>
      </div>

      <div className="bankingDetail position-relative pt-4   ">
        <div className="row">
          <div className="col-sm-4">
            <InputComp name='REGISTRATION NO.'  />
          </div>
          <div className="col-sm-4">
            <InputComp name='RBI LICENCE NO.'  />
          </div>
          <div className="col-sm-4">
            <InputComp name='BANK IFSC'  />
          </div>
        </div>
        <div className="row border-bottom pb-5 pt-3 ">
          <div className="col-sm-4">
            <InputComp name='PAN NO.'  />
          </div>
          <div className="col-sm-4">
            <InputComp name='TAN NO.'  />
          </div>
          <div className="col-sm-4">
            <InputComp name='GST NO.'  />
          </div>
        </div>
      </div>

      <div className=" position-relative  py-2 ">
        <div className="row border-bottom  pb-4">
          <div className="row mx-0 p-0  my-4">
            <div className="col-sm-4">
              <InputComp name='NET BANKING LINK'  />
            </div>
            <div className="col-sm-4">
              <InputComp name='ANDROID APPLICATION LINK'  />
            </div>
            <div className="col-sm-4">
              <InputComp name='IOS APPLICATION LINK' />
            </div>
          </div>
        </div>
      </div>

      <div className="SocailMedia position-relative ">
        <div className="row">
          <div className="row mx-0 p-0  my-4">
            <div className="col-sm-4">
              <InputComp name='FACEBOOK LINK' />
            </div>
            <div className="col-sm-4">
              <InputComp name='INSTAGRAM LINK'  />
            </div>
            <div className="col-sm-4">
              <InputComp name='TWITTER LINK'  />
            </div>
            <div className="col-sm-4 mt-3">
              <InputComp name='YOUTUBE LINK'  />
            </div>
          </div>
        </div>
      </div>
      </>
      )
}

      export default Admissions