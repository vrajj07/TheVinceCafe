import React from 'react'
import aboutImg from '../../Assets/about-img.jpg'
import { GiCheckMark } from "react-icons/gi";
import './About.css'

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <div className="about_grid container grid">

          <div className="about_img-wrapper">
            <img src={aboutImg} alt="About" className="about_img" />
          </div>

          <div className="about_content">
            <h2 className="section_title" data-title='About Us'>
              Fresh, organic coffee and delicious bites—crafted with quality, served with love, just for you.
            </h2>
            <p className="about_description">
              At Vince Cafe, we’re all about serving the finest organic coffee and
              irresistible appetizers in a warm, inviting atmosphere. Whether you 
              need a quick pick-me-up or a place to relax and enjoy great food, we’re 
              here to make every visit a delicious experience.
            </p>
            <div className="about_details grid">
              <p className="about_details-description">
                <GiCheckMark/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="about_details-description">
                <GiCheckMark/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="about_details-description">
                <GiCheckMark/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
