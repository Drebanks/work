import React, { useState } from "react";
import AddItems from "@/components/modals/add";
import EditItems from "@/components/modals/edit";
import Delete from "@/components/modals/delete";
import Search from "@/assets/images/search-normal.svg";
import Image from "next/image";
import axios from "axios";

const Tablecontent = () => {
  const initialItems = [
    {
      id: 1,
      firstName: "Dasha",
      lastName: "Goakes",
      email: "dgoakes0@163.com",
      gender: "Female",
      ip_address: "2.118.35.25",
    },
    {
      id: 2,
      firstName: "Sidonnie",
      lastName: "Thumim",
      email: "sthumim1@theguardian.com",
      gender: "Female",
      ip_address: "146.201.56.221",
    },
    {
      id: 3,
      firstName: "Yancey",
      lastName: "Samuel",
      email: "ysamuel2@nhs.uk",
      gender: "Male",
      ip_address: "34.250.46.67",
    },
    {
      id: 4,
      firstName: "Catlaina",
      lastName: "Thirtle",
      email: "cthirtle3@reverbnation.com",
      gender: "Female",
      ip_address: "38.189.106.248",
    },
    {
      id: 5,
      firstName: "Devinne",
      lastName: "Bullivent",
      email: "dbullivent4@wufoo.com",
      gender: "Female",
      ip_address: "26.48.160.90",
    },
    {
      id: 6,
      firstName: "Shurlock",
      lastName: "Begg",
      email: "sbegg5@delicious.com",
      gender: "Male",
      ip_address: "149.208.57.35",
    },
    {
      id: 7,
      firstName: "Weylin",
      lastName: "Clemenza",
      email: "wclemenza6@ucsd.edu",
      gender: "Male",
      ip_address: "34.189.50.58",
    },
    {
      id: 8,
      firstName: "Maria",
      lastName: "Colliard",
      email: "mcolliard7@domainmarket.com",
      gender: "Female",
      ip_address: "196.144.10.171",
    },
    {
      id: 9,
      firstName: "Perl",
      lastName: "Cathcart",
      email: "pcathcart8@moonfruit.com",
      gender: "Female",
      ip_address: "179.72.212.170",
    },
    {
      id: 10,
      firstName: "Kurt",
      lastName: "Ettridge",
      email: "kettridge9@storify.com",
      gender: "Male",
      ip_address: "131.150.194.168",
    },
    {
      id: 11,
      firstName: "Ali",
      lastName: "Odby",
      email: "aodbya@va.gov",
      gender: "Male",
      ip_address: "231.98.145.35",
    },
    {
      id: 12,
      firstName: "Delly",
      lastName: "McVittie",
      email: "dmcvittieb@theguardian.com",
      gender: "Female",
      ip_address: "95.162.251.54",
    },
    {
      id: 13,
      firstName: "Cooper",
      lastName: "Figgures",
      email: "cfigguresc@so-net.ne.jp",
      gender: "Male",
      ip_address: "107.249.126.33",
    },
    {
      id: 14,
      firstName: "Beverlee",
      lastName: "Seiter",
      email: "bseiterd@webnode.com",
      gender: "Female",
      ip_address: "7.189.64.66",
    },
    {
      id: 15,
      firstName: "Wileen",
      lastName: "Penley",
      email: "wpenleye@shutterfly.com",
      gender: "Female",
      ip_address: "69.100.69.18",
    },
    {
      id: 16,
      firstName: "Zora",
      lastName: "Peter",
      email: "zpeterf@kickstarter.com",
      gender: "Female",
      ip_address: "22.217.26.97",
    },
    {
      id: 17,
      firstName: "Jude",
      lastName: "Louys",
      email: "jlouysg@merriam-webster.com",
      gender: "Male",
      ip_address: "185.236.37.159",
    },
  ];

  const [filteredItems, setFilteredItems] = useState(initialItems);
  const [currentItem, setCurrentItem] = useState(null);
  const [modalType, setModalType] = useState("");
    const [selected, setSelected] = useState("default");
  
    //  useEffect(() => {
    //    // Fetch items from an API endpoint
    //    axios
    //      .get("https://api.example.com/items")
    //      .then((response) => {
    //        setItems(response.data);
    //        setFilteredItems(response.data); // Initialize filteredItems as well
    //      })
    //      .catch((error) => {
    //        console.error("Error fetching items:", error);
    //      });
    //  }, []);

  const openModal = (type, item = null) => {
    setModalType(type);
    setCurrentItem(item);
  };

  const closeModal = () => {
    setModalType("");
    setCurrentItem(null);
  };

  const handleAdd = (newItem) => {
    setFilteredItems([
      ...filteredItems,
      { ...newItem, id: filteredItems.length + 1 },
    ]);
    closeModal();
  };

  const handleEdit = (updatedItem) => {
    setFilteredItems(
      filteredItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    closeModal();
  };

  const handleDelete = (id) => {
    setFilteredItems(filteredItems.filter((item) => item.id !== id));
    closeModal();
  };

  const handleSelect = (e) => {
    const selectedValue = e.target.value.toLowerCase(); // Ensure lowercase
    setSelected(selectedValue);
    filterItems(selectedValue); // Call filtering function
  };

  const filterItems = (selectedValue) => {
    if (selectedValue === "default") {
      setFilteredItems(initialItems); // Show all items
    } else {
      const filteredData = initialItems.filter(
        (item) => item.gender.toLowerCase() === selectedValue
      );
      setFilteredItems(filteredData);
    }
  };

  const handleFilter = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredData = initialItems.filter((item) =>
      item.firstName.toLowerCase().includes(keyword) ||
      item.lastName.toLowerCase().includes(keyword)
    );
    setFilteredItems(filteredData);
  };


  return (
    <>
      {/* Modals */}
      {modalType === "add" && (
        <AddItems
          items={filteredItems}
          onClose={closeModal}
          onSubmit={handleAdd}
        />
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

      <div className="flex justify-end gap-x-4 mb-4">
      <button
        className="bg-blue text-white py-2 px-4 rounded mb-4"
        onClick={() => openModal("add")}
      >
        Add Item
      </button>
        <div className="relative">
          <select
            className="h-[43px] px-4 py-2 border-[2px] border-[#E6EAEE] rounded-[10px] text-[#666473]"
            value={selected}
            onChange={handleSelect}
          >
            <option value="default">All Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="rounded-[8px] h-[43px] w-full max-w-[250px] border-[1px] border-lilac pl-8 py-4"
            onChange={handleFilter}
          />
          <div className="absolute top-3 left-2">
            <Image src={Search} alt="Search" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full md:w-full md:overflow-x-auto">
        <table className="w-full m-auto border-[1px] border-lightGren">
          <thead>
            <tr className="bg-shade">
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">First Name</th>
              <th className="py-2 px-4 border-b text-left">Last Name</th>
              <th className="py-2 px-4 border-b text-left">Email Address</th>
              <th className="py-2 px-4 border-b text-left">Gender</th>
              <th className="py-2 px-4 border-b text-left">Ip Address</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.slice(0, 50).map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-left text-black font-semibold opacity-50">
                  {item.id}
                </td>
                <td className="py-2 px-4 border-b text-left text-black font-semibold opacity-50">
                  {item.firstName}
                </td>
                <td className="py-2 px-4 border-b text-left text-black font-semibold opacity-50">
                  {item.lastName}
                </td>
                <td className="py-2 px-4 border-b text-left text-black font-semibold opacity-50">
                  {item.email}
                </td>
                <td className="py-2 px-4 border-b text-left text-black font-semibold opacity-50">
                  {item.gender}
                </td>
                <td className="py-2 px-4 border-b text-left text-black font-semibold opacity-50">
                  {item.ip_address}
                </td>
                <td className="py-2 px-4 border-b text-left text-black font-semibold">
                  <button
                    className="bg-border text-white py-1 px-2 rounded mr-2"
                    onClick={() => openModal("edit", item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red text-white py-1 px-2 rounded"
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
