import React from 'react'
import Link from "next/link"
import { side } from "@/components/constants/index"
import { useRouter } from "next/router";
import Image from "next/image";


const SidebarItems = () => {
    const router = useRouter();

 const handleLogout = () => {
    // setUser(false);
    // localStorage.removeItem("token");
    // router.push("/aggregator/login");
  };


  return (
    <div className="bg-blue h-screen overflow-y-auto w-80">
      <div className="p-12">
        <Link href="/">
          <p className="text-black text-[30px] font-bold">GOO</p>
        </Link>
      </div>
      <ul className="px-12">
        {side.map((item, index) => (
          <Link href={`${item.url}`} key={index}>
          <li
            className={`flex gap-x-4 px-4 py-2 items-center rounded-[10px] ${
              item.spacing ? "mt-[90px]" : ""
            } ${router.pathname === item.url ? "bg-white " : ""}  `}
          >
            <Image
              src={item.img}
              alt=""
              className={`${router.pathname === item.url ? "filter" : ""} `}
            />
            <p
              className={`${
                router.pathname === item.url
                  ? "text-blue font-regular font-bold leading-[30px] text-[16px]"
                  : "text-white font-regular font-bold leading-[30px] text-[16px]"
              }`}
            >
              {item.label}
            </p>
          </li>
        </Link>
        ))}
      </ul>
      <p className="px-16 text-white font-regular font-bold leading-[30px] text-[16px]" onClick={handleLogout}>
        Logout
      </p>
    </div>
  );
};


export default SidebarItems