import { useRef } from "react";

type MyComponent = {
    src: string
}

export default function HoverVideo(props: MyComponent){
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleMouseEnter = () => {
        videoRef.current?.play();
    }

    const handleMouseLeave = () => {
        if(videoRef.current){
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <video
        ref = {videoRef}
        src={props.src}
        loop
        muted
        playsInline
        width="3000"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="cursor-pointer hover:scale-[350] p-5"
        >
        </video>
    );
}