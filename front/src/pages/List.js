// import {Link} from "react-router-dom";
import React, {Component} from "react";
import { connect } from 'react-redux';
import * as taskAction from '../actions/taskAction';
import Signin from "./Signin";
import {PostData} from "../service";
// import Add from './Add';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            id:{
                userid:  this.props.location.state.userid,
            },
            endTime: '',
            startTime: ''
        }
        this.getList = this.getList.bind(this);
    }
    getList(){
        if(this.props.location.state.userid){
            PostData('http://localhost:8000/task/show-user-task?',this.state.id).then((result) => {
                const responseJson = JSON.parse(JSON.stringify(result));
                console.log("lengh iss:")
                console.log(responseJson)
                if(responseJson){
                    sessionStorage.setItem('userData',responseJson);

                }
                for (let i=0;i<responseJson.length;i++)
                {
                    let task = {
                        endTime: responseJson[i].end_time,
                        startTime: responseJson[i].start_time
                    }
                    this.props.createTask(task);
                }
            });
        }
    }
    listView(data, index){

        return (
            <div className="row flex border w-96 justify-between px-2 py-1 rounded my-2 mx-auto border-indigo-500">
                <div className="col-md-10">
                    <li key={index} className="list-group-item clearfix my-2 h-min">
                        {data.endTime}
                        -
                        {data.startTime}
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.deleteTask(e, index)} className="btn btn-danger border hover:bg-red-600 hover:text-white rounded-lg px-2 py-1 border-red-500 m-1">
                        Remove
                    </button>
                </div>
            </div>
        )
    }
    handle(e){
        let task = {
            endTime: this.state.endTime,
            startTime: this.state.startTime
        }
        this.setState({
            endTime: '',
            startTime: ''
        });
        this.props.createTask(task);
    }
    deleteTask(e, index){
        e.preventDefault();
        this.props.deleteTask(index);
    }
    render() {
        console.log("id is: ")
        console.log(this.state.id)
        return (
            <div className="App justify-center items-center flex flex-col" >
                <p className={"text-center text-4xl whitespace-nowrap w-min mx-auto mt-12"}  >Work Logs</p>
                <p className={"w-min whitespace-nowrap my-4 mx-auto"}>your logs will be show here!</p>
                <button className={" whitespace-nowrap w-min mx-auto justify-center bg-green-500 border rounded px-2 py-1 text-white"} onClick={this.getList}>
                    Click to show Tasks
                </button>
                <hr className={"w-1/3 mx-auto my-3"}/>
                { <ul className="list-group">
                    {this.props.tasks.map((task, i) => this.listView(task, i))}
                </ul> }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: task => dispatch(taskAction.createTask(task)),
        deleteTask: index =>dispatch(taskAction.deleteTask(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);