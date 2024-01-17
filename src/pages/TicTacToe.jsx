import Navbar from "../components/Navbar";
import ButtonHome from "../components/ButtonHome";

const TicTacToe = () => {
    return (
    <>
    <Navbar />
    <ButtonHome to='/' />
    <div className="flex flex-col items-center">
        <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
        <div className=" p-5">
        <h1 className="font-semibold text-xl text-center mb-6">Tic-Tac-Toe</h1>
        <h3 className=" text-sm text-center font-thin">Next player : X or O</h3>
        <div className=" flex flex-col items-center mt-5 gap-1">
        <div className=" flex gap-1">
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        </div>
        <div className=" flex gap-1">
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        </div>
        <div className=" flex gap-1">
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        <button className=" w-14 h-14 bg-slate-300 rounded-md shadow-md shadow-slate-600"></button>
        </div>
        </div>
        <h4 className=" mt-4 text-center">You win or you lose</h4>
        <div className=" flex justify-center mt-2">
            <button className="bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm">Try again</button>
        </div>
        </div>
        </div>
    </div>
    </>
    )
};

export default TicTacToe;





