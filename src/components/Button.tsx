type MyComponent = {
    onClick: () => void;
    background: string;
    label: string;
}

export default function Button(props: MyComponent){
    return <>
        <button className={`border-2 border-black ${props.background} px-5 py-3 font-semibold 
        text-black shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 opacity-0 
        animate-[fadeUp_1.5s_ease-out_forwards] focus:ring-yellow-300 focus:outline-0 w-full text-sm`}>
            {props.label}
        </button>
    </>
}