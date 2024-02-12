import React from "react";
import { useState } from "react";
import Permission from "../comp/Permission";
import Navbar from "../comp/Navbar";
import InwardDispatch from "../comp/InwardDispatch";
import Gatepass from "../comp/Gatepass";
import Complaint from "../comp/Complaint";
import { useContext } from "react";
import { OfficeContext } from "../context/OfficeContext"; 

const office = () => {
  const {setofficeindex,officeindex } = useContext(OfficeContext);

  return (
    <>
    <Navbar />
{
  officeindex == 0 ? <Permission/> : officeindex ==  1 ? <InwardDispatch/> : officeindex ==  2 ? <Gatepass/> : <Complaint/>
}
    </>
  );
};

export default office;
