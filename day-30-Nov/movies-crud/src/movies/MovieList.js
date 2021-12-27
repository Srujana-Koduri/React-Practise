import Grid from "@mui/material/Grid"
import { useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import moviesData from "./MoviesData";

function MovieList() {
    const [movies, setMovies] = useState(moviesData);

    const getTableTags = () => {
        const tableTags = movies.map(m => (
            <TableRow
                key={m.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{m.id}</TableCell>
                <TableCell>{m.name}</TableCell>
                <TableCell>{m.director}</TableCell>
                <TableCell>{m.actor}</TableCell>
                <TableCell>
                    <Link to={"/movies/"+m.id}>Show Details</Link>
                </TableCell>
            </TableRow>
        ))
        return tableTags;
    }

    const getMovies = () =>{
        return(
            <Grid container>
                <Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Movie Id</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Director</TableCell>
                                    <TableCell>Actor</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {getTableTags()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        );
    }


    return (
        <>
            <Link to="/movies/create">Create New Movie</Link>
            <h3>List of Movies</h3>
            {getMovies()}
        </>
    )
}

export default MovieList;