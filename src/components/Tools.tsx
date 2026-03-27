"use client";

import { Video, VideoOff, Mic, MicOff, Music, Settings2, PhoneOff } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

export default function Tools(){
    const [mic, setMic] = useState<boolean>(true);
    const [video, setVideo] = useState<boolean>(true);
    const [music, setMusic] = useState<boolean>(true);
    const [phone, setPhone] = useState<boolean>(true);
    const [setting, setSetting] = useState<boolean>(true);

    return <div className="flex fixed bottom-10 self-center bg-[rgba(168,218,220,1)] p-3
    rounded-xl gap-2 items-center justify-center animate-[fadeUp_1.5s_ease-out_forwards] 
    shadow-[5px_5px_0_0]">
        <Button className={`flex w-[50px] aspect-square border rounded-full
            ml-3 items-center justify-center shadow-[1px_1px_0_0]
            ${video ? "bg-[rgba(249,199,79,1)]" : "bg-[#D7D9D7]" }`}
            onClick={() => setVideo(!video)}>
                {video
                    ? <Video></Video>
                    : <VideoOff></VideoOff>
                }
        </Button>

        <Button className={`flex w-[50px] aspect-square border rounded-full
            items-center justify-center shadow-[1px_1px_0_0]
            ${mic ? "bg-[rgba(249,199,79,1)]" : "bg-[#D7D9D7]" }`}
            onClick={() => setMic(!mic)}>
                {mic
                    ? <Mic></Mic>
                    : <MicOff></MicOff>
                }
        </Button>

        <Button className={`flex w-[50px] aspect-square border rounded-full
            items-center justify-center shadow-[1px_1px_0_0]
            ${music ? "bg-[rgba(249,199,79,1)]" : "bg-[#9A8C98]" }`}
            onClick={() => setMusic(!music)}>
                <Music></Music>
        </Button>

        <Button className={`flex w-[50px] aspect-square border rounded-full
            items-center justify-center shadow-[1px_1px_0_0]
            ${setting ? "bg-[rgba(249,199,79,1)]" : "bg-[#9A8C98]" }`}
            onClick={() => setSetting(!setting)}>
                <Settings2></Settings2>
        </Button>

        <div className="border-l-2 h-[20px]">
        </div>

        <Button className="flex w-[50px] aspect-square border rounded-full
         items-center justify-center shadow-[1px_1px_0_0] 
            bg-[#FF6F61]"
            onClick={() => setPhone(!phone)}>
                <PhoneOff></PhoneOff>
        </Button>
    </div>
}