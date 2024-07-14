import React, {useState} from "react";
import ModalLayout from "@/components/layout/modal";


const AddItems = ({ item = {}, onSubmit, onClose }) => {
  const [firstName, setFirstName] = useState(item.firstName || "");
  const [lastName, setLastName] = useState(item.lastName || "");
  const [email, setEmail] = useState(item.email || "");
  const [gender, setGender] = useState(item.gender || "");

  const handleSubmit = (e) => {
    e.preventDefault();
      onSubmit({ ...item, firstName, lastName, gender, email });
      onClose();
  };

  return (
    <ModalLayout>
      <form onSubmit={handleSubmit} className="p-4">
        <h2 className="text-lg font-bold mb-4">
          {item.id ? "Edit Item" : "Add Item"}
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray py-2 rounded-[8px] px-4 w-full text-blue"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray rounded-[8px] py-2 px-4 w-full text-blue"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray rounded-[8px] py-2 px-4 w-full text-blue"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Gender</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
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
