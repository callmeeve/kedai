import React from 'react';
import { HiPlusCircle } from 'react-icons/hi'

const Dashboard = () => {

    const status = {
        tersedia: "Tersedia",
        habis: "Habis",
    }

    const categories = {
        makanan: "Makanan",
        minuman: "Minuman",
    }

    // Sample data for products table
    const products = [
        { id: 1, name: 'Product 1', price: 10, stock: status.tersedia, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", categories: categories.makanan },
        { id: 2, name: 'Product 2', price: 20, stock: status.habis, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", categories: categories.minuman },
        { id: 3, name: 'Product 3', price: 30, stock: status.tersedia, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", categories: categories.makanan },
    ];

    return (
        <div className="container mx-auto">
            <div className="mb-8">
                <div className="flex flex-wrao justify-between items-center mb-8">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-semibold">Products</h2>
                        <p className="text-gray-500">A list of all the products including the name, description, price, and stock </p>
                    </div>
                    <button className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-sm">
                        <HiPlusCircle className="w-6 h-6 mr-2" />
                        Add Product
                    </button>
                </div>
                <table className="min-w-full divide-y divide-gray-200 overflow-x-auto">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3 "/>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{product.price}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.stock === 'Habis' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                        {product.stock}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {product.categories}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {product.description}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;

