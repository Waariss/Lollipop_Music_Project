import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
class Navbar extends React.Component {
    render() {
        return (
            <div class="navbar">
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
            <nav>
                <MyLink to="/"><FaHome /> Home</MyLink>
                <MyLink to="/users"><FaUserAlt /> Users</MyLink>
                <MyLink to="/editsong"><FaHeadphonesAlt /> Edit song</MyLink>
                <MyLink to="/login"><FaSignOutAlt /> Log out</MyLink>
            </nav>
        </div>
        );
    }
}
export default Navbar;