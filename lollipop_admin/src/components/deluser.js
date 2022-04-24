import React, { Component } from "react"; /*import react*/ 
import { Row, Form, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './addandup.css'; 
const BaseapiUrl = 'http://localhost:9000'; /*URL*/
class Adduser extends Component {
    constructor(props) {
        super(props);
        // declear vlaue to store data
        this.state = {
            Uid: ''
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
        }
        // make pattern input in json like postman
        let body = {
            Uid: this.state.Uid,
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
        let baseurl = BaseapiUrl + "/delete/user";
        // use fetch to pass data
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Deleted successfully!");
                    this.setState({
                        Uid: ''
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
                <h1>Delete User for Admin</h1>
                </div>
                <Link variant="primary" to="/users" className="sidebareiei2"><h1>View User's list</h1></Link>
                <div class="container2">
                <div class="card2">
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="Uid">
                                <Form.Label className="label">User's ID</Form.Label> 
                                <Form.Control /**Create form for input value */
                                    className="box"
                                    type="text"
                                    name="Uid"
                                    value={this.state.Uid}
                                    onChange={this.handleChange}
                                    placeholder="User's ID" /> 
                            </Form.Group>
                            <Form.Group>
                            {/* /**Create form for input value */}
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