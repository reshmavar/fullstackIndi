import React from "react";
import './Home.css';
import ContactForm from "../helpers/form";

function Home() {
    return <div className="home">
        <div className="home-left">
        <h2 className="home-text">A Complate Line of</h2> <br />
        <span className="home-text1">INDUSTRIAL</span> <br />
        <h2 className="home-text">SAFETY PRODUCTS</h2>
        </div>
        <div className="home-right">
            <ContactForm/>    
         </div>
    </div>
};

export default Home;