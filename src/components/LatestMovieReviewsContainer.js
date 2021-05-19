import React, { Component } from 'react';
// import axios from 'axios'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const latestReviewsUrl = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ"
const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;
// Code LatestMovieReviewsContainer Here

export class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       reviews: []
    }
  }
  fetchLatestReviews = () => {
    // axios.get(latestReviewsUrl).then(res => {
    //   this.setState({reviews: res.data.results})
    // })
    fetch(URL).then(res => res.json()).then(data => {
      this.setState({reviews: data.results})
    })
  }
  componentDidMount() {
    this.fetchLatestReviews()
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews Container</h1>
        <React.Fragment><MovieReviews reviews={this.state.reviews} /></React.Fragment>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
