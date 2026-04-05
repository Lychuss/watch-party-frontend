"use client";

import HoverVideo from "../shared/HoverVideo";

type MyComponent = {
    header: string,
    message: string,
    src: string
}

export default function Cards(props: MyComponent){
    return <article className="border-2 border-black bg-white shadow-[4px_4px_0_0,8px_8px_0_0] mb-4
    w-full xl:max-w-[900px] opacity-0 animate-[fadeUp_1.5s_ease-out_forwards]">
  <div className="bg-yellow-300 p-3">
    <div className="flex items-center justify-between">
      <strong className="text-xs/none font-bold uppercase xl:text-3xl">System Message</strong>

  <div className="flex gap-1">
        <div className="size-3 border-2 border-black bg-white"></div>
        <div className="size-3 border-2 border-black bg-white"></div>
      </div>
    </div>
  </div>

  <div className="xl:flex xl:p-5">
    <div className="border-t-2 border-black p-4 sm:p-6">
      <h3 className="text-lg font-semibold text-black xl:text-3xl">{props.header}</h3>
      <p className="mt-2 text-sm text-pretty text-justify xl:text-xl">
      {props.message}
      </p>
    </div>
    <div>
      <HoverVideo src={props.src}></HoverVideo>
    </div>
  </div>
</article>
}