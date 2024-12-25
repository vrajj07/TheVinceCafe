import React from 'react'
import { features } from '../../Data'
import shape from '../../Assets/shape.png'
import './Features.css'

const Features = () => {
  return (
    <>
        <section className="features section" id="features">
            <h2 className="section_title" data-title='Features'>
                Our Best Features
            </h2>
            <div className="features_grid container grid">
                {features.map(({img, title, description},index)=>{
                    return(
                        <div className="features_item" key={index}>
                            <img src={img} alt="" className="feature_img" />
                            <h3 className="feature_title">{title}</h3>
                            <p className="feature_description">{description}</p>
                            <img src={shape} alt="" className="feature_shape" />
                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Features
