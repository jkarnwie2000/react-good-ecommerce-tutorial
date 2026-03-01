import React from "react";
import UndrawBooks from '../assets/Undraw_Books.svg'

const Landing = () => {
    return (
        <section id="lannding">
            <header>
             <div className="header__container">
             <div className="header__description">
            <h1>Liberia's most awarded online library platform</h1>
            <h2>Find your dream book with Julius Gold's online <span className="purple">library</span></h2>
            <a href="#features">
            <button className="btn">Browse books</button>
            </a>
            </div>
            </div>
            <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
            </figure>   
            </header>
        </section>
    )
}

export default Landing