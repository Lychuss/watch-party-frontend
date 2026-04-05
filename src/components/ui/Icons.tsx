type MyComponents = {
    src?: string
    className?: string
}

export default function Icons(props: MyComponents){
    return <div className={` w-[35px] aspect-square flex items-center justify-center
            border-2 border-black animate-[fadeUp_1.5s_ease-out_forwards]
            hover:bg-yellow-300 ${props.className}`}>
                <img src={props.src} className="w-[20px]"></img>
    </div>
}