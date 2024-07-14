import React from 'react'

const Header = () => {
  return (
    <header className="bg-deepBlue w-[calc(100vw_-_300px)] p-8 fixed top-0 left-[300px] right-0 h-[80px] shadow-md z-50">
      <div className="bg-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center">
        <p className="text-right font-bold text-[12px] text-white">H.0</p>
      </div>
    </header>
  )
}

export default Header