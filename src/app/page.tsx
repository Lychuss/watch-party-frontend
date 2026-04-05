"use client";

import Labels from "@/components/ui/Labels";
import Button from "@/components/ui/Button";
import Cards from "@/components/ui/Cards";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function Home(){
  return <>
  <Navbar />
  <div className="xl:flex">
    <div className="bg-[rgba(203,148,177,0.8)] flex flex-col items-center justify-center w-screen h-[400px]
    border-b-2 border-black xl:h-screen xl:p-20">
      <img src="/icons/welcome-icon.svg" alt="welcome" className="w-[250px] z-1 mt-10
      opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] xl:w-[350px] xl:mt-20"></img>
      <img src="/icons/paper-plane.svg" alt="thunder" className="w-[80px] absolute top-20 left-2 z-1
      opacity-0 animate-[fadeUp_1s_ease-out_forwards] xl:top-35 xl:w-[100px]"></img>
      <img src="/icons/flash.svg" alt="flash" className="w-[80px] absolute top-15 right-0 z-1
      opacity-0 animate-[fadeUp_1.2s_ease-out_forwards] xl:top-45 xl:w-[150px] xl:left-[31%]"></img>
      <Labels className="bg-[rgba(247,74,163,0.8)] opacity-0 xl:w-[320px] 
      xl:text-2xl animate-[fadeUp_1.5s_ease-out_forwards] text-center px-3 py-2.5">
        Stream Watch Together
      </Labels>
    </div>
    <div className="flex flex-col p-2 bg-[rgba(249,199,79,1)] gap-5 border-b-2 border-black xl:h-screen xl:p-25">
      <h1 className="text-5xl font-extrabold mt-3 opacity-0 
        animate-[fadeUp_1.5s_ease-out_forwards] xl:mt-15 xl:text-7xl">Where Friends <br></br>Meet Online
      </h1>
      <div className="xl:flex xl:gap-10">
        <Labels className="bg-[rgba(168,218,220,1)] tracking-wide mb-5 xl:tracking-widest opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards] xl:text-lg xl:p-5 xl:text-[15px] px-3 py-2.5"> 
          Step into a virtual space where you and your friends can watch movies, 
          listen to music, video call, share reactions, chat in real-time, 
          and create unforgettable moments together, no matter where you are in 
          the world.
        </Labels>
        <div className="flex items-center justify-center gap-20 xl:flex-col xl:gap-6 xl:w-[100px]">
          <img src="/icons/star.svg" className="w-[30px] opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards]"></img>
          <img src="/icons/star.svg" className="w-[30px] opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards]"></img>
          <img src="/icons/star.svg" className="w-[30px] opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards]"></img>
        </div>
      </div>
      <div className="flex items-center justify-center mb-5 xl:items-start xl:justify-start xl:max-w-[70%]">
        <Button className="bg-[rgba(241,196,15,1)] w-full rounded-l-full px-5 py-3 
        shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 opacity-0 "
          onClick={() => console.log()}>Read More</Button>
        <Button className="bg-[rgba(243,114,44,1)] w-full rounded-r-full px-5 py-3
        shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 opacity-0 " 
          onClick={() => console.log()}>Get Room</Button>
      </div>
    </div>
  </div>
  <div className="bg-[rgba(215,217,215,1)] p-4 flex flex-col items-center justify-center gap-3
    xl:gap-20">
    <h1 className="font-bold text-2xl xl:text-5xl xl:mt-5 text-center opacity-0 animate-[fadeUp_1.5s_ease-out_forwards] xl:text-4xl xl:p-5">
      Watch, play, chat, create</h1>
    <Cards header="Communication" message="Users can instantly join shared rooms where they 
    can video call, chat in real time, watch content together, and interact naturally as 
    if they are in the same place." src="/videos/communication.mp4"></Cards>
    <Cards header="Applications" message="This platform is fully web-based, so users can access it
     anytime through their mobile phones or laptops without installing anything, making connection
      simple and instantly available anywhere." src="/videos/application.mp4"></Cards>
    <Cards header="SaaS" message="Enjoy a completely free experience with no ads, no subscriptions,
     and no hidden fees just seamless with fun communication and shared moments, accessible to everyone 
     anytime." src="/videos/saas.mp4"></Cards>
  </div>
  <Footer></Footer>
  </>
}