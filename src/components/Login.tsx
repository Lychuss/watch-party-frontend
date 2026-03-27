import Button from "./Button";
export default function Login(){
    return <div className="flex items-center justify-center flex-col lg:flex-row w-full
   max-w-screen-sm mx-auto h-screen bg-[rgba(154,140,152,1)] lg:bg-white">
    <div className="w-full flex flex-col items-center lg:bg-[rgba(44,58,71,1)] lg:w-[1000px] 
    lg:h-[350px] lg:rounded-l-xl lg:p-10">
      <img src="/icons/welcome-icon.svg" alt="welcome" className="max-w-[250px] h-auto mb-2"></img>
      <h1 className="text-xl text-center font-bold mb-4 lg:text-white">Welcome in <span className='text-[rgba(255,195,18,1)]
    font-semibold'>WatchParty</span></h1>
    </div>

    <div className="w-full flex flex-col items-center justify-center lg:bg-[rgba(255,195,18,1)] 
    lg:rounded-r-xl lg:w-[1000px] lg:h-[350px] lg:p-10">
      <Button className="bg-white mb-2 px-5 py-3 shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 opacity-0 " onClick={() => console.log()}>Sign Up</Button>
      <Button className="bg-blue-300  px-5 py-3 shadow-[4px_4px_0_0] hover:bg-yellow-300 focus:ring-2 opacity-0 " onClick={() => console.log()}>Login</Button>
    </div>
  </div>
}