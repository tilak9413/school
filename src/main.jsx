import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/home.jsx";
import Register from "./components/Register.jsx";
import Contextprovider from "./context/loginContext/contextprovider.jsx";
import Dashborad from "./components/Dashborad.jsx";
import Office from "./components/office.jsx";
import Account from "./components/Account.jsx";
import Admissions from "./components/Admissions.jsx";
import Class from "./components/Class.jsx";
import Exams from "./components/exams.jsx";
import Fees from "./components/Fees.jsx";
import Staffpayroll from "./components/staffpayroll.jsx";
import Student from "./components/Student.jsx";
import Attendence from "./components/Attendence.jsx";
import { OfficeContextProvider } from "./context/OfficeContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Dashborad />} />
        <Route path="office" element={<Office />} />
        <Route path="account" element={<Account />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="class" element={<Class />} />
        <Route path="exams" element={<Exams />} />
        <Route path="fees" element={<Fees />} />
        <Route path="staffpayroll" element={<Staffpayroll />} />
        <Route path="student" element={<Student />} />
        <Route path="attendance" element={<Attendence />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="Register" element={<Register />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Contextprovider>
      <OfficeContextProvider>
        <RouterProvider router={router} />
      </OfficeContextProvider>
    </Contextprovider>
  </>
);
