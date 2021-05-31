import React from 'react';

class Signup extends React.Component {

    checkPass() {
        const password = document.getElementById("password").value;
        const cPassword = document.getElementById("c-password").value;
        const massage = document.getElementById("pass-massage");
        const submitForm = document.getElementById("submitForm");
        if (password !== cPassword)
        {
            massage.innerHTML = "password is not confirm !";
            submitForm.setAttribute("disabled" , "disabled")
        }
        else
        {
            massage.innerHTML = "";
            submitForm.removeAttribute("disabled")
        }
    }
    render () {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}
                    className="container p-4 w-1/3 md:w-2/3 sm:w-11/12 flex flex-col justify-center mt-20 border rounded shadow-lg  mx-auto px-4">
                    <label className="w-11/12 mx-auto my-2" htmlFor="name">
                        <p className="w-min">Name</p>
                        <input id="name" type="text"  required={"required"}  className="mx-auto px-2 w-full rounded border h-8 "/>
                    </label>
                    <label className="w-11/12 mx-auto my-2" htmlFor="email">
                        <p className="w-min">Email</p>
                        <input id="email" type="email" required={"required"} className="mx-auto px-2 w-full rounded border h-8 "/>
                    </label>
                    <label className="w-11/12 mx-auto my-2" htmlFor="password">
                        <p className="w-min">Password</p>
                        <input id="password" type="password"  required={"required"} minLength={"8"}  className="mx-auto px-2 w-full rounded border h-8 "/>
                    </label>
                    <label className="w-11/12 mx-auto my-2" htmlFor="c-password">
                        <p className="w-min whitespace-nowrap">Confirm password</p>
                        <input id="c-password" onChange={this.checkPass} required={"required"} type="password"
                               className="mx-auto px-2 w-full rounded border h-8 "/>
                    </label>
                    <p className="text-red-500 mx-auto w-min whitespace-nowrap" id="pass-massage"> </p>
                    <button id={"submitForm"} disabled={"disabled"}
                            className="text-white w-11/12 mx-auto h-10 font-bold hover:bg-blue-700 transition duration-500 border rounded bg-blue-500"
                            type="submit">
                        submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Signup;