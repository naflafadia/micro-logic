import Navbar from "../components/Navbar";
import ButtonHome from "../components/ButtonHome";

const CountDuration = () => {
    return (
    <>
    <Navbar />
    <ButtonHome to='/' />
    <div className="flex flex-col items-center">
        <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
        <div className="p-5">
        <h1 className="font-semibold text-xl text-center mb-6">Countdown Time</h1>
        <div className="mt-2 flex flex-col gap-2 items-center">
            <h2 className=" font-thin">Enter the Target Date and Time:</h2>
            <input type="date" className="bg-slate-200 w-8/12 rounded-md"/>
            <div className=" mt-5 flex justify-center gap-3">
            <button className=" bg-slate-600 font-semibold text-white p-2 hover:bg-slate-500 rounded-md text-sm">Start</button>
            <button className=" bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm">Reset</button>
        </div>
        <h3 className=" text-sm">Countdown:</h3>
        <h4 className=" text-sm font-thin">Mulai menghitung</h4>
        </div>
        </div>
        </div>
    </div>
    </>
    )
};

export default CountDuration;