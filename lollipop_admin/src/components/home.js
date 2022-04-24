import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import '../homepage.css'; 
const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
class mindmhoo extends React.Component {
  render() {
    return (
      <>
      <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet"></link>
      <header id="top">
        <h1><i class="fa-solid fa-lollipop"></i> Lollipop Music For Admin</h1>
      </header>
      <div class="htittle">
          <h1>Want do you want to edit</h1>
      </div>
      <div class="container">
        <div class="card">
            <figure>
            <MyLink to="/users"><img src="http://localhost:8000/listen3.jpg" alt="Profile"></img></MyLink>
            </figure>
          <p class="name"><h1>Users</h1></p>
        </div>
        <div class="card">
            <figure>
            <MyLink to="/editsong"><img src="http://localhost:8000/Browse.jpg" alt="Profile"></img></MyLink>
            </figure>
            <p class="name"><h1>Edit song</h1></p>
        </div>
      </div>
      </>
    );
  }
}
export default mindmhoo;