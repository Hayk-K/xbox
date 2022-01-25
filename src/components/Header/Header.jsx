import React from "react";
import "./Header.css";
import logo from "../../img/logo.png";
import { FormControl, Form, Dropdown } from "react-bootstrap";
import user from "../../img/user.png";
import { NavLink, Link } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? "active__link" : "header__link ";

const Header = ({ value }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div>
        <NavLink className={setActive} to="/">
          Home
        </NavLink>
      </div>

      <div>
        <Dropdown>
          <Dropdown.Toggle id="header__dropdown">Games</Dropdown.Toggle>
          <Dropdown.Menu>
            <NavLink to="/games" className="header__nav">
              Call of Duty
            </NavLink>
            <NavLink to="/#" className="header__nav">
              Star Wars
            </NavLink>
            <NavLink to="/allgames" className="header__nav">
              All Games
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>
        <NavLink className={setActive} to="/community">
          Community
        </NavLink>
      </div>

      <div>
        <Form className="header__search">
          <FormControl
            type="search"
            placeholder="Search"
            className="header__search"
            aria-label="Search"
          />
        </Form>
      </div>

      <div className="header__myBox">
        <div>
          <img src={user} alt="user" />
        </div>

        <Dropdown>
          <Dropdown.Toggle id="header__dropdown">My XBOX</Dropdown.Toggle>
          <Dropdown.Menu>
            <NavLink to="#" className="header__nav">
              My account
            </NavLink>
            <NavLink to="/" className="header__nav">
              Registration
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  );
};

export default Header;
