import Webcam from "react-webcam";
import { useState, useEffect } from "react";

type Coordinates = {
    x: number | null,
    y: number | null
}

export default function VideoCam(){
    const [position, setPosition] = useState<Coordinates>({ x: 0, y: 0});
    const [click, setClick] = useState<boolean>(false);

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
         <Webcam mirrored className="w-[100px] aspect-square
    object-cover rounded-full aspect-square absolute"
    style={{ transform: click 
        ? `translate(${position.x}px, ${position.y}px)` 
        : `translate(${position.x}px, ${position.y}px)` }}
    onClick={() => {
        setClick(!click)
        }}></Webcam>
    
    <h1 className="mt-5">{position.x + " what the " + position.y + " " + click}</h1>
    </>
}