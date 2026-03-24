"use client";
import { useState } from "react"
import Dropdown from "./Dropdown";

export default function Navbar(){
    const [dropDown, setDropdown] = useState<boolean>(false);
    return <>
    <nav className="flex fixed justify-between w-full p-3 border-b-2 border-black bg-violet-400 z-100 xl:p-3">
        <div className="flex items-center justify-center">
            <h1 className="text-xl text-black font-extrabold xl:text-3xl xl:mr-75 hover:text-white transition-all
            duration-300 cursor-pointer">WatchParty</h1>
            <ul className="hidden xl:flex gap-20 text-md font-bold self-center mr-80">
                <li className="hover:text-[rgba(241,196,15,1)] transition-all duration-300 cursor-pointer">HOME</li>
                <li className="hover:text-[rgba(241,196,15,1)] transition-all duration-300 cursor-pointer">ABOUT</li>
                <li className="hover:text-[rgba(241,196,15,1)] transition-all duration-300 cursor-pointer">ROOM</li>
            </ul>
            <button className="hidden xl:flex gap-3 border-2 border-black bg-white rounded-full px-5 py-3 font-semibold 
        text-black shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 opacity-0 
        animate-[fadeUp_1.5s_ease-out_forwards] focus:ring-yellow-300 focus:outline-0 w-full text-sm duration-300">
            USER ID
            <img src="/icons/user.svg" alt="user" className="w-[20px] h-auto"></img>
        </button>
        </div>
        <div className="lg:hidden">
            <img src="/icons/menus.svg" alt="menus" className={`w-full max-w-[25px] transition-all duration-300
     ease-[cubic-bezier(0.895,0.03,0.685,0.22)]
            ${dropDown ? "opacity-0" : "opacity-100"}`} onClick={() => setDropdown(!dropDown)}></img>
            <img src="/icons/reject.svg" alt="menus" className={`w-full absolute top-3 max-w-[25px] transition-all duration-300
     ease-[cubic-bezier(0.895,0.03,0.685,0.22)]
            ${dropDown ? "opacity-100" : "opacity-0"}`} onClick={() => setDropdown(!dropDown)}></img>
        </div>
    </nav>
    
    <Dropdown className={dropDown ? "opacity-100" : "opacity-0"}></Dropdown>
    </>
}