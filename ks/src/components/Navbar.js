import React from 'react'
import chomar from "../images/chomar.png";
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { connect } from 'react-redux';

const Navbar = (props) => {

    const totalCount = props.cart.reduce((total, product) => (total = total + product.count), 0);
    console.log(totalCount);
    return (
        <>
            <div className="border-bottom-1 py-1 fixed-top">

                <div className="container-fluid">
                    <nav style={{ borderBottom: "1px solid #2196F3" }} className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                            <img src={chomar} width="70px" alt="chomar" /> KASPERSKY
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a style={{ color: "#2196F3", fontWeight: "bold", fontStyle: "italic", fontSize: "18px", fontFamily: "arial" }}
                                        className="nav-link active" aria-current="page" target="_blank"
                                        href="https://www.kaspersky.com.tr/blog/">BLOG</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "#2196F3", fontWeight: "bold", fontStyle: "italic", fontSize: "18px", fontFamily: "arial" }}
                                        className="nav-link" target="_blank" href="https://www.kaspersky.com.tr/partners">Destek</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "#2196F3", fontWeight: "bold", fontStyle: "italic", fontSize: "18px", fontFamily: "arial" }}
                                        className="nav-link" target="_blank" href="https://www.kaspersky.com.tr/about">Hakkımızda</a>
                                </li>
                                <li className="nav-item">
                                    <a style={{ color: "#2196F3", fontWeight: "bold", fontStyle: "italic", fontSize: "18px", fontFamily: "arial" }}
                                        href="https://www.kaspersky.com.tr/about/contact" target="_blank" className="nav-link ">Bize Ulaşın</a>
                                </li>
                                <li className="nav-item">
                                    <Link style={{ color: "#2196F3", fontWeight: "bold", fontStyle: "italic", fontSize: "18px", fontFamily: "arial" }}
                                        to="/cart" className="nav-link ms-4"><AiOutlineShoppingCart />( {totalCount} )</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Navbar)