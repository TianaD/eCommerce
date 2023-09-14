import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Row, Button, Col, Card, Container, NavDropdown, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CategoryModal from './CategoryModal';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
import { Products } from "./Products";
import './Landing.css';
import { TweenMax, gsap, Expo, TimelineMax, Linear, Back, Sine } from 'gsap/all';
import { BiCartAlt } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";



//namespace eCommerse.ClientApp.src.components
//{

export function Landing() {


    useEffect(function () {
        /* MENU SHOW */
        const showMenu = (toggleId, navId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId)

            if (toggle && nav) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show')
                })
            }
        }
        showMenu('nav-toggle', 'nav-menu')

        /* GSAP ANIMATION */
        /*HOME PRIMARY*/
        TweenMax.to(".home__primary", 2, {
            width: "100%",
            ease: Expo.easeInOut
        })
        gsap.from('.home__title', { opacity: 0, duration: 2, delay: 1.5, y: 100 })
        gsap.from('.home__img img', { opacity: 0, duration: 2, delay: 1.5, y: -100 })

        /*HOME SECONDARY*/
        TweenMax.to(".home__secondary", 2.5, {
            width: "100%",
            ease: Expo.easeInOut
        })
        gsap.from('.home__scroll', { opacity: 0, duration: 3, x: -100 })
        gsap.from('.home__year', { opacity: -1, duration: 1.5, delay: 1.5, x: 100 })

    }, [])
    

    return (
        <>

                <header class="l-header">
                    <nav class="nav bd-grid">
                        <div class="nav__toggle" id="nav-toggle">
                            <ion-icon name="reorder-two-outline"></ion-icon>
                        </div>
                        <BiHomeAlt2/>
                        <div class="nav__icon-left">
                            <a href="lightIndex.html" class="nav__icon-home"><ion-icon name="home-outline"></ion-icon></a>
                            <a href="#" class="nav__logo">Fashion</a>
                        </div>

                        <div class="nav__menu" id="nav-menu">
                            <ul class="nav__list">
                                <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
                                <li class="nav__item"><a href="" class="nav__link">Women</a></li>
                                <li class="nav__item"><a href="" class="nav__link">Men</a></li>
                                <li class="nav__item"><a href="" class="nav__link">Explore</a></li>
                            </ul>
                        </div>
                        <div class="nav__icon-cart">
                            <BiCartAlt/>
                        </div>
                    </nav>
                </header>

                <main class="main-bg">

                    <div class="home">
                        <div class="home__primary">
                            <h1 class="home__title">Fashion Online <br></br>Store</h1>

                            <div class="home__img">
                                <img src="assets/drippinOnStairs.jpg" alt="Tiana sitting in drip on Stairwell"></img>
                                <img src="/assets/drippinOnStairsB&W.jpg" class="img-top" alt="Walking Up Stairs"></img>
                                    </div>
                            </div>

                            <div class="home__secondary">
                                <a class="home__scroll" href="#about">SCROLL DOWN</a>
                                <span class="home__year">2023</span>
                            </div>
                        </div>
                </main>

                <script type="module" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"></script>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.4/gsap.min.js"></script>

                <script src="./app.js"></script>

        </>
    );
}

