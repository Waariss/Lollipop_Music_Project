import {BrowserRouter, Routes, Route} from "react-router-dom";
import React, { Component } from 'react';
import Home from "./components/home";
import NavBar from "./components/navbar";
import User from "./components/users";
import Edit from "./components/song";
import Adduser from "./components/adduser";
import Deluser from "./components/deluser";
import Upuser from "./components/upuser";
import Addsong from "./components/addsong";
import Delsong from "./components/delsong";
import Upsong from "./components/upsong";
import './App.css';  
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
render(){
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/users" element={<User />} />
          <Route path="/editsong" element={<Edit />} />
          <Route path="/login" element={<About />} />  
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/deluser" element={<Deluser />} />
          <Route path="/upuser" element={<Upuser />} />
          <Route path="/addsong" element={<Addsong />} />
          <Route path="/delsong" element={<Delsong />} />
          <Route path="/upsong" element={<Upsong />} />
      </Routes>
    </BrowserRouter>
  );
}
}
function About() {
  window.location.replace('http://localhost:7000/login2');
  return null;
}
export default App;