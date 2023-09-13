import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Row, Button, Col, Card, Container, NavDropdown, Nav, Grid, Item } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryModal from './CategoryModal';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export function Products(props) {

    var products = props.selectedCategory?.products
    console.log(products)
    //map through product array and inject rows into HTML
    var productsHTML = products.map((element) => {
        return
        <Row>
            <Col className="square border">{element.name}</Col>
            <Col className="bg-success p-2">{element.description}</Col>
            <Col className="bg-success p-2">{element.price}</Col>
        </Row>

    })
    return (
        <>

            <div className="App">
                <Container>
                    {productsHTML}
                </Container>
            </div>

        </>
    );


}

