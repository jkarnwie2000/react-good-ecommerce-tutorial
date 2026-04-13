import React from "react";

import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/" className="footer__logo">
                        <figure>
                            <img src="/assets/Library.svg" className="footer__logo--img" alt="" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link>
                        <span className="footer__link no-cursor">About</span>
                        <Link to="/books" className="footer__link">Books</Link>
                        <Link to="/cart" className="footer__link">Cart</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2026 Julius Gold's Library
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer