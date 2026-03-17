"use client";
import { Button } from "@/components/ui/button"
export default function Home(){
  return <div className="flex items-center justify-center flex-col w-screen h-screen gap-7 p-7">
    <img src="/icons/welcome-icon.svg" alt="welcome" className="max-w-xs h-auto"></img>
    <h1 className="text-2xl self-start font-bold">Welcome in <span className='text-[rgba(255,195,18,1)]
    font-semibold'>WatchParty</span></h1>
    <Button>Default</Button>
  </div>
}