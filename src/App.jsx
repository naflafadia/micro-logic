import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CountDuration from "./pages/CountDuration"
import CurrencyConvert from "./pages/CurrencyConvert"
import MatchingCard from "./pages/MatchingCard"
import MobileLegend from "./pages/MobileLegend"
import SalaryCalculating from "./pages/SalaryCalculating"
import TicTacToe from "./pages/TicTacToe"
import WordScramb from "./pages/WordScramb"
import Home from "./pages/Home"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/count-duration" element={<CountDuration />}/>
        <Route path="/currency-convert" element={<CurrencyConvert />}/>
        <Route path="/matching-card" element={<MatchingCard />}/>
        <Route path="/mobile-legend" element={<MobileLegend />}/>
        <Route path="/salary-calculating" element={< SalaryCalculating/>}/>
        <Route path="/tic-tac-toe" element={<TicTacToe />}/>
        <Route path="/word-scramb" element={<WordScramb />}/>
      </Routes>
    </Router>
  )
}

export default App
