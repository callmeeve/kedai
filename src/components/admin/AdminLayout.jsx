import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { HiViewGrid } from 'react-icons/hi';

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="flex flex-col w-64 bg-gray-900 text-white">
                {/* Sidebar header */}
                <div className="flex items-center justify-center p-4">
                    <h1 className="text-white text-xl font-bold uppercase">Admin</h1>
                </div>
                {/* Sidebar content */}
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <div className="flex-1 px-2 py-4">
                        <Link to="/admin" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg"><HiViewGrid className='w-6 h-6 mr-2' />Dashboard</Link>
                        {/* <div className="px-4 py-2">Orders</div>
                    <div className="px-4 py-2">Products</div>
                    <div className="px-4 py-2">Customers</div> */}
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="w-full bg-gray-100">
                <div className="flex flex-col flex-1 overflow-y-auto p-24">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
