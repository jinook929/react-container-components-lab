// Code MovieReviews Here
import React from 'react'

function MovieReviews(props) {
  return (
    <div className="review-list">
      {props.reviews.map(review => (<div className="review" key={review.link.url}><h2>{review.display_title}</h2><p>{review.summary_short}</p></div>))}
    </div>
  )
}

export default MovieReviews
