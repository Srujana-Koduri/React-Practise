import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';

function MovieForm() {

    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [actor, setActor] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDirectorChange = (e) => {
        setDirector(e.target.value);
    }

    const handleActorChange = (e) => {
        setActor(e.target.value);
    }

    const submitMovie = () => {
        let movie = {name, director, actor}
        console.log(movie);
        axios.post("http://localhost:8080/movies",movie)
        .then(res=>{
            console.log(res);
            navigate("/movies/"+res.data.id);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
            <Box sx={{ margin: "10px" }}>
                <div>
                    <Link to="/movies">Back to Movies List</Link>
                    <h3> Create New Movie </h3>
                </div>
                <div>
                    <label>Enter Movie Name:</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Enter Director Name:</label>
                    <input type="text" value={director} onChange={handleDirectorChange} />
                </div>
                <div>
                    <label>Enter Actor Name:</label>
                    <input type="text" value={actor} onChange={handleActorChange} />
                </div>

                <button onClick={submitMovie}>Submit</button>
            </Box>
        </>
    )
}

export default MovieForm;