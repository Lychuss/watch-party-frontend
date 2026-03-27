import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import {Linkedin} from "lucide-react";
import Button from "./Button";

export default function Footer(){
    return <>
    <div className="bg-[rgba(215,217,215,1)]">
    <div className="p-4 flex flex-col gap-3 border-t-4 border-black rounded-t-3xl bg-white 
    border-b-2 xl:items-center xl:justify-center">
      <h1 className="text-3xl font-bold text-left opacity-0 
      animate-[fadeUp_1.5s_ease-out_forwards] mt-3 text-left w-full max-w-[250px] xl:max-w-[650px]
      xl:text-5xl xl:text-center xl:mt-15 xl:mb-3">
        Built for connection by real moments</h1>
      <p className="opacity-0 animate-[fadeUp_1.5s_ease-out_forwards] w-full text-left max-w-[190px]
      xl:max-w-[400px] xl:text-xl xl:text-xl xl:text-center xl:mb-3">Enjoy and connect with each other</p>
      <Button className="bg-white mb-6 xl:w-[250px] px-5 py-3 
        shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 opacity-0 
        xl:mb-20 xl:text-xl" onClick={() => console.log()}>Sign Up</Button>
    </div>
  </div>
  <div className="p-4 flex gap-3 xl:p-15">
    <h1 className="text-xl font-bold mr-4 xl:text-2xl">WatchParty</h1>
    <div className="bg-black border border-black rounded-full w-[27px] xl:w-[33px] h-auto flex items-center
    justify-center">
        <Linkedin className="text-white w-[14px] xl:w-[18px]"></Linkedin>
    </div>
    <div className="bg-black border border-black rounded-full w-[27px] xl:w-[33px] h-auto flex items-center
    justify-center">
        <Facebook className="text-white w-[14px] xl:w-[18px]"></Facebook>
    </div>
    <div className="bg-black border border-black rounded-full w-[27px] xl:w-[33px] h-auto flex items-center
    justify-center">
        <Github className="text-white w-[14px] xl:w-[18px]"></Github>
    </div>
  </div>
  <div className="ml-4 xl:ml-15 xl:flex gap-20">
    <div className="mb-3 flex flex-col xl:gap-1">
      <h1 className="font-bold mb-2">Developer</h1>
      <p className="text-xs">Documentation</p>
      <p className="text-xs">API explorer</p>
      <p className="text-xs">SDK</p>
      <p className="text-xs">Discord Community</p>
    </div>
    <div className="mb-3 flex flex-col xl:gap-1">
      <h1 className="font-bold mb-2">Company</h1>
      <p className="text-xs">Careers</p>
      <p className="text-xs">Contact sales</p>
      <p className="text-xs">Privacy & security</p>
      <p className="text-xs">Legal policies</p>
    </div>
    <div className="mb-3 flex flex-col xl:gap-1">
      <h1 className="font-bold mb-2">About us</h1>
      <p className="text-xs">Leadership</p>
      <p className="text-xs">Newsroom</p>
      <p className="text-xs">Become a partner</p>
      <p className="text-xs">Contact us</p>
    </div>
  </div>
    <hr className="border border-gray-200 ml-2 mr-6 mt-3"></hr>
    <div className="text-[10px] text-left flex gap-3 flex-col my-4 p-4 xl:ml-11 w-full
    max-w-[300px] xl:max-w-[900px]">
        <p className="mb-4">*All references to other companies, systems, 
        software, and/or platforms are for illustrative purposes
        only and do not imply any affiliation with WatchParty.
        WatchParty assumes no liability for a customer's use
        of another company's product, system, software, 
        and/or platform, whether cloud-based or otherwise
        </p>
        <p>&copy; 2026 WatchParty Presence Inc.</p>
    </div>
    </>
}