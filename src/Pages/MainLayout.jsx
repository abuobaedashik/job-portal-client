import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar';


const MainLayout = () => {
    return (
        <div>
            <Navbar className='mx-auto w-11/12'></Navbar>
             <div className="mt-3 mb-6 mx-auto w-11/12">
              <Outlet></Outlet>
             </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;