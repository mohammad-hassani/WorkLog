
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="">
            <img className={"mx-auto w-96 mt-12"} src={`${process.env.PUBLIC_URL}/assets/image/logot.jpg`} alt=""/>
            <p className={"text-center my-14 sm:text-sm"}>A log used to keep track of work that has been done.</p>
            <div className={"flex mx-auto w-min"}>
                <Link to="/signup" className={"my-3"}>
                    <button className={"border whitespace-nowrap mx-4 bg-blue-400 text-2xl text-yellow-300 border-black rounded py-1 px-2 transition duration-500 hover:bg-green-900 hover:text-white"}>
                        sign up
                    </button>
                </Link>
                <Link to="/signin" className={"my-3"}>
                    <button className={"border border-black whitespace-nowrap bg-yellow-400 text-blue-600 text-2xl mx-4 rounded py-1 px-2 transition duration-500 hover:bg-green-900 hover:text-white"}>
                        sign in
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;