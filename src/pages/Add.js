import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';
import {Link} from "react-router-dom";

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
        let contact = {
            endTime: this.state.endTime,
            startTime: this.state.startTime
        }
        this.setState({
            endTime: '',
            startTime: ''
        });
        this.props.createContact(contact);
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
        // let name;
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
                    {/*{ <ul className="list-group">*/}
                    {/*    {this.props.contacts.map((contact, i) => this.listView(contact, i))}*/}
                    {/*</ul> }*/}
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Add);