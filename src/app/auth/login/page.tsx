"use client";

import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";
import Icons from "@/components/ui/Icons";
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter();

    return <div className="flex w-screen h-screen items-center justify-center bg-[rgba(203,148,177,0.8)]">
        <div className="w-full max-w-[575px] aspect-square bg-[#FF6F61] shadow-[0_0_20px_rgba(255,255,255,0.5)] flex
        items-center justify-center">
            <img src="/images/movie-night.svg"></img>
        </div>
        <div className="flex flex-col w-full max-w-[575px] aspect-square bg-[#2A9D8F] px-12 py-15 gap-2 
            shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <h1 className="font-black text-2xl">Login to WatchParty</h1>
            <p className="text-sm mb-5">Enjoy and meet with your friends via creating rooms!</p>
            
            <Input htmlFor="Username" type="text" placeholder="Enter your Name" className="mb-3 h-[40px] p-3 rounded-lg bg-white">Username</Input>
            
            <Input htmlFor="Password" type="password" placeholder="Enter your password" className="mb-2 h-[40px] p-3 rounded-lg bg-white">
                Password
            </Input>
            
            <div className="flex flex-col items-center justify-center gap-2">
                <Button className="shadow-[4px_4px_0_0] hover:bg-yellow-300 bg-[#D77D00] max-w-[150px] h-[50px]
                    mx-auto mt-3">
                    Login
                </Button>
                <p>or</p>

                <div className="flex gap-2">
                    <Icons src="/icons/facebook.svg" className="bg-[rgba(233,166,111,0.8)] shadow-[2px_2px_0_0] 
                        focus:ring-2 focus:ring-yellow-300 rounded-md ">
                    </Icons>
                    <Icons src="/icons/google.svg" className="bg-[rgba(233,166,111,0.8)] shadow-[2px_2px_0_0] 
                        focus:ring-2 focus:ring-yellow-300 rounded-md ">
                    </Icons>
                    <Icons src="/icons/twitter.svg" className="bg-[rgba(233,166,111,0.8)] shadow-[2px_2px_0_0] 
                        focus:ring-2 focus:ring-yellow-300 rounded-md ">
                    </Icons>
                </div>

                <p className="text-[12px] border-b border-black cursor-pointer">Forgot Password</p>
                <p className="text-[12px]">Don't have an account? <span className="border-b border-black cursor-pointer" 
                    onClick={() => router.push("/auth/sign-up")}>
                    Sign up</span>
                </p>
            </div>
        </div>
    </div>
}