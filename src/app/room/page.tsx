"use client";

import Room from "@/components/Room";
import Tools from "@/components/Tools";

export default function RoomPage(){
    return <div className="flex flex-col bg-[url('/images/room-example.jpg')]
     bg-cover bg-center w-screen h-screen">
        <Room></Room>
        <Tools></Tools>
    </div>
}