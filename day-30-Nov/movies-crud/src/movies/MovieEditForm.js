import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';

const movieValidationSchema = yup.object({
    name: yup
        .string('Enter Movie name')
        .required('Movie name is required')
        .min(3, 'Movie name should be minimum 3 characters length')
        .max(100, 'Movie name cannot exceed 100 characters length'),
    director: yup
        .string('Enter Director name')
        .required('Director name is required')
        .min(5, 'Director name should be minimum 5 characters length')
        .max(100, 'Director name cannot exceed 100 characters length'),
    actor: yup
        .string('Enter Actor name')
        .required('Actor name is required')
        .min(5, 'Actor name should be minimum 5 characters length')
        .max(100, 'Actor name cannot exceed 100 characters length')
});

let initialValues = {
    name: '',
    director: '',
    actor: ''
}

function MovieEditForm() {

    const navigate = useNavigate();
    const params = useParams();
    const [dataLoaded, setDataLoaded] = useState(false)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: movieValidationSchema,
        onSubmit: values => {
            console.log(values)
            axios.patch("http://localhost:8080/movies/"+params.movieId, values)
                .then(res => {
                    console.log(res);
                    navigate("/movies/" + res.data.id);
                })
                .catch(err => {
                    console.log(err);
                })
        }     
    })
    
    useEffect(() => {
        axios.get("http://localhost:8080/movies/"+params.movieId)
            .then(res => {
                formik.setValues(res.data);
                setDataLoaded(true);
            })
    }, []);

    return (
        <>
            {dataLoaded &&
            <>
            <Box sx={{ height: 50 }}></Box>
            <Typography variant="h4" gutterBottom component="div">
                Edit Movie Form
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="name"
                        label="Enter Movie Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </div>
                <div>
                    <TextField
                        id="director"
                        label="Enter Director Name"
                        value={formik.values.director}
                        onChange={formik.handleChange}
                        error={formik.touched.director && Boolean(formik.errors.director)}
                        helperText={formik.touched.director && formik.errors.director}
                    />
                </div>
                <div>
                    <TextField
                        id="actor"
                        label="Enter Actor Name"
                        value={formik.values.actor}
                        onChange={formik.handleChange}
                        error={formik.touched.actor && Boolean(formik.errors.actor)}
                        helperText={formik.touched.actor && formik.errors.actor}
                    />
                </div>
                <div>
                    <Button variant="contained" onClick={formik.handleSubmit}>
                        Edit Movie
                    </Button>
                </div>
            </Box>
            </>}
        </>
    );

}

export default MovieEditForm;