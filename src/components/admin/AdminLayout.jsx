import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white">
                {/* Sidebar content */}
                <div className="py-4">
                    <Link to="/admin" className="px-4 py-2">Dashboard</Link>
                    {/* <div className="px-4 py-2">Orders</div>
                    <div className="px-4 py-2">Products</div>
                    <div className="px-4 py-2">Customers</div> */}
                </div>
            </div>

            {/* Main content */}
            <div className="w-3/4 h-screen bg-gray-100">
                <div className="p-12">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
