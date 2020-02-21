import React from 'react';

import { moviesData } from './components/data';

import Searchform from './components/Search-Form';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

import './App.css';

class App extends React.Component {
  state = {
    minRating: 1,
    movies: moviesData,
    nameFilter: '',
    modalIsOpen: false,
    newMovie: { name: '', date: '', image: '', rating: '' },
    isLoading: false
  };

  onStarClick = nextValue => {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
    this.setState({ minRating: nextValue, isLoading: true });
  };

  showMovieList() {
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
      name: '',
      date: '',
      image: '',
      rating: ''
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
            : ''
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
            : ''
      }
    });
  };

  addImage = e => {
    this.setState({
      newMovie: {
        ...this.state.newMovie,
        image: /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
          ? e.target.value
          : ''
      }
    });
  };

  submitModal = e => {
    e.preventDefault();
    if (Object.values(this.state.newMovie).indexOf('') > -1) {
      alert('Please Enter Valid Movie Informations');
    } else {
      this.setState({
        movies: [...this.state.movies, this.state.newMovie],
        modalIsOpen: false,
        newMovie: { name: '', date: '', image: '', rating: '' }
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <Searchform
          onStarClick={this.onStarClick}
          rating={this.state.minRating}
          searchMovie={newNameFilter => {
            setTimeout(() => this.setState({ isLoading: false }), 1000);
            this.setState({
              nameFilter: newNameFilter,
              isLoading: true
            });
          }}
        />

        <MovieList
          movies={this.showMovieList()}
          isLoading={this.state.isLoading}
        />
        <button className='Add-btn' onClick={this.openModal}>
          +
        </button>

        <AddMovie
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
