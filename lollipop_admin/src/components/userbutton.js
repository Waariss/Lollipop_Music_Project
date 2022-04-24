import './userbut.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
// make button to link path addsong and delsong
const Userbutton = () => (
    <div className='buttomuser'>
        <button className="add"><MyLink to="/adduser">Add</MyLink></button>{' '}
        <button className="delete"><MyLink to="/deluser">Delete</MyLink></button>{' '}
    </div>
);

export default Userbutton;