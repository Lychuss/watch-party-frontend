type MyComponent = {
    label: string,
    bg: string
}
export default function Labels(props: MyComponent){
    return <div className={`border-2 border-black ${props.bg} px-3 py-2.5 text-sm/none font-semibold 
    shadow-[2px_2px_0_0] z-1 rounded-xl`}>
      {props.label}
    </div>
}