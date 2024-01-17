/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"

const ButtonHome = ({to}) => {
    return (
        <div>
            <Link to={to}>
            <button className=" bg-slate-400 p-2 rounded-lg text-sm w-16 m-5 font-medium hover:bg-slate-300 shadow-sm shadow-slate-600">Home</button>
            </Link>
        </div>
    )
}
export default ButtonHome;