import React  from "react";
import bcg2 from '../assets/bcg2.mp4'
import Form from './Form'
import Navbar from "./Navbar";


function Main() {

    
    return (
        
        <div className="main">
            <Navbar></Navbar>
           
            <video src={bcg2} autoPlay loop muted />
            <div className="content">
                <div className="form-div">
                    <Form></Form>
                </div>
            </div>
        </div>
    )
}

export default Main