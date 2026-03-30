import Webcam from "react-webcam";
import { useState, useEffect, useRef } from "react";
import { createOffer } from "@/hooks/VideoRTC";

type Coordinates = {
    x: number | null,
    y: number | null
}

type MyComponents = {
    hidden: boolean;
}

export default function VideoCam(props: MyComponents){
    const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0});
    const [click, setClick] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const mouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX - 20,
                y: event.clientY - 20
            })
        };

    useEffect(() => {

        if(click){
            window.addEventListener("mousemove", mouseMove);
        }


        return () => window.removeEventListener("mousemove", mouseMove);

    }, [click]);

    return <>
         <Webcam mirrored className={`w-[100px] aspect-square
    object-cover rounded-full aspect-square absolute 
    ${props.hidden ? "flex" : "hidden"}`}
    style={{ transform: click 
        ? `translate(${position.x}px, ${position.y}px)` 
        : `translate(${position.x}px, ${position.y}px)` }}
    onClick={() => {
        setClick(!click)
        }}>

        </Webcam>
        <button className="relative border-2 border-black cursor-pointer w-[200px] translate-y-230%" onClick={() => createOffer(videoRef,"WASDSSD")}>Click Me!</button>
    </>
}