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
            id: '',
            song: '',
            artist: '',
            album: '',
            released: '',
            pages: '',
            imgurl: '',
            sound: ''
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
        } else if (this.state.song === "" || this.state.song === undefined) {
            alert("Song's Name is required");
        } else if (this.state.artist === "" || this.state.artist === undefined) {
            alert("Song's Artist is required");
        } else if (this.state.album === "" || this.state.album === undefined) {
            alert("Song's Ablum is required");
        } else if (this.state.released === "" || this.state.released === undefined) {
            alert("Song's Released is required");
        } else if (this.state.pages === "" || this.state.pages === undefined) {
            alert("Song's Pages is required");
        } else if (this.state.imgurl === "" || this.state.imgurl === undefined) {
            alert("Song's Image URL  is required");
        } else if (this.state.sound === "" || this.state.sound === undefined) {
            alert("Song's Sound URL  is required");
        }
        // make pattern input in json like postman
        let body = {
            musicinfo:{
                id: this.state.id,
                song: this.state.song,
                artist: this.state.artist,
                album: this.state.album,
                released: this.state.released,
                pages: this.state.pages,
                imgurl: this.state.imgurl,
                sound: this.state.sound
            }
        };
        // make input data to json format
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };
        // add url for each method
        let baseurl = BaseapiUrl + "/update/music";
        // use fetch to pass data
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Updated successfully!");
                    this.setState({
                        id: '',
                        song: '',
                        artist: '',
                        album: '',
                        released: '',
                        pages: '',
                        imgurl:'',
                        sound: ''
                    })
                }
            })
            .catch((e) => {
                alert(e);
            });
    }
    render() {
        return (
            <div >
                <div className="yeast">
                <h1>Update Song for Admin</h1>
                </div>
                <Link variant="primary" to="/" className="sidebareiei2"><h1>View Song's list</h1></Link>
                <div class="container2">
                <div class="card2">
                <Row>
                    <Col sm={6}>
                    <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="id">
                                <Form.Label className="label">Song's ID</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="id"
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                    placeholder="Song's ID" />
                            </Form.Group>
                            <Form.Group controlId="song">
                                <Form.Label className="label">Song's Name</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="song"
                                    value={this.state.song}
                                    onChange={this.handleChange}
                                    placeholder="Song's name" />
                            </Form.Group>
                            <Form.Group controlId="artist">
                                <Form.Label className="label">Song's Artist</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="artist"
                                    value={this.state.artist}
                                    onChange={this.handleChange}
                                    placeholder="Song's Artist" />
                            </Form.Group>
                            <Form.Group controlId="album">
                                <Form.Label className="label">Song's Ablum</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="album"
                                    value={this.state.album}
                                    onChange={this.handleChange}
                                    placeholder="Song's Ablum" />
                            </Form.Group>
                            <Form.Group controlId="released">
                                <Form.Label className="label">Song's Released</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="released"
                                    value={this.state.released}
                                    onChange={this.handleChange}
                                    placeholder="Song's Released" />
                            </Form.Group>
                            <Form.Group controlId="pages">
                                <Form.Label className="label">Song's Pages</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="pages"
                                    value={this.state.pages}
                                    onChange={this.handleChange}
                                    placeholder="Song's Pages" />
                            </Form.Group>
                            <Form.Group controlId="imgurl">
                                <Form.Label className="label">Song's Image URL</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="imgurl"
                                    value={this.state.imgurl}
                                    onChange={this.handleChange}
                                    placeholder="Song's Image URL" />
                            </Form.Group>
                            <Form.Group controlId="sound">
                                <Form.Label className="label">Song's Sound URL</Form.Label>
                                <Form.Control
                                    className="box"
                                    type="text"
                                    name="sound"
                                    value={this.state.sound}
                                    onChange={this.handleChange}
                                    placeholder="Song's Sound URL" />
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