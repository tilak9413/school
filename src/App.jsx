import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Home from './components/home';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
       <div className='bg-light'>
      <div style={{ height: "100vh" }} className='container-fluid col-xl-12 p-0  '>
        <div className='row col-sm-12 p-0'>
   <Home />
   <div className='col-xl-10  position-absolute end-0 p-0'>
   <Outlet />
</div>
</div>
</div>
</div>

    </>
  );
};

export default App;
