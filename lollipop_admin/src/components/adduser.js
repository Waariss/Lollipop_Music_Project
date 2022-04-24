import React, { Component } from "react";
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './addandup.css'; 
const BaseapiUrl = 'http://localhost:9000';
class Adduser extends Component {
    constructor(props) {
        super(props);
        // declear vlaue to store data
        this.state = {
            Uid: '',
            fullname:'',
            email:'',
            pword:'',
            tel:'',
            roles: '',
            flag: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    // Change value by input 
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    AddEmployee() {
        debugger;
        // Alert when no data input
        if (this.state.Uid === "" || this.state.Uid === undefined) {
            alert("User's ID is required");
        } else if (this.state.fullname === "" || this.state.fullname === undefined) {
            alert("User's Fullname is required");
        } else if (this.state.email === "" || this.state.email === undefined) {
            alert("User's Email is required");
        } else if (this.state.pword === "" || this.state.pword === undefined) {
            alert("User's password is required");
        } else if (this.state.tel === "" || this.state.tel === undefined) {
            alert("User's Telephone Number is required");
        } else if (this.state.roles === "" || this.state.roles === undefined) {
            alert("User's Roles is required");
        } else if (this.state.flag === "" || this.state.flag === undefined) {
            alert("User's Flag  is required");
        }
        // make pattern input in json like postman
        let body = {
            userinfo:{
                Uid: this.state.Uid,
                fullname: this.state.fullname,
                email: this.state.email,
                pword: this.state.pword,
                tel: this.state.tel,
                roles: this.state.roles,
                flag: this.state.flag
            }
        };
        // make input data to json format
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };
        // add url for each method
        let baseurl = BaseapiUrl + "/post/user";
        // use fetch to pass data
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Added successfully!");
                    this.setState({
                        Uid: '',
                        fullname:'',
                        email:'',
                        pword:'',
                        tel:'',
                        roles: '',
                        flag: ''
                    })
                }
            })
            .catch((e) => {
                alert(e);
            });
    }
    render() {
        return (
            <>
            <div className="yeast">
                <h1 >Add User for Admin</h1>
            </div>
            <div>
                <Link variant="primary" to="/users" className="sidebareiei2"><h1>View User's list</h1></Link>
                <div class="container2">
                    <div class="card2">
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Uid">
                                        <Form.Label className="label">User's ID</Form.Label>
                                        <div className="Inp">
                                        <Form.Control
                                            className="box"
                                            type="text"
                                            name="Uid"
                                            value={this.state.Uid}
                                            onChange={this.handleChange}
                                            placeholder="User's ID" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="fullname">
                                        <Form.Label className="label">User's Fullname</Form.Label>
                                        <div className="Inp">
                                        <Form.Control
                                            className="box"
                                            type="text"
                                            name="fullname"
                                            value={this.state.fullname}
                                            onChange={this.handleChange}
                                            placeholder="User's Fullname" />
                                        </div>
                                    </Form.Group>
                                    
                                    <Form.Group controlId="email">
                                        <Form.Label className="label">User's Email</Form.Label>
                                        <div className="Inp">
                                        <Form.Control
                                            className="box"
                                            type="text"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            placeholder="User's Email" />
                                    </div>
                                    </Form.Group>
                                    <Form.Group controlId="pword">
                                        <Form.Label className="label">User's password</Form.Label>
                                        <div className="Inp">
                                        <Form.Control
                                            className="box"
                                            type="text"
                                            name="pword"
                                            value={this.state.pword}
                                            onChange={this.handleChange}
                                            placeholder="User's password" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="tel">
                                        <Form.Label className="label">User's Telephone Number</Form.Label>
                                        <div className="Inp">
                                        <Form.Control
                                            className="box"
                                            type="text"
                                            name="tel"
                                            value={this.state.tel}
                                            onChange={this.handleChange}
                                            placeholder="User's Tel Number" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="roles">
                                        <Form.Label className="label">User's Roles</Form.Label>
                                        <div className="Inp">
                                        <Form.Control
                                            className="box"
                                            type="text"
                                            name="roles"
                                            value={this.state.roles}
                                            onChange={this.handleChange}
                                            placeholder="User's Roles" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="flag">
                                        <Form.Label className="label">User's Flag</Form.Label>
                                        <div className="Inp">
                                        <Form.Control
                                            className="box"
                                            type="text"
                                            name="flag"
                                            value={this.state.flag}
                                            onChange={this.handleChange}
                                            placeholder="User's Flag" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="success" className="delete3"onClick={() => this.AddEmployee()}>Save</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
export default Adduser;