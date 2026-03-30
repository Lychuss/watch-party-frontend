import { RefObject } from "react";
let localStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
let remoteStream = new MediaStream();

let servers = {
    iceServers:[
        {
            urls:['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
        }
    ]
}

let peerConnection = new RTCPeerConnection(servers);

export async function createOffer(videoRef: RefObject<HTMLVideoElement | null>, roomId: string){
    createPeerConnection(roomId, videoRef);

    let offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    return offer;
}

function createPeerConnection(roomId: string, videoRef: RefObject<HTMLVideoElement | null>){

    if(!videoRef){
        throw new Error("Must not be null");
    }

    if(videoRef.current){
        videoRef.current.srcObject = remoteStream;
    }

    localStream.getTracks().forEach((tracks) => {
        peerConnection.addTrack(tracks, localStream);
    })

    peerConnection.ontrack = async (event) => {
        event.streams[0].getTracks().forEach((tracks) => {
            remoteStream.addTrack(tracks)
        })
    }

    peerConnection.onicecandidate = async () => {
        console.log(JSON.stringify(peerConnection.localDescription));
    }
}