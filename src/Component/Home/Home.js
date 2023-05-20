import React from "react";
import Banner from "./Banner/Banner";
import Bannerteam from "./Bannerteam/Bannerteam";
import Blog from "./Blog/Blog";
import Header from "./Header/Header";
import './Home.css'
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Team from "./Team/Team";
import Users from "./Users/Users";

const Home = () => {
    return (
        <div>
        <Header />
        <Services />
       <Banner />
       <Pricing />
       <Team />
       <Users />
       <Bannerteam />
       <Blog />
        </div>
       
    )
}

export default Home;