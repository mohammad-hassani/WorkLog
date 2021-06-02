import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as taskAction from '../actions/taskAction';
import {PostData} from "../service";
// import {Link} from "react-router-dom";

class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            userid:  "29",
            end_time: '',
            start_time: '',
            date:"2021-05-26 07:35:59"
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.addTask = this.addTask.bind(this);
    }


    handleChange1(e){
        this.setState({start_time:e.target.value,end_time:this.state.end_time,userid:this.state.userid,date:this.state.date});
    }
    handleChange2(e){
        this.setState({start_time:this.state.start_time,end_time:e.target.value,userid:this.state.userid,date:this.state.date});
    }
    addTask() {
        console.log(this.state)
        if(this.state.start_time && this.state.end_time && this.state.userid){
            console.log(this.state)

            PostData('http://localhost:8000/task/add-task/',this.state).then((result) => {
                let responseJson = JSON.parse(JSON.stringify(result));
                console.log(this.state)
                console.log(responseJson)
                // if(responseJson){
                //
                //     sessionStorage.setItem('userData',JSON.stringify(responseJson));
                //     this.setState({id:responseJson[0].id});
                //     console.log(responseJson[0].id);
                //     this.setState({redirectToReferrer:true});
                //
                // }
                // else{
                //     this.setState({caption:"this email or password not matched! if you don't have account please signup"});
                //
                // }
            });
        }
    }
    // handleSubmit(e){
    //     e.preventDefault();
    //     let task = {
    //         endTime: this.state.endTime,
    //         startTime: this.state.startTime
    //     }
    //     this.setState({
    //         endTime: '',
    //         startTime: ''
    //     });
    //     this.props.createTask(task);
    // }

    render() {
        return(
            <div className="container">
                <h1 className={"text-center mx-auto whitespace-nowrap w-min text-3xl my-10"}>insert your start and end time</h1>
                <hr />
                <div>
                    <div className={"mx-auto text-center whitespace-nowrap w-min border border-yellow-500 rounded-lg p-2 my-8"}>
                        <div className={" my-4 w-40 justify-between"}>
                            <p>from</p>
                            <input type="time" name={"start_time"} onChange={this.handleChange1} className="form-control border rounded-lg  px-2 py-1 border-blue-500 my-2"/>
                        </div>
                        <div className={" my-4 w-40 justify-between"}>
                            <p>to</p>
                            <input type="time" name={"end_time"} onChange={this.handleChange2} className="form-control  border rounded-lg  px-2 py-1 border-blue-500 my-2"/><br />
                        </div>
                        <button onClick={this.addTask} className="btn btn-success  border rounded-lg  px-2 py-1 border-green-500 my-2" value="ADD" >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: task => dispatch(taskAction.createTask(task)),
        deleteTask: index =>dispatch(taskAction.deleteTask(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);