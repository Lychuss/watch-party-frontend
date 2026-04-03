import { useRef, useState } from "react";

export default function useWebRTC(){
    const peerConnection = useRef<RTCPeerConnection | null>(null);

    const [localStream, setLocalStream] = useState<MediaStream | null>(null);
    const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

    const start = async () => {
        peerConnection.current = new RTCPeerConnection({
            iceServers:[
        {
            urls:['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
        },
    ],
        });

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });

        setLocalStream(stream);

        stream.getTracks().forEach(track => {
            peerConnection.current?.addTrack(track, stream);
        });

        peerConnection.current.ontrack = (event) => {
            setRemoteStream(event.streams[0]);
        };

        peerConnection.current.onicecandidate = (event) => {
            if(event.candidate){
                console.log("SEND CANDIDATE", event.candidate);
            }
        };
    };

    const createOffer = async () => {
        if(!peerConnection.current) throw new Error("PeerConnection already exist");

        const offer = await peerConnection.current?.createOffer();
        await peerConnection.current?.setLocalDescription(offer);

        console.log(offer, "created offer");
    }

    const handleOffer = async (offer: RTCSessionDescriptionInit) => {
        if(!peerConnection.current) throw new Error("PeerConnection already exist");

        await peerConnection.current.setRemoteDescription(
            new RTCSessionDescription(offer)
        )

        const answer = await peerConnection.current.createAnswer();

        await peerConnection.current.setLocalDescription(answer);

        console.log(answer, "CREATED ANSWER");  
    };

    const handleAnswer = async (answer: RTCSessionDescriptionInit) => {
        if(!peerConnection.current) throw new Error("PeerConnection already exist");

        await peerConnection.current.setRemoteDescription(
            new RTCSessionDescription(answer)
        );
    };

    const handleCandidate = async (candidate: RTCIceCandidateInit) => {
        if(!peerConnection.current) throw new Error("PeerConnection already exist");

        await peerConnection.current.addIceCandidate(
            new RTCIceCandidate(candidate)
        );
    };

    return {
        start,
        localStream,
        remoteStream,
        handleAnswer,
        handleCandidate,
        handleOffer,
        createOffer
    }
}