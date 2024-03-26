import {Link} from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import RegForm from '../forms/RegForm';
import LoginForm from "../forms/LoginForm";


function NavBar(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
    return (
        <div>
          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="/"><h1>Voyager Vault</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-brand me-auto mb-2 mb-lg-1">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/countries">Search Countries</Link></li>
                    <li><Link to="/wishlist">My Wishlist</Link></li>
                    <li><Link to="/destination">Destinations</Link></li>
                  </ul>
                  <div>
                    <Button className="formButton" variant="secondary" onClick={handleShow}>Register</Button>
                    <Button className="formButton" variant="success" onClick={handleShowLogin}>Log In</Button>
                  </div>
                  {/* GENERAL SEARCH NAVBAR FIELD
                    <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
            </nav>
          </header> 
          <RegForm show={show} handleClose={handleClose}/>
          <LoginForm show={showLogin} handleClose={handleCloseLogin}/>
        </div>
    )        
};

export default NavBar;