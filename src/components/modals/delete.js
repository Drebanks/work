import React from "react";
import ModalLayout from "@/components/layout/modal";


const Delete = ({ item, onDelete, onClose }) => {
    if (!item) return null;
  return (
    <ModalLayout>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Delete Item</h2>
        <p>Are you sure you want to delete {item.name}</p>
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="bg-thinGrey text-white py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onDelete(item.id)}
            className="bg-red text-white py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default Delete;
