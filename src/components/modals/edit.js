import React, { useState, useEffect } from "react";
import ModalLayout from "@/components/layout/modal";

const EditItems = ({ item = {}, onSubmit, onClose }) => {
  // State to hold name and description
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Effect to update state when item changes
  useEffect(() => {
    if (item) {
      setName(item.name || "");
      setDescription(item.description || "");
    }
  }, [item]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...item, name, description });
  };

  // Guard against null or undefined item
  if (!item) return null;

  return (
    <ModalLayout>
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-lg font-bold mb-4">
          {item.id ? "Edit Item" : "Add Item"}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray rounded-[8px] py-2 px-4 w-full text-blue"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray rounded-[8px] py-2 px-4 w-full text-blue"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-thinGrey text-white py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue text-white py-2 px-4 rounded"
          >
            {item.id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default EditItems;
