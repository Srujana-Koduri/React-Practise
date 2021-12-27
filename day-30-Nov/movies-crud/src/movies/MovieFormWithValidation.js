import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';

function MovieFormWithValidation() {

    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [actor, setActor] = useState('');
    const [nameError, setNameError] = useState('');
    const [directorError, setDirectorError] = useState('');
    const [actorError, setActorError] = useState('');

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError('');
    }

    const handleDirectorChange = (e) => {
        setDirector(e.target.value);
        setDirectorError('');
    }

    const handleActorChange = (e) => {
        setActor(e.target.value);
        setActorError('');
    }

    const validateData = () => {
        let isValid = true; 
        if(name === null || name===""){
            setNameError("Name cannot be Empty");
            isValid = false;
        }
        if(director === null || director===""){
            setDirectorError("Director cannot be Empty");
            isValid = false;
        }
        if(actor === null || actor===""){
            setActorError("Name cannot be Empty");
            isValid = false;
        }
        return isValid;
    }

    const submitMovie = () => {
        const isValid = validateData();
        if(!isValid)
            return;
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
                    <span>{nameError}</span>
                </div>
                <div>
                    <label>Enter Director Name:</label>
                    <input type="text" value={director} onChange={handleDirectorChange} />
                    <span>{directorError}</span>
                </div>
                <div>
                    <label>Enter Actor Name:</label>
                    <input type="text" value={actor} onChange={handleActorChange} />
                    <span>{actorError}</span>
                </div>

                <button onClick={submitMovie}>Submit</button>
            </Box>
        </>
    )
}

export default MovieFormWithValidation;