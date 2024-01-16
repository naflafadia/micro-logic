/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const ButtonComponent = ({to, label}) => {
    return (
        <Link to={to}>
            <button className="w-40 bg-slate-400 rounded-md flex mb-3 justify-center p-3 font-semibold hover:bg-slate-300">{label}</button>
        </Link>
    )
}

export default ButtonComponent;