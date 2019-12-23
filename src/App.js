import React from "react";

import Searchform from "./components/Search-Form";
import MovieList from "./components/MovieList";
import ModalForm from "./components/Modal";


import "./App.css";

const starwars = {
  id: "starwars",
  image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
  rating: 5,
  name: "Star Wars: The Rise Of Skywalker",
  date: "December 2019"
};
const avengers = {
  id: "avengers",
  image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
  rating: 4,
  name: "Avengers: Infinity War",
  date: "April 2018"
};
const frozen = {
  id: "frozen",
  image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
  rating: 4,
  name: "Frozen II",
  date: "November 2019"
};
const cat = {
  id: "cat",
  image: "http://www.impawards.com/2003/posters/cat_in_the_hat_ver4.jpg",
  rating: 2,
  name: "Cat In The Hat",
  date: "November 2003"
};
const fantastic = {
  id: "fantastic",
  image: "https://image.tmdb.org/t/p/w500/1M91Bt3oGspda75H9eLqYZkJzgO.jpg",
  rating: 3,
  name: "Fantastic Beasts and Where to Find Them",
  date: "November 2016"
};

const moviesToDisplay = [starwars, avengers, frozen, cat, fantastic];

class App extends React.Component {
  state = {
    minRating: 1,
    movies: moviesToDisplay,
    nameFilter: "",
    modalIsOpen: false,
    newMovie: { name: "", date: "", image: "", rating: "" },
    isLoading: false
  };

  onStarClick = nextValue => {
    setTimeout(()=>this.setState({isLoading:false}),1500)
    this.setState({ minRating: nextValue, isLoading:true });
  };

  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRating &&
        el.name
          .toLowerCase()
          .includes(this.state.nameFilter.toLowerCase().trim())
    );
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      name: "",
      date: "",
      image: "",
      rating: ""
    });
  };

  addTitle = e => {
    this.setState({
      newMovie: { ...this.state.newMovie, name: e.target.value }
    });
  };

  addDate = e => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        date:
          /^[0-9]{4}$/.test(e.target.value) && e.target.value <= 2020
            ? e.target.value
            : ""
      }
    });
  };

  addRating = e => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        rating:
          /^[0-9]{1}$/.test(e.target.value) && e.target.value <= 5
            ? e.target.value
            : ""
      }
    });
  };

  addImage = e => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        image: /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
          ? e.target.value
          : ""
      }
    });
  };

  submitModal = e => {
    e.preventDefault();
    if (Object.values(this.state.newMovie).indexOf("") > -1) {
      alert("Please Enter Valid Movie Informations");
    } else {
      this.setState({
        movies: [...this.state.movies, this.state.newMovie],
        modalIsOpen: false,
        newMovie: { name: "", date: "", image: "", rating: "" }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Searchform
          onStarClick={this.onStarClick}
          rating={this.state.minRating}
          onChange={newNameFilter => {
            setTimeout(()=>this.setState({isLoading:false}),1500)
            this.setState({
              nameFilter: newNameFilter ,isLoading:true
            });
          }}
        />
        <MovieList movies={this.getVisibleMovies()} isLoading={this.state.isLoading} />
        <button className="Add-btn" onClick={this.openModal}>
          Add Movie
        </button>
        <ModalForm
          modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          addTitle={this.addTitle}
          addDate={this.addDate}
          addRating={this.addRating}
          addImage={this.addImage}
          submitModal={this.submitModal}
        />
 
      </div>
    );
  }
}

export default App;
