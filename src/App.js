import React from 'react';
import { Provider } from 'react-redux';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary, Modal } from '@components';
import store from './store';
class App extends React.Component {
  constructor(props) {
    super(props)
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
            <MoviesList />
          </ErrorBoundary>
        </main>
        <Footer />
      </Provider>
    );
  }
}

export default App;
