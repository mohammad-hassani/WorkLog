import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as taskAction from '../actions/taskAction';
// import {Link} from "react-router-dom";

class Add extends Component {

    constructor(props){
        super(props);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            endTime: '',
            startTime: ''
        }
    }

    handleChange2(e){
        this.setState({
            endTime: e.target.value
        })
    }
    handleChange1(e){
        this.setState({
            startTime: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
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

    render() {
        return(
            <div className="container">
                <h1 className={"text-center mx-auto whitespace-nowrap w-min text-3xl my-10"}>insert your start and end time</h1>
                <hr />
                <div>
                    <form className={"mx-auto text-center whitespace-nowrap w-min border border-yellow-500 rounded-lg p-2 my-8"} onSubmit={this.handleSubmit}>
                        <div className={" my-4 w-40 justify-between"}>
                            <p>from</p>
                            <input type="time" onChange={this.handleChange1} className="form-control border rounded-lg  px-2 py-1 border-blue-500 my-2" value={this.state.startTime}/>
                        </div>
                        <div className={" my-4 w-40 justify-between"}>
                            <p>to</p>
                            <input type="time" onChange={this.handleChange2} className="form-control  border rounded-lg  px-2 py-1 border-blue-500 my-2" value={this.state.endTime}/><br />
                        </div>
                        <input type="submit" className="btn btn-success  border rounded-lg  px-2 py-1 border-green-500 my-2" value="ADD"/>
                    </form>
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