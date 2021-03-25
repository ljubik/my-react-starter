import React from 'react';
import Header from '../components/Header/Header';
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import db from "../db/db.json";

const HomePage = (props) => {
    
    return (
        <>
            <Header props={props} />

            <Main db={db}/>
            <Footer />
        </>
    );
};

export default HomePage;