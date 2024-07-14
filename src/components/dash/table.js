import React, { useState } from "react";
import AddItems from "@/components/modals/add";
import EditItems from "@/components/modals/edit";
import Delete from "@/components/modals/delete";


const Tablecontent = () => {
    const [items, setItems] = useState([
      { id: 1, name: "Item 1", description: "Description 1" },
      { id: 2, name: "Item 2", description: "Description 2" },
      { id: 3, name: "Item 3", description: "Description 3" },
      { id: 4, name: "Item 4", description: "Description 4" },
      { id: 5, name: "Item 5", description: "Description 5" },
      { id: 6, name: "Item 6", description: "Description 6" },
    ]);

      const openModal = (type, item = null) => {
        setModalType(type);
        setCurrentItem(item);
        setShow(true);
      };
    const [currentItem, setCurrentItem] = useState(null);
    const [show, setShow] = useState(false);
    const [modalType, setModalType] = useState("");

    const closeModal = () => {
      setShow(false);
      setCurrentItem(null);
    };


  const handleAdd = (newItem) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
    closeModal();
  };

  const handleEdit = (updatedItem) => {
    setItems(
      items.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
    closeModal();
  };

  return (
    <>
      {modalType === "add" && (
        <AddItems items={items} onClose={closeModal} onSubmit={handleAdd} />
      )}
      {modalType === "edit" && (
        <EditItems
          item={currentItem}
          onSubmit={handleEdit}
          onClose={closeModal}
        />
      )}
      {modalType === "delete" && (
        <Delete
          item={currentItem}
          onDelete={handleDelete}
          onClose={closeModal}
        />
      )}

      <div className="w-full md:w-full md:overflow-x-auto">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => openModal("add")}
        >
          Add Item
        </button>
        <table>
          <thead>
            <tr className="bg-shade">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i}>
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.description}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                    onClick={() => openModal("edit", item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-2 rounded"
                    onClick={() => openModal("delete", item)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tablecontent;