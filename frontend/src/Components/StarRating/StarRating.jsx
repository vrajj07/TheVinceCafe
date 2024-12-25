import React, {useState} from 'react'
import './StarRating.css'

const StarRating = ({onRatingChange}) => {

    const [rating, setRating]=useState(0)
    const handleClick = (value) =>{
        setRating(value)
        onRatingChange(value)
    }

    return (
    <>
        <div className='star_rating'>
            {
                [1,2,3,4,5].map((star) =>(
                    <span key={star} className={`star ${star <= rating ? 'filled' : ''}`} onClick={() => handleClick(star)}>
                        &#9733;
                    </span>
                ))
            }
        </div>
    </>
    )
}

export default StarRating
