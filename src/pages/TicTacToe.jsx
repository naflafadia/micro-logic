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
        </div>
        </div>
    </div>
    </>
    )
};

export default TicTacToe;