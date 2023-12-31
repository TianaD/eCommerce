import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { BiCartAlt } from "react-icons/bi";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
        <header>
            <Navbar className="navbar-expand-sm navbar-toggleable-sm" container light>
                <NavbarBrand tag={Link} to="/"><h3>eCommerce</h3></NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                        <NavItem className='NavItem'>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem className='NavItem'>
                            <NavLink tag={Link} className="text-dark" to="/">Women</NavLink>
                        </NavItem>
                        <NavItem className='NavItem'>
                            <NavLink tag={Link} className="text-dark" to="/">Men</NavLink>
                        </NavItem>
                        <NavItem className='NavItem'>
                            <NavLink tag={Link} className="text-dark" to="/"><BiCartAlt/></NavLink>
                        </NavItem>
                        {/*<NavItem className='NavItem'>*/}
                        {/*    <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>*/}
                        {/*</NavItem >*/}
                        {/*<NavItem className='NavItem'>*/}
                        {/*    <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>*/}
                        {/*</NavItem>*/}
                    </ul>
                </Collapse>
            </Navbar>
        </header>
    );
  }
}
