type MyComponent = {
    className: string
}
export default function Dropdown(props: MyComponent){
    return <nav className={`absolute right-0 top-13 gap-8 transition-all duration-200
     ease-[cubic-bezier(0.895,0.03,0.685,0.22)] ${props.className} bg-white z-80 fixed`}>
        <div className="border-r-2 border-black py-2">
            <div role="tablist" className="-mr-0.5 flex flex-col">
            <button role="tab" aria-selected="true" className="border-2 border-black bg-yellow-300
             px-6 py-2 font-semibold text-black focus:ring-2 focus:ring-yellow-300 focus:outline-0">
                Home
            </button>

            <button role="tab" aria-selected="false" className="border-2 border-transparent px-6 
            py-2 font-semibold hover:bg-black hover:text-white focus:ring-2 focus:ring-yellow-300 focus:outline-0">
                About
            </button>

            <button role="tab" aria-selected="false" className="border-2 border-transparent px-6
             py-2 font-semibold hover:bg-black hover:text-white focus:ring-2 focus:ring-yellow-300 focus:outline-0">
                Room
            </button>
            </div>
        </div>
    </nav>
}