import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Row, Button, Col, Card, Container, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryModal from './CategoryModal';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Navbar from 'react-bootstrap/Navbar';
import { Products } from "./Products";
import { NavMenu } from "./NavMenu";

export function Home() {
    const [categories, setCategories] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({})
    const [productDisplay, setProductsDisplay] = useState(false)
    const [addCategory, setAddCategory] = useState()
    const buttonStyle = {
        border: "#DAD2D8",
        borderStyle: "solid",
        borderColor: "#DAD2D8",
        borderRadius: "0",
        backgroundColor: "white",
        color: "rosybrown",
        margin: "7px",
    }

    const body = {
        backgroundColor: "#DAD2D8",
    }




    function handleProductDisplay(category) {
        setProductsDisplay(true)
        setSelectedCategory(category)
        setModalOpen(true)
    }



    var categoriesHTML = categories.map((element) => {
        return (
            <Button className="CategoryButtons" style={buttonStyle} onClick={() => handleProductDisplay(element)}>{element.name}</Button>

        )
    })
    return (
        <>
            <NavMenu />

            {categoriesHTML}
            {productDisplay && <Products selectedCategory={selectedCategory} />}
            <CategoryModal
                selectedCategory={selectedCategory}
                isOpen={modalOpen}
                setIsOpen={setModalOpen}
                categories={categories}
                setCategories={setCategories}
            />
        </>
    );

    //var categoriesHTML = []
    //for (let i = 0; i < categories.length; i += 2) {
    //    let element = <Row>

    //        <Col className='m-2'>

    //            <Card>

    //                <Card.Body>

    //                    <Card.Title>{categories[i].name}</Card.Title>
    //                    <Card.Text>{categories[i].description}</Card.Text>
    //                    <Button className='mx-2' onClick={() => {
    //                        setModalOpen(true)
    //                        setSelectedCategory(categories[i])
    //                    }}>Edit</Button>

    //                </Card.Body>

    //            </Card>

    //        </Col>
    //        {(i + 1 < categories.length) &&
    //            <Col className='m-2'>
    //                <Card>
    //                    <Card.Body>
    //                        <Card.Title>{categories[i + 1].name1}</Card.Title>
    //                        <Card.Text>{categories[i + 1].description}</Card.Text>
    //                        <Button className='m-2' onClick={() => {
    //                            setModalOpen(true)
    //                            setSelectedCategory(categories[i + 1])
    //                        }}>Edit</Button>
    //                    </Card.Body>

    //                </Card>

    //            </Col>}

    //    </Row>
    //    categoriesHTML.push(element)
    //}
    return (
        <>
            <Container >{categoriesHTML}</Container>


            <h1 className='pageTitle'>E-Commerse Web Application Title</h1>

            <ul className='bodyNav'>
                <li><a href='#Groceries'>Groceries</a></li>
                <li><a href='#Clothes'>Clothes</a></li>
                <li><a href='#Electronics'>Electronics</a></li>
                <li><a href='#Jewelry'>Jewelry</a></li>
                <li><a href='#Instrumental'>Instrumental</a></li>
                <li><a href='#Home_Applicances'>Home Appliances</a></li>
            </ul>

            <p></p>


        </>
    );

    //export class Home extends Component {
    //static displayName = Home.name;
    //console.log(response)
    //render() {
    //    return (
    //        

}

