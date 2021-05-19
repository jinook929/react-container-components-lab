import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }
  fetchSearchedReviews = (query = "narnia") => {
    const queryUrl = `${URL}&query=${query}`
    fetch(queryUrl).then(res => res.json()).then(data => {
      this.setState({reviews: data.results})
    })
  }
  handleInputChnage = (e) => {
    this.setState({searchTerm: e.target.value})
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    this.fetchSearchedReviews(this.state.searchTerm || "narnia")
  }
  render() {
    return (
      <div className="searched-movie-reviews">
        <h1>SearchableMovieReviewsContainer</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={this.state.searchTerm} onChange={this.handleInputChnage} />
          <button>Submit</button>
        </form>
        {this.state.reviews === [] ? <p><strong>No review found...</strong></p> : <React.Fragment><MovieReviews reviews={this.state.reviews} /><hr/></React.Fragment>}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
