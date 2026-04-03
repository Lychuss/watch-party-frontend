"use client";
import { ArrowLeft, Volume2, VolumeOff } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import Labels from "./Labels";
import VideoCam from "./VideoCam";

export default function Room(){
    const [volume, setVolume] = useState<boolean>(true);

    return <>
        <div className="flex translate-y-[70%] gap-3 w-full">      
            <Button className="flex w-[30px] aspect-square border rounded-full
                ml-3 items-center justify-center bg-white shadow-[1px_1px_0_0]">
                <ArrowLeft className="w-[20px] h-[20px]"></ArrowLeft>
            </Button>

            <Labels className="flex w-[200px] aspect-sqaure border rounded-full items-center
            justify-center bg-white text-sm">WASDA</Labels>

            <div className="flex justify-end w-full mr-2">
                <Button className={`flex max-w-[30px] aspect-square border rounded-full
                ml-3 items-center justify-center shadow-[1px_1px_0_0] p-1
                ${volume ? "bg-white" : "bg-[#D7D9D7]" }`}
                onClick={() => setVolume(!volume)}>
                    {volume 
                        ? <Volume2 className="w-[20px] h-[20px]" />
                        : <VolumeOff className="w-[20px] h-[20px]" />
                    }
                </Button>
            </div>
        </div>
        <VideoCam></VideoCam>
    </>
}