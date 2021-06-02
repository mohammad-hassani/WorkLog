import React, {Component,useState} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../service';

class Signup extends Component {
    constructor() {
        super();
        this.state={
            auth:{
              name:'',
              email:'',
              password:''
            },
            redirectToReferrer : false,
            id:0,
        };
        this.signup = this.signup.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }
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
    onChangeName(e){
        this.setState({auth:{name:e.target.value,email:this.state.auth.email,password:this.state.auth.password}});
    }
    onChangeEmail(e){
        this.setState({auth:{name:this.state.auth.name,email:e.target.value,password:this.state.auth.password}});

    }
    onChangePassword(e){
        this.setState({auth:{name:this.state.auth.name,email:this.state.auth.email,password:e.target.value}});

    }
    signup() {
        if(this.state.auth.name && this.state.auth.email && this.state.auth.password){
            PostData('http://localhost:8000/user/add-user/',this.state.auth).then((result) => {
                let responseJson = JSON.parse(JSON.stringify(result));
                if(responseJson){

                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({id:responseJson[0].id});
                    console.log(responseJson[0].id);
                    this.setState({redirectToReferrer:true});

                }
                // else{
                //     this.setState({caption:"this email or password not matched! if you don't have account please signup"});
                //
                // }
            });
        }
    }
    render () {
        if (this.state.redirectToReferrer) {
            console.log("ok")
            return (
                <Redirect
                    to={{
                        pathname: "/Add",
                        state: { userid: this.state.id }
                    }}
                />
            )
        }
        else {
            return (
                <div className="App">
                    <div
                        className="container p-4 w-1/3 md:w-2/3 sm:w-11/12 flex flex-col justify-center mt-20 border rounded shadow-lg  mx-auto px-4">
                        <label className="w-11/12 mx-auto my-2" htmlFor="name">
                            <p className="w-min">Name</p>
                            <input id="name" name={"name"} onChange={this.onChangeName} type="text"
                                   required={"required"} className="mx-auto px-2 w-full rounded border h-8 "/>
                        </label>
                        <label className="w-11/12 mx-auto my-2" htmlFor="email">
                            <p className="w-min">Email</p>
                            <input id="email" name={"email"} type="email" onChange={this.onChangeEmail}
                                   required={"required"} className="mx-auto px-2 w-full rounded border h-8 "/>
                        </label>
                        <label className="w-11/12 mx-auto my-2" htmlFor="password">
                            <p className="w-min">Password</p>
                            <input id="password" name={"password"} onChange={this.onChangePassword} type="password"
                                   required={"required"} minLength={"8"}
                                   className="mx-auto px-2 w-full rounded border h-8 "/>
                        </label>
                        <label className="w-11/12 mx-auto my-2" htmlFor="c-password">
                            <p className="w-min whitespace-nowrap">Confirm password</p>
                            <input id="c-password" onChange={this.checkPass} required={"required"} type="password"
                                   className="mx-auto px-2 w-full rounded border h-8 "/>
                        </label>
                        <p className="text-red-500 mx-auto w-min whitespace-nowrap" id="pass-massage"></p>
                        <button onClick={this.signup} id={"submitForm"}
                                className="text-white w-11/12 mx-auto h-10 font-bold hover:bg-blue-700 transition duration-500 border rounded bg-blue-500">
                            submit
                        </button>
                    </div>
                </div>
            );
        }
    }
}

export default Signup;