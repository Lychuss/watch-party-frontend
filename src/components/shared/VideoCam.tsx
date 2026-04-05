import { useState, useEffect, useRef, ChangeEvent } from "react";
import useWebRTC from "@/hooks/WebRTC";
import { socket } from "@/services/socket";
import { v4 as uuidv4 } from "uuid";

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
    const [id, setId] = useState('');
    const [roomId, setRoomId] = useState<string>("");

    const {
        start, 
        localStream, 
        remoteStream, 
        createOffer, 
        handleAnswer,
        handleCandidate, 
        handleOffer
        } = useWebRTC();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
    }

    const mouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX - 20,
                y: event.clientY - 20
            })
        };

    const createRoom = () => {
        const room = uuidv4();
        console.log(room);
        setRoomId(room);
        socket.emit("join-room", room);
        start(room);
    }

    const joinRoom = () => {
        socket.emit("join-room", id);
        start(id);
    }

    useEffect(() => {
        socket.on("offer", handleOffer);
        socket.on("answer", handleAnswer);
        socket.on("candidate", handleCandidate);

        return () =>{
            socket.off("offer");
            socket.off("answer");
            socket.off("candidate");
        };
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
            object-cover rounded-full aspect-square absolute top-20 right-40
            ${props.hidden ? "flex" : "hidden"}`}
            style={{ transform: click 
                ? `translate(${position.x}px, ${position.y}px) scaleX(-1)` 
                : `translate(${position.x}px, ${position.y}px) scaleX(-1)` }}
            onClick={() => {
                setClick(!click)
                }}
            ref={videoRef2}>
        </video>
        <button className="relative border-2 border-black cursor-pointer w-[200px] translate-y-230%" 
        onClick={() => createRoom()}>Create Room!</button>
        <button className="relative border-2 border-black cursor-pointer w-[200px] translate-y-230%" 
        onClick={() => createOffer()}>Click Offer!</button>
        <button className="relative border-2 border-black cursor-pointer w-[200px] translate-y-230%" 
        onClick={() => joinRoom()}>Join Room!</button>
        <input onChange={handleChange} type="text" placeholder="input room"></input>
    </>
}