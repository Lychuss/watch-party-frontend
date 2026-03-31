import { useState, useEffect, useRef } from "react";
import useWebRTC from "@/hooks/WebRTC";

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
    const videoRef1 = useRef<HTMLVideoElement | null>(null);
    const videoRef2 = useRef<HTMLVideoElement | null>(null);

    const {start, localStream, remoteStream, createOffer} = useWebRTC();

    const mouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX - 20,
                y: event.clientY - 20
            })
        };
    
    useEffect(() => {
        start();
    }, [])

    useEffect(() => {
        if(videoRef1.current && localStream){
            videoRef1.current.srcObject = localStream;
        }
    }, [localStream])

    useEffect(() => {
        if(videoRef2.current && remoteStream){
            videoRef2.current.srcObject = remoteStream;
        }
    }, [remoteStream])

    useEffect(() => {

        if(click){
            window.addEventListener("mousemove", mouseMove);
        }


        return () => window.removeEventListener("mousemove", mouseMove);

    }, [click]);

    return <>
        <video autoPlay playsInline className={`w-[100px] aspect-square
            object-cover rounded-full aspect-square absolute
            ${props.hidden ? "flex" : "hidden"}`}
            style={{ transform: click 
                ? `translate(${position.x}px, ${position.y}px) scaleX(-1)` 
                : `translate(${position.x}px, ${position.y}px) scaleX(-1)` }}
            onClick={() => {
                setClick(!click)
                }}
            ref={videoRef1}>
        </video>
        <video autoPlay playsInline className={`w-[100px] aspect-square
            object-cover rounded-full aspect-square absolute
            ${props.hidden ? "flex" : "hidden"}`}
            style={{ transform: click 
                ? `translate(${position.x}px, ${position.y}px)` 
                : `translate(${position.x}px, ${position.y}px)` }}
            onClick={() => {
                setClick(!click)
                }}
            ref={videoRef2}>
        </video>
        <button className="relative border-2 border-black cursor-pointer w-[200px] translate-y-230%" 
        onClick={() => createOffer()}>Click Offer!</button>
    </>
}