import MovieListPage from "./movies/MovieListPage"
import ResponsiveAppBar from "./common/AppBar";
import About from "./common/About";
import Home from "./common/Home";
import { Routes, Route, Link } from "react-router-dom";
import MovieDetail from "./movies/MovieDetail";
import MovieForm from "./movies/MovieForm";
import SampleList from "./movies/SampleList";
import MovieFormWithValidation from "./movies/MovieFormWithValidation";
import MovieFormValidationMUI from "./movies/MovieFormValidationMUI";
import MovieEditForm  from './movies/MovieEditForm';
import NotFound from './common/NotFound';
import ArtistListPage from  './artists/ArtistListPage';

function App() {
  return (
    <div>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/sample" element={<SampleList />} />
        <Route path="/movies/:movieId" element={<MovieDetail/>}/>
        <Route path="/movies/create" element={<MovieFormValidationMUI/>}/>
        <Route path="/movies/:movieId/edit" element={<MovieEditForm/>}/>
        <Route path="/artists" element={<ArtistListPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
