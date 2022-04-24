import './songbut.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
// make button to link path addsong and delsong
const Songbutton = () => (
    <div className='buttomsong'>
        <button className="add2"><MyLink to="/addsong">Add</MyLink></button>{' '}
        <button className="delete2"><MyLink to="/delsong">Delete</MyLink></button>{' '}
    </div>
);

export default Songbutton;