// ProductForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { HiPlusCircle } from "react-icons/hi";

Modal.setAppElement("#root"); // Set the root element for accessibility

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",  // Use an array to store selected category IDs
    description: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [categories, setCategories] = useState([]); // State to store categories

  useEffect(() => {
    // Fetch categories from your API endpoint
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/owner/category"); // Replace with your actual API endpoint
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/owner/product', formData); // Replace with your actual API endpoint
      setFormData({
        name: "",
        price: "",
        category: "",
        description: "Ini adalah" + formData.name,
      });
      closeModal();
      console.log('Product created!');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div>
      <button
        className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-sm"
        onClick={openModal}
      >
        <HiPlusCircle className="w-6 h-6 mr-2" />
        Add Product
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Form Modal"
        className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Create Product</h2>
            <form onSubmit={handleSubmit} className="mt-2">
              <label className="block">
                <span className="text-gray-700">Name:</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
              <label className="block">
              <span className="text-gray-700">Price:</span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
                />
              </label>
              <br />
              <label>
                Category:
                <select name="category" value={formData.category} onChange={handleChange} required>
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
              <br />
              <br />
              <button
                type="submit"
                className="flex items-center justify-center w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <HiPlusCircle className="w-6 h-6 mr-2" />
                Create Product
              </button>
            </form>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={closeModal}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProductForm;
