/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"

const ButtonHome = ({to}) => {
    return (
        <div>
            <Link to={to}>
            <button className=" bg-slate-300 p-3 font-light rounded-lg text-sm w-16 m-5 hover:bg-slate-400 hover:font-bold">Back</button>
            </Link>
        </div>
    )
}
export default ButtonHome;