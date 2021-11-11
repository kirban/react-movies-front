import React from 'react';
import { Provider } from 'react-redux';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary, Modal } from '@components';
import store from './store';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router';

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const routeMatch = useRouteMatch();

  console.log("history", history);
  console.log("location", location);
  console.log("params", params);
  console.log("routeMatch", routeMatch);

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
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//   }
// }

export default App;
