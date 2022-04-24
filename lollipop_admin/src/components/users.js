import React, { useState, useEffect } from 'react'
import './forusers.css';
import Userbutton from './userbutton';
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
        // const res = axios.get('http://localhost:9000/view/user')
        const res = await axios.get(`http://localhost:9000/search/user/${query}`);
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
            <h1>User management</h1>
        </div>
        <input
            className="search"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Userbutton />
        <table class="content-table2">
            <thead>
                <tr>
                <th>#</th>
                <th>Roles</th>
                <th>Email</th>
                <th>Fullname</th>
                <th>Password</th>
                <th>Tel. Number</th>
                <th>Flag</th>
                <th>Update</th>
                </tr>
            </thead>
            {
                data.map((data) =>(
                <tbody>
                    <tr>
                        <a href={`http://localhost:7000/search/user/${data.Uid}`}><td>{data.Uid}</td></a>
                        <td>{data.roles}</td>
                        <td>{data.email}</td>
                        <td>{data.fullname}</td>
                        <td>{data.pword}</td>
                        <td>{data.tel}</td>
                        <td>{data.flag}</td>
                        <MyLink to="/upuser" class="up"><td class="up">Update</td></MyLink>
                    </tr>
                </tbody>
                ))
            }
        </table>
    </>
    );
}
export default User;
