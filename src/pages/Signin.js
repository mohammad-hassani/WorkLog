// import {Link} from "react-router-dom";

function Signin() {
    return (
        <div className="App">
            <form className="container p-4 w-1/3 md:w-2/3 sm:w-11/12 flex flex-col justify-center mt-20 border rounded shadow-lg  mx-auto px-4">
                <label className="w-11/12 mx-auto my-2" htmlFor="email">
                    <p className="w-min">Email</p>
                    <input id="email" type="email" className="mx-auto w-full rounded border h-8 "/>
                </label>
                <label className="w-11/12 mx-auto my-2" htmlFor="password">
                    <p className="w-min">Password</p>
                    <input id="password" type="password" className="mx-auto w-full rounded border h-8 "/>
                </label>
                <button className="text-white w-11/12 mx-auto h-10 font-bold hover:bg-blue-700 transition duration-500 border rounded bg-blue-500" type="submit">
                    submit
                </button>
            </form>
        </div>
    );
}

export default Signin;