import React from "react";
import {Routes, Route} from 'react-router-dom'
import Container from "..//common/Container";
import Home from "../Home/Home";
import Login from "../Auth/Login";
import Navbar from "../Navbar/Navbar";
import Self from "../Student/Self";
import Students from "../Student/Students";



const AppRouter = () => {


    //home //login 
    //sstudents
    //mypage

    return(
        <Container>
                        <Navbar />

            <Routes>
                <Route path ="/" element={<Home />}/>
                <Route path ="/login" element={<Login />}/>
                <Route path ="profile" element={<Self />}/>
                <Route path ="/students" element={<Students />}/>


            </Routes>
            </Container>
    )
}

export default AppRouter