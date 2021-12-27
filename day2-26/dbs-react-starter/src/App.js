import Counter from './Counter.js'
import MovieDetails from './Movies/MovieDetails.js';
import CounterHook from './CounterHook.js';
import MovieList from './Movies/MovieList.js';
function App() {
  // const movie = {
  //   id: 1,
  //   name: "Master",
  //   director: "suresh"
  // }
  // const production = {
  //   name: "MB Productions",
  //   location : "Film City"
  // }
  return (
    <div>
      {/* <h1>Musicality in React</h1>
      <Counter/>
      <MovieDetails movie={movie} production={production}/>
      <CounterHook/> */}
      <MovieList/>
    </div>
  );
}

export default App;
