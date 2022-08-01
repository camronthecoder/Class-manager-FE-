import React from "react";
import Container from "../common/Container";
import Splash from '../common/Splash';
import homesplash from '../../assets/homesplash.jpg'

const Home = ()=>{
    return(
        <Container>
            <Splash image = {homesplash} style={{color: "#010101"}}>
                <h1 style = {{textShadow: '1px 1px white'}}>Welcome to Class Manager </h1>
                <h2 style = {{textShadow: '1px -1px white'}}>Schools organized</h2>
            </Splash>
            </Container>
    )
}

export default Home;