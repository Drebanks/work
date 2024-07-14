import React, {useState} from "react";
import ModalLayout from "@/components/layout/modal";


const AddItems = ({ item = {}, onSubmit, onClose }) => {
  const [name, setName] = useState(item.name || "");
  const [description, setDescription] = useState(item.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
      onSubmit({ ...item, name, description });
      onClose();
  };

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
            className="border border-gray py-2 rounded-[8px] px-4 w-full text-blue"
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
            Add
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default AddItems;
