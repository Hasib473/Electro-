import React from 'react';
import Navbar from '../Component/Common/Navbar';
import Footer from '../Component/Common/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
             <Navbar/>
             <main className="flex-1">
                 <Outlet/>
             </main>
             <Footer/>
        </div>
    );
};

export default MainLayout;