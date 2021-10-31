import React, { useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary, Modal } from '@components';
import mockedMoviesList from './mocks/movies.js';
import store from './store';

// const App1 = ({ fetchMovies }) => {
//   useEffect(() => {
//     fetchMovies()
//   })
// }

// const mapDispatchToProps = dispatch => {
//   return {
//       fetchMovies: () => dispatch(({ type: "FETCH_MOVIES", filterType: "all" })),
//   }
// }

// export connect(null, mapDispatchToProps)(App)
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      modalType: "form",
      modalTitle: "add movie",
      movieId: 0,
      selectedMovie: {},
    }
  }

  onMovieCreate = e => {
    console.log('onmoviecreate')
  }

  onMovieEdit = (e, itemId) => {
    console.log('onmovieedit')
    this.setState({ modalTitle: "edit movie", movieId: itemId })
  }

  onMovieDelete = (e, movieId) => {
    console.log('onmoviedelete')
    this.setState({ modalType: "confirm", modalTitle: "delete movie", movieId })
  }

  showModal = e => {
    const { action, itemId } = e.target.dataset;

    console.log("item id", itemId);
    console.log("action", action);

    if (action) {
      switch(action) {
        case "add":
          this.onMovieCreate(e)
          break;
        case "edit":
          this.onMovieEdit(e, itemId)
          break;
        case "delete":
          this.onMovieDelete(e, itemId)
          break;
      }
    }
    
    this.setState({
        show: !this.state.show
    })
  }

  handleMovieSelect = movie => {
    this.setState({
      selectedMovie: movie,
    })
  }

  
  // <Context.Provider value={{
  //   handleMovieSelect: this.handleMovieSelect
  // }}>
  render() {
    return (
      <Provider store={store}>
        <Modal title={this.state.modalTitle} type={this.state.modalType} onClose={this.showModal} show={this.state.show} movieId={this.state.movieId}/>
        <ErrorBoundary>
          <Header selectedMovie={this.state.selectedMovie} onMovieCreate={this.showModal} onMovieSelect={this.handleMovieSelect}/>
        </ErrorBoundary>
        <main className="content">
          <ErrorBoundary>
            <MoviesList onMovieSelected={this.handleMovieSelect} showModal={this.showModal}/>
          </ErrorBoundary>
        </main>
        <Footer />
      </Provider>
    );
  }
}

export default App;
