"use client";
import { useState } from "react"
import Dropdown from "./Dropdown";

export default function Navbar(){
    const [dropDown, setDropdown] = useState<boolean>(false);
    return <>
    <nav className="flex fixed justify-between w-full p-3 border-b-2 border-black bg-violet-400 z-100">
        <div>
            <h1 className="text-xl text-black font-extrabold">WatchParty</h1>
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