type MyComponents = {
    htmlFor?: string,
    children?: React.ReactNode,
    type?: string,
    placeholder?: string,
    className?: string
}

export default function Input(props: MyComponents){
    return <>
        <label htmlFor={props.htmlFor}>
            <span className="text-sm font-semibold animate-[fadeUp_1.5s_ease-out_forwards]">{props.children}</span>
            <input type={props.type} id="Email" placeholder={props.placeholder}
             className={`mt-0.5 w-full border-2 border-black 
            shadow-[4px_4px_0_0] focus:ring-2 sm:text-sm animate-[fadeUp_1.5s_ease-out_forwards]
            ${props.className}`} />
        </label>
    </>
}