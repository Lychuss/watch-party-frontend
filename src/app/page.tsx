"use client";
import Labels from "@/components/Labels";
import Button from "@/components/Button";
export default function Home(){
  return <>
  <div className="bg-[rgba(203,148,177,0.8)] flex flex-col items-center justify-center w-screen h-[400px]
  border-b-2 border-black">
    <img src="/icons/welcome-icon.svg" alt="welcome" className="w-[250px] z-1 mt-10"></img>
    <img src="/icons/paper-plane.svg" alt="thunder" className="w-[80px] absolute top-20 left-2 z-1"></img>
    <img src="/icons/flash.svg" alt="flash" className="w-[80px] absolute top-15 right-0 z-1"></img>
    <Labels label="Stream Watch Together" bg="bg-[rgba(247,74,163,0.8)]"></Labels>
  </div>
  <div className="flex flex-col p-2 bg-[rgba(249,199,79,1)] gap-5">
    <h1 className="text-5xl font-extrabold mt-3">Where Friends Meet Online</h1>
    <Labels label="Step into a virtual space where you and your friends can watch movies, 
    listen to music, video call, share reactions, chat in real-time, 
    and create unforgettable moments together, no matter where you are in 
    the world." bg="bg-[rgba(168,218,220,1)] tracking-wide"></Labels>
    <div className="flex items-center justify-center gap-20">
      <img src="/icons/star.svg" className="w-[30px]"></img>
      <img src="/icons/star.svg" className="w-[30px]"></img>
      <img src="/icons/star.svg" className="w-[30px]"></img>
    </div>
    <div>
      <Button label="Read More" background="bg-[rgba(241,196,15,1)] max-w-[150px] rounded-l-full" onClick={() => console.log()}></Button>
      <Button label="Get Room" background="bg-[rgba(243,114,44,1)] max-w-[150px] rounded-r-full" onClick={() => console.log()}></Button>
    </div>
  </div>
  </>
}