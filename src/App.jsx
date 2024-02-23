import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Home from './components/home';
import { Outlet } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
  return (
    <>
       <div className='bg-white'>
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
