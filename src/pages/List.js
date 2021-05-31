import {Link} from "react-router-dom";
import React, {Component} from "react";
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';
// import Add from './Add';

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
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
                    <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger border hover:bg-red-600 hover:text-white rounded-lg px-2 py-1 border-red-500 m-1">
                        Remove
                    </button>
                </div>
            </div>
        )
    }

    deleteContact(e, index){
        e.preventDefault();
        this.props.deleteContact(index);
    }
    render() {
        return (
            <div className="App">
                <p className={"text-center text-4xl whitespace-nowrap w-min mx-auto mt-12"}>Work Logs</p>
                <p className={"w-min whitespace-nowrap my-4 mx-auto"}>your logs will be show here!</p>
                <hr className={"w-1/3"}/>
                { <ul className="list-group">
                    {this.props.contacts.map((contact, i) => this.listView(contact, i))}
                </ul> }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        contacts: state.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createContact: contact => dispatch(contactAction.createContact(contact)),
        deleteContact: index =>dispatch(contactAction.deleteContact(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);