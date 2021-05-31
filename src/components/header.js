import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header flex sticky top-0 h-14 bg-blue-100 border-b border-green-800 ">
            <Link to="/">
                <div className={"w-min flex pr-10"}>
                    <img className={"w-8 h-8 mx-1 my-auto"} src={`${process.env.PUBLIC_URL}/assets/image/logo.png`} alt=""/>
                    <h1 className={"py-3 w-min text-2xl font-bold whitespace-nowrap text-green-800 h-min"}>{title}</h1>
                </div>
            </Link>
            <Link to="/signup" className={"my-3 mx-4"}>
                <button className={"border border-black rounded bg-pink-500 text-white py-1 px-2 transition duration-500 hover:bg-green-900 hover:text-white"}>
                    sign up
                </button>
            </Link>
            <Link to="/signin" className={"my-3 mx-4"}>
                <button className={"border border-black rounded py-1 px-2 bg-purple-500 text-white transition duration-500 hover:bg-green-900 hover:text-white"}>
                    sign in
                </button>
            </Link>
            <Link to="/list" className={"my-3 mx-4"}>
                <button className={"border border-black rounded bg-yellow-500 text-white py-1 px-2 transition duration-500 hover:bg-green-900 hover:text-white"}>
                    List
                </button>
            </Link>
            <Link to="/add" className={"my-3 mx-4"}>
                <button className={"border border-black rounded bg-green-500 text-white py-1 px-2 transition duration-500 hover:bg-green-900 hover:text-white"}>
                    Add
                </button>
            </Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
