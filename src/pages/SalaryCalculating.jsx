import { useState } from "react";
import ButtonHome from "../components/ButtonHome";
import Navbar from "../components/Navbar";

const SalaryCalculating = () => {
  const initialGajiPokok = "";
  const initialTunjangan = "";
  const initialKewajiban = "";

  const [gajiPokok, setGajiPokok] = useState(initialGajiPokok);
  const [tunjangan, setTunjangan] = useState(initialTunjangan);
  const [kewajiban, setKewajiban] = useState(initialKewajiban);
  const [gajiKotor, setGajiKotor] = useState(null);
  const [gajiBersih, setGajiBersih] = useState(null);


  const calcGaji = () => {
    const gajiPokokNumber = parseFloat(gajiPokok) || 0;
    const tunjanganNumber = parseFloat(tunjangan) || 0;
    const kewajibanNumber = parseFloat(kewajiban) || 0;

    const gajiKotorResult = gajiPokokNumber + tunjanganNumber;
    const gajiBersihResult = gajiKotorResult - kewajibanNumber;

    setGajiKotor(gajiKotorResult);
    setGajiBersih(gajiBersihResult);
  };

  const resetValues = () => {
    setGajiPokok(initialGajiPokok);
    setTunjangan(initialTunjangan);
    setKewajiban(initialKewajiban);
    setGajiKotor(null);
    setGajiBersih(null);
  };
    return (
    <>
    <Navbar />
    <ButtonHome to='/' />
    <div className=" flex flex-col items-center">
    <div className=" bg-slate-400 w-80 rounded-md shadow-md shadow-slate-600">
        <div className=" p-5">
        <h1 className=" font-semibold text-xl text-center mb-6">Salary Calculating</h1>
        <div className=" mt-3 flex flex-col gap-2 items-center">
            <label htmlFor="tunjangan" className=" text-md">Gaji Pokok</label>
            <input type="number" className=" bg-slate-200 w-8/12 rounded-md" id="gajiPokok"
                value={gajiPokok}
                onChange={(e) =>
                  setGajiPokok(e.target.value.replace(/^0+/, ""))
                }/>
        </div>
        <div className=" mt-3 flex flex-col gap-2 items-center">
            <label htmlFor="tunjangan" className=" text-md">Tunjangan</label>
            <input type="number" className=" bg-slate-200 w-8/12 rounded-md" id="tunjangan"
                value={tunjangan}
                onChange={(e) =>
                  setTunjangan(e.target.value.replace(/^0+/, ""))
                }/>
        </div>
        <div className=" mt-3 flex flex-col gap-2 items-center">
            <label htmlFor="tunjangan" className=" text-md">Kewajiban Pokok</label>
            <input type="number" className=" bg-slate-200 w-8/12 rounded-md" id="kewajiban"
                value={kewajiban}
                onChange={(e) =>
                  setKewajiban(e.target.value.replace(/^0+/, ""))
                }/>
        </div>
        <div className=" mt-5 flex justify-center gap-3">
            <button className=" bg-slate-600 font-semibold text-white p-2 hover:bg-slate-500 rounded-md text-sm" onClick={calcGaji}>Hitung Gaji</button>
            <button className=" bg-slate-600 font-semibold text-white p-2 rounded-md hover:bg-slate-500 text-sm" onClick={resetValues}>Reset</button>
        </div>
        <div className=" mt-3">
            <h3 className=" mb-2 font-semibold">Hasil :</h3>
            <h4>Gaji Kotor : Rp.{gajiKotor} </h4>
            <h4>Gaji Pokok : Rp.{gajiPokok}</h4>
            <h4>Gaji Bersih : Rp.{gajiBersih} </h4>
        </div>
        </div>
    </div>
    </div>
    </>
  );
}

export default SalaryCalculating;