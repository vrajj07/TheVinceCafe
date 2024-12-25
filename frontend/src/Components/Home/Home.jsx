import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <>
        <section className="home">
            <div className="home_container container">
                <div className="home_content">
                    <span className="home_subtitle">
                        Welcome To The Vince!
                    </span>
                    <h1 className="home_title">
                        More Than Coffee: Discover Flavorful Delights
                    </h1>
                    <p className="home_description">
                        Welcome to Vince Cafe – where our coffee wakes you up, and our appetizers keep you hanging around! 
                        Come for the brews, stay for the bites, and leave with a full belly and a happy heart.
                    </p>
                    <div className="home_btns">
                        <Link to="/menupage" className="btn">Check Menu</Link>
                        <a href="#reservation" className="home_btn btn">Book A Table</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
