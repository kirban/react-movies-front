import React from 'react';
import '@styles/index.scss';
import { Header, MoviesList, Footer, ErrorBoundary } from '@components';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   onMovieCreate = e => {
//     console.log('onmoviecreate')
//   }

//   onMovieEdit = e => {
//     console.log('onmovieedit')
//   }

//   onMovieDelete = e => {
//     console.log('onmoviedelete')
//   }

//   showModal = e => {
    
//   }

//   render() {
//     return (
//       <>
//         <Modal title="" onClose={this.showModal} show={this.state.show}>
//           <p>Test Here</p>
//         </Modal>
//         <Header onMovieCreate={this.onMovieCreate}/>
//         <main className="content">
//           <ErrorBoundary>
//             <MoviesList />
//           </ErrorBoundary>
//         </main>
//         <Footer />
//       </>
//     );
//   }
// }

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <ErrorBoundary>
          <MoviesList />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default App;
