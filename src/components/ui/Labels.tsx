type MyComponent = {
    children?: React.ReactNode;
    className?: string;
}
export default function Labels(props: MyComponent){
    return <div className={`border-2 border-black ${props.className} text-md font-semibold 
    shadow-[2px_2px_0_0] z-1 rounded-xl`}>
      {props.children}
    </div>
}