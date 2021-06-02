import React, {Component,useState} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../service';
import List from './List';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import * as taskAction from "../actions/taskAction";

class Signin extends Component {    
    constructor(){
        super();
        this.state = {
            auth:{
                email: '',
                password: '',
            },
            redirectToReferrer : false,
            id:0,
            caption:''
        };
        this.login = this.login.bind(this);
        this.onChangee = this.onChangee.bind(this);
        this.onChangep = this.onChangep.bind(this);
    }
    login() {
        if(this.state.auth.email && this.state.auth.password){
            PostData('http://localhost:8000/user/login/',this.state.auth).then((result) => {
                let responseJson = JSON.parse(JSON.stringify(result));
                console.log(responseJson)
                if(responseJson.length !== 0){

                    sessionStorage.setItem('userData',JSON.stringify(responseJson));
                    this.setState({id:responseJson[0].id});
                    console.log(responseJson[0].id);
                    this.setState({redirectToReferrer:true});

                }
                else{
                    this.setState({caption:"this email or password not matched! if you don't have account please signup"});

                }
            });
        }
    }

    onChangee(e){
        this.setState({auth:{email:e.target.value,password:this.state.auth.password}});

    }
    onChangep(e){
        this.setState({auth:{email:this.state.auth.email,password:e.target.value}});

    }


    render() {

        if (this.state.redirectToReferrer) {
            console.log("ok")
            return (
                <Redirect
                    to={{
                        pathname: "/List",
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
                        <label className="w-11/12 mx-auto my-2" htmlFor="email">
                            <p className="w-min">Email</p>
                            <input id="email" type="email" name={"email"} onChange={this.onChangee}
                                   className="mx-auto w-full rounded border h-8 "/>
                        </label>
                        <label className="w-11/12 mx-auto my-2" htmlFor="password">
                            <p className="w-min">Password</p>
                            <input id="password" name={"password"} onChange={this.onChangep} type="password"
                                   className="mx-auto w-full rounded border h-8 "/>
                        </label>
                        <p className={"text-red-500 px-3 text-center"}>{this.state.caption}</p>
                        <button onClick={this.login}
                                className="text-white w-11/12 mx-auto h-10 font-bold hover:bg-blue-700 transition duration-500 border rounded bg-blue-500">
                            submit
                        </button>
                    </div>
                </div>
            );
        }
    }
}

export default Signin