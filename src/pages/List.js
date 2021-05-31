// import {Link} from "react-router-dom";
import React, {Component} from "react";
import { connect } from 'react-redux';
import * as taskAction from '../actions/taskAction';
// import Add from './Add';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            endTime: '',
            startTime: ''
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

    deleteTask(e, index){
        e.preventDefault();
        this.props.deleteTask(index);
    }
    render() {
        return (
            <div className="App">
                <p className={"text-center text-4xl whitespace-nowrap w-min mx-auto mt-12"}>Work Logs</p>
                <p className={"w-min whitespace-nowrap my-4 mx-auto"}>your logs will be show here!</p>
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
        tasks: state.tasks
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: task => dispatch(taskAction.createTask(task)),
        deleteTask: index =>dispatch(taskAction.deleteTask(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);