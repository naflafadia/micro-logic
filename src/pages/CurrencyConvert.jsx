import Navbar from "../components/Navbar";
import ButtonHome from "../components/ButtonHome";

const CurrencyConvert = () => {
    return (
    <>
    <Navbar />
    <ButtonHome to='/' />
    <div className="flex flex-col items-center">
        <div className="bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
        <div className=" p-5">
        <h1 className="font-semibold text-xl text-center mb-6">Currency Converter</h1>
        <div className=" flex gap-3 justify-center">
        <input type="number" className="bg-slate-200 w-36 rounded-md"/>
        <select name="" id="">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
            <option value="">IDR</option>
        </select>
        <h2>TO</h2>
        <select name="" id="">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">GBP</option>
            <option value="">IDR</option>
        </select>
        </div>
        <div className=" flex justify-center mt-4">
        <button className="bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm">Convert</button>
        </div>
        <div className=" flex flex-col items-center mt-4">
        <h4>Try output :</h4>
        <textarea name="" id="" className="bg-slate-200 w-64 rounded-md mt-2"></textarea>
        </div>
        </div>
        </div>
    </div>
    </>
    )
};

export default CurrencyConvert;