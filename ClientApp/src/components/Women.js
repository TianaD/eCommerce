import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Row, Button, Col, Card, Container, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';



export function Women() {

    useEffect(function () {
        axios.get("https://localhost:7165/categories/products/id=1").then((response) => {
            console.log(response.data)
        })


    }, [])
}