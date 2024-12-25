import React, {useState} from 'react'
import StarRating from '../StarRating/StarRating'
import './ReviewsPage.css'

const ReviewsPage = () => {

  const [rating, setRating] = useState(0);

  const handleRatingClick = (rating) => {
    setRating(rating);
  };

  return (
    <>
      <main className='reviews-page'>
        <section className='display-reviews section'>
          <h2 className="section_title" data-title="Reviews">
            What Client Say's
          </h2>
        </section>

        <section className='add-reviews'>
          <h2 className="section_title" data-title="Add Yours">
            Your Feedback, Our Inspiration!
          </h2>
          
          <form className='add_review_form grid'>
            <div className="form_input-div">
              <input
                type="text"
                name="revName"
                className="form_input"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form_input-div">
              <input
                type="email"
                name="revEmail"
                className="form_input"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form_input-div">
              <input
                type="date"
                name="revDate"
                className="form_input date-input"
                placeholder="Date Of Visit"
                required
              />
            </div>

            <div className="form_input-div">
              <label>Rate Us:</label>
              <StarRating onRatingChange={handleRatingClick} />
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default ReviewsPage
