import React from 'react';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary, Modal, ModalForm } from '@components';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }

  onMovieCreate = e => {
    console.log('onmoviecreate')
  }

  onMovieEdit = e => {
    console.log('onmovieedit')
  }

  onMovieDelete = e => {
    console.log('onmoviedelete')
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
      <>
        <Modal title="" onClose={this.showModal} show={this.state.show}>
          <ModalForm />
        </Modal>
        <Header onMovieCreate={this.showModal}/>
        <main className="content">
          <ErrorBoundary>
            <MoviesList showModal={this.showModal}/>
          </ErrorBoundary>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
