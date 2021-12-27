import Grid from '@mui/material/Grid';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { pink } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function MovieListPage() {
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const loadMovies = () => {
        axios.get("http://localhost:8080/movies")
            .then(res => {
                setLoading(false)
                setMovies(res.data)
            })
            .catch(err => {
                setLoading(false)
                setError(true)
            })
    }
    useEffect(() => {
        setTimeout(loadMovies, 1000)
    }, [])

    const deleteMovie = (id) =>{
        axios.delete("http://localhost:8080/movies/"+id)
            .then(res=>{
                console.log("Deletion Succesful");
                axios.get("http://localhost:8080/movies")
                    .then(res=>setMovies(res.data))
                    .catch(err=>console.log("Error occured, please refresh"))
            })
            .catch(err=>{
                console.log("Error, couldn't delete");
            })
    }
    const getTableTags = () => {
        const tableTags = movies.map((movie) => (
            <TableRow key={movie.id}>
                <TableCell component="th" scope="row">
                    {movie.id}
                </TableCell>
                <TableCell align="right">{movie.name}</TableCell>
                <TableCell align="right">{movie.director}</TableCell>
                <TableCell align="right">{movie.actor}</TableCell>
                <TableCell align="right">
                    <Link to={"/movies/" + movie.id}>
                        Show 
                    </Link>&nbsp;&nbsp;&nbsp;
                    <Link to={"/movies/"+movie.id+"/edit"}>
                        Edit
                    </Link>&nbsp;&nbsp;
                    <Link to={"/movies"}>
                        <DeleteIcon sx={{ color: pink[500] }} onClick={()=>deleteMovie(movie.id)}/>
                    </Link>
                </TableCell>
            </TableRow>
        ))
        return tableTags;
    }

    const getMoviesGrid = () => {
        return (
            <Grid container>
                <Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 850 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Movie ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Director</TableCell>
                                    <TableCell align="right">Actor</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {movies.length > 0 ? getTableTags() : <p>No Rows Found</p>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        )
    }

    const getProgressTag = () => {
        return (
            <Box sx={{ display: 'flex' }}>
                Loading Movies .... <CircularProgress />
            </Box>
        )
    }

    const getErrorTag = () => {
        return (
            <Box sx={{ display: 'flex' }}>
                <Alert severity="error">
                    <AlertTitle>Error Loading Movies</AlertTitle>
                    Pls check with admin
                </Alert>
            </Box>
            
        )
    }

    return (
        <>
            <Link to={"/movies/create"}>
                Create New Movie
            </Link>
            <h3>List of Movies</h3>
            { loading && getProgressTag()}
            { movies && getMoviesGrid()}
            { error && getErrorTag() } 
        </>
    )
}
export default MovieListPage;