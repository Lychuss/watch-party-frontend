"use client";

import Input from "@/components/forms/Input";
import Button from "@/components/ui/Button";
import Icons from "@/components/ui/Icons";
import { useRouter } from "next/navigation";

export default function SignUp(){
    const router = useRouter();

    return <div className="flex w-screen h-screen items-center justify-center bg-[rgba(203,148,177,0.8)]">
        <div className="flex flex-col w-full max-w-[575px] aspect-square bg-violet-400 px-12 py-8 gap-2 
            shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <h1 className="font-black text-2xl">Create Your Account</h1>
            <p className="text-sm mb-5">Let's get you set up with a new account in just a few steps</p>
            
            <Input htmlFor="Username" type="text" placeholder="Enter your Name" className="mb-3 h-[40px] p-3 rounded-lg bg-white">Username</Input>
            
            <Input htmlFor="Email" type="email" placeholder="Enter your email" className="mb-3 h-[40px] p-3 rounded-lg bg-white">Email</Input>
            
            <Input htmlFor="Password" type="password" placeholder="Enter your password" className="mb-2 h-[40px] p-3 rounded-lg bg-white">
                Password
            </Input>
            
            <div className="flex flex-col items-center justify-center gap-2">
                <Button className="shadow-[4px_4px_0_0] hover:bg-yellow-300 bg-[rgba(247,74,163,0.8)] max-w-[150px] h-[50px]
                    mx-auto mt-3">
                    Sign Up
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

                <p className="text-[12px]">Already have an account? <span className="border-b border-black cursor-pointer" 
                    onClick={() => router.push("/auth/login")}>
                    Sign in</span>
                </p>
            </div>
        </div>
        <div className="w-full max-w-[575px] aspect-square bg-[rgba(249,199,79,1)] shadow-[0_0_20px_rgba(255,255,255,0.5)] flex
            items-center justify-center">
            <img src="/images/serie.svg"></img>
        </div>
    </div>
}