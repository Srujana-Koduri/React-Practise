function MovieDetails(props){
    const {movie} = props;
    return(
        <div>
            <h3>Move Details</h3>
            <p>Movie Id : {movie.id}</p>
            <p>Name : {movie.name}</p>
            <p>Director : {movie.director}</p>

            {/* <h3>Production Details</h3>
            <p>Production Name: {production.name}</p>
            <p>Production Location: {production.location}</p> */}
        </div>
    )
}

export default MovieDetails;