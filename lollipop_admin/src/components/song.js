import React, { useState, useEffect } from 'react'
import './forsong.css';
import Songbutton from './songbutton';
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useRef } from 'react';
import axios from "axios";
const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
function User() {
    //declear value to store
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    // useEffect to fetch data
    useEffect(() => {
        const fetchData = async () => {
        const res = await axios.get(`http://localhost:9000/search/music/${query}`);
        setData(res.data);
        };
        if (query.length === 0 || query.length > 0) fetchData(); //user need to input more than 0 to run fetch data
    }, [query]);
    return (
    <>
        <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
        <div className='yeast'>
            <h1>Lollipop Music For Admin</h1>
        </div>
        <div className='sidebareiei'>
            <h1>Song management</h1>
        </div>
        <input
            className="search2"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Songbutton />
        <table class="content-table">
            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Released</th>
                <th>Categories</th>
                <th>Update</th>
                </tr>
            </thead>
            {
                data.map((data) =>(
                <tbody>
                    <tr>
                        <a href={`http://localhost:7000/Search/all/${data.artist}`}><td>{data.id}</td></a>
                        <td>{data.song}</td>
                        <td>{data.artist}</td>
                        <td>{data.album}</td>
                        <td>{data.released}</td>
                        <td>{data.pages}</td>
                <MyLink to="/upsong" class="up"><td class="up">Update</td></MyLink>
                    </tr>
                </tbody>
                ))
            }
        </table>
    </>
    );
}
export default User;
