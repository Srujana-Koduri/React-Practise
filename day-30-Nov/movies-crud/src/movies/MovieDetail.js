import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import React from 'react';
import MovieCard from './MovieCard';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function MovieDetail() {
    let param = useParams();
    const [movie, setMovie] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const url = "http://localhost:8080/movies/" + param.movieId;

    React.useEffect(() => {
        axios.get(url)
            .then(res => {
                setMovie(res.data);
            })
            .catch(err => {
                if (err.response.status === 404)
                    setErrorMessage("Movie Not Found");
            })
    }, []);

    const likeMovie=(name)=>{
        alert("You have liked "+name+" Movie");
    }

    return (
        <div>
            <Link to="/movies">Back to Movies List</Link>
            {/* {movie &&
                <div>
                    <h3>Movie Details with Id: {param.movieId} </h3>
                    <p>Movie Name: { movie.name }</p>
                    <p>Director: {movie.director}</p>
                    <p>Actor: {movie.actor}</p>
                </div>
            } */}

            {movie &&
                <MovieCard movie={movie} likeMovie={likeMovie}/>
            }
            {
                errorMessage &&
                <Box sx={{ margin: 10 }}>
                    <Alert severity="error">
                        <AlertTitle>{errorMessage}</AlertTitle>
                        Please go back to Movies List
                    </Alert>
                </Box>
            }

        </div>
    )
}

export default MovieDetail;