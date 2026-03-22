"use client";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import {Linkedin} from "lucide-react";
import Labels from "@/components/Labels";
import Button from "@/components/Button";
import Cards from "@/components/Cards";

export default function Home(){
  return <>
  <div className="xl:flex">
    <div className="bg-[rgba(203,148,177,0.8)] flex flex-col items-center justify-center w-screen h-[400px]
    border-b-2 border-black xl:h-screen xl:p-20">
      <img src="/icons/welcome-icon.svg" alt="welcome" className="w-[250px] z-1 mt-10
      opacity-0 animate-[fadeUp_0.8s_ease-out_forwards] xl:w-[350px] xl:mt-20"></img>
      <img src="/icons/paper-plane.svg" alt="thunder" className="w-[80px] absolute top-20 left-2 z-1
      opacity-0 animate-[fadeUp_1s_ease-out_forwards] xl:top-35 xl:w-[100px]"></img>
      <img src="/icons/flash.svg" alt="flash" className="w-[80px] absolute top-15 right-0 z-1
      opacity-0 animate-[fadeUp_1.2s_ease-out_forwards] xl:top-45 xl:w-[150px] xl:left-[31%]"></img>
      <Labels label="Stream Watch Together" bg="bg-[rgba(247,74,163,0.8)] opacity-0 xl:w-[320px] 
      xl:text-2xl animate-[fadeUp_1.5s_ease-out_forwards] text-center"></Labels>
    </div>
    <div className="flex flex-col p-2 bg-[rgba(249,199,79,1)] gap-5 border-b-2 border-black xl:h-screen xl:p-25">
      <h1 className="text-5xl font-extrabold mt-3 opacity-0 
        animate-[fadeUp_1.5s_ease-out_forwards] xl:mt-20 xl:text-6xl">Where Friends <br></br>Meet Online
      </h1>
      <div className="xl:flex xl:gap-10">
        <Labels label="Step into a virtual space where you and your friends can watch movies, 
          listen to music, video call, share reactions, chat in real-time, 
          and create unforgettable moments together, no matter where you are in 
          the world." bg="bg-[rgba(168,218,220,1)] tracking-wide opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards] xl:text-lg xl:p-7"> 
        </Labels>
        <div className="flex items-center justify-center gap-20 xl:flex-col xl:gap-15 xl:w-[100px]">
          <img src="/icons/star.svg" className="w-[30px] opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards]"></img>
          <img src="/icons/star.svg" className="w-[30px] opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards]"></img>
          <img src="/icons/star.svg" className="w-[30px] opacity-0 
          animate-[fadeUp_1.5s_ease-out_forwards]"></img>
        </div>
      </div>
      <div className="flex items-center justify-center mb-5">
        <Button label="Read More" background="bg-[rgba(241,196,15,1)] max-w-[150px] rounded-l-full"
          onClick={() => console.log()}></Button>
        <Button label="Get Room" background="bg-[rgba(243,114,44,1)] max-w-[150px] rounded-r-full" 
          onClick={() => console.log()}></Button>
      </div>
    </div>
  </div>
  <div className="bg-[rgba(215,217,215,1)] p-4 flex flex-col items-center justify-center gap-3">
    <h1 className="font-bold text-2xl text-center opacity-0 animate-[fadeUp_1.5s_ease-out_forwards]">
      Watch, play, chat, create</h1>
    <Cards header="Communication" message="Users can instantly join shared rooms where they 
    can video call, chat in real time, watch content together, and interact naturally as 
    if they are in the same place."></Cards>
    <Cards header="Applications" message="This platform is fully web-based, so users can access it
     anytime through their mobile phones or laptops without installing anything, making connection
      simple and instantly available anywhere."></Cards>
    <Cards header="SaaS" message="Enjoy a completely free experience with no ads, no subscriptions,
     and no hidden fees just seamless with fun communication and shared moments, accessible to everyone 
     anytime."></Cards>
  </div>
  <div className="bg-[rgba(215,217,215,1)]">
    <div className="p-4 flex flex-col gap-3 border-t-4 border-black rounded-t-3xl bg-white border-b-2">
      <h1 className="text-3xl font-bold text-left opacity-0 
      animate-[fadeUp_1.5s_ease-out_forwards] mt-3">Built for<br></br>connection by<br></br> 
      real moments</h1>
      <p className="opacity-0 animate-[fadeUp_1.5s_ease-out_forwards]">Enjoy and connect<br></br>with each other</p>
      <Button label="Sign Up" background="bg-white mb-6" onClick={() => console.log()}></Button>
    </div>
  </div>
  <div className="p-4 flex gap-3">
    <h1 className="text-xl font-bold mr-4">WatchParty</h1>
    <div className="bg-black border border-black rounded-full w-[27px] h-auto flex items-center
    justify-center">
        <Linkedin className="text-white w-[14px]"></Linkedin>
    </div>
    <div className="bg-black border border-black rounded-full w-[27px] h-auto flex items-center
    justify-center">
        <Facebook className="text-white w-[14px]"></Facebook>
    </div>
    <div className="bg-black border border-black rounded-full w-[27px] h-auto flex items-center
    justify-center">
        <Github className="text-white w-[14px]"></Github>
    </div>
  </div>
  <div className="ml-4">
    <div className="mb-3">
      <h1 className="font-bold mb-2">Developer</h1>
      <p className="text-xs">Documentation</p>
      <p className="text-xs">API explorer</p>
      <p className="text-xs">SDK</p>
      <p className="text-xs">WatchParty Discord Community</p>
    </div>
    <div className="mb-3">
      <h1 className="font-bold mb-2">Company</h1>
      <p className="text-xs">Careers</p>
      <p className="text-xs">Contact sales</p>
      <p className="text-xs">Privacy & security</p>
      <p className="text-xs">Legal policies</p>
    </div>
    <div>
      <h1 className="font-bold mb-2">About us</h1>
      <p className="text-xs">Leadership</p>
      <p className="text-xs">Newsroom</p>
      <p className="text-xs">Become a partner</p>
      <p className="text-xs">Contact us</p>
    </div>
    <hr className="border border-gray-200 ml-2 mr-6 mt-3"></hr>
    <div className="text-[10px] text-left flex gap-3 flex-col my-4">
      <p>*All references to other companies, systems, 
        <br></br>software, and/or platforms are for illustrative purposes
        <br></br>only and do not imply any affiliation with WatchParty.
        <br></br>WatchParty assumes no liability for a customer's use
        <br></br>of another company's product, system, software, 
        <br></br>and/or platform, whether cloud-based or otherwise
      </p>
      <p>&copy; 2026 WatchParty Presence Inc.</p>
    </div>
  </div>
  </>
}