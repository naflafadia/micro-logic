import ButtonComponent from "../components/ButtonComponent";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
    <div className=" bg-gray-300 w-full">
        <Navbar />
        <div className=" flex flex-col items-center mt-8">
            <div className=" mb-5">
            <h1 className=" text-2xl font-bold">Challenge Games</h1>
            <h3 className=" text-sm font-thin text-center">come play with me !</h3>
            </div>
            <ButtonComponent to='/count-duration' label='Count Duration' />
            <ButtonComponent to='/currency-convert' label='Currency Convert' />
            <ButtonComponent to='/matching-card' label='Mathcing Card' />
            <ButtonComponent to='/mobile-legend' label='Mobile Legend' />
            <ButtonComponent to='/salary-calculating' label='Salary Calculating' />
            <ButtonComponent to='/tic-tac-toe' label='Tic Tac Toe' />
            <ButtonComponent to='/word-scramb' label='Word Scramb' />
        </div>
    </div>
    )
}


export default Home;
