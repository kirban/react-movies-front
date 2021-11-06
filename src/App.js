import React from 'react';
import { Provider } from 'react-redux';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary, Modal } from '@components';
import store from './store';
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

  render() {
    return (
      <Provider store={store}>
        <Modal />
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <main className="content">
          <ErrorBoundary>
            <MoviesList showModal={this.showModal}/>
          </ErrorBoundary>
        </main>
        <Footer />
      </Provider>
    );
  }
}

export default App;
