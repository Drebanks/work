import React from "react";



const ModalLayout = ({children}) => {
  return (
    <div className="bg-background overflow-y-auto fixed top-0 bottom-0 left-0 w-screen z-[1000] md:px-[20px]">
      <div className="min-h-screen flex">
        <div className="self-start  rounded-[20px] p-6 m-[6rem_auto] bg-[#FAFAFA] ">
          <div className="modal_form shadow-white bg-[#FFFFFF] rounded-3xl relative">
            <div className="p-6 w-[606px] h-[500px]">
              {children}
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}
export default ModalLayout;