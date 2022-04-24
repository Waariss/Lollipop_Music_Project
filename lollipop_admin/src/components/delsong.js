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
            id: ''
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
        if (this.state.id === "" || this.state.id === undefined) {
            alert("Song's ID is required");
        }
        // make pattern input in json like postman
        let body = {
            id: this.state.id,
        };
        // make input data to json format
        const requestOptions = {
            method: "DeLETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };
        // add url for each method
        let baseurl = BaseapiUrl + "/delete/music";
        // use fetch to pass data
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Deleted successfully!");
                    this.setState({
                        id: ''
                    })
                }
            })
            .catch((e) => {
                alert(e);
            });
    }
    render() {
        return (
            <div>
                <div className="yeast">
                <h1>Delete Song for Admin</h1>
                </div>
                <Link variant="primary" to="/" className="sidebareiei2"><h1>View Song's list</h1></Link>
                <div class="container2">
                <div class="card2">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="id">
                                <Form.Label  className="label">Song's ID</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="id"
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                    placeholder="Song's ID" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" className="delete3" onClick={() => this.AddEmployee()}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                </div>
                </div>
            </div>
        )
    }
}
export default Adduser;