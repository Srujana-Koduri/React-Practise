import { useState } from "react";
import MovieDetails from "./MovieDetails";
import './MovieList.css';

function MovieList(){
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: "Master",
            director: "Suresh"
        },
        {
            id: 2,
            name: "Sarkar",
            director: "Vijay"
        },
        {
            id: 3,
            name: "Bigil",
            director: "Kishore"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    // const colNames = ["id", "name", "director"]

    const getLiTags = () => {
        const liTags = movies.map(m=><li key={m.id}>{m.name}</li>);
        return liTags;
    }

    const getTableTags = () =>{
        const tableTags = movies.map(m=>{
            return <tr key={m.id}>
                {/* { colNames.map(cn =>{
                    return <td key={cn}>{m[cn]}</td>
                })} */}
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.director}</td>  
                <td>
                    <button onClick={()=>setSelectedMovie(m)}>Show Details</button>
                </td>  
            </tr>
        });
        return tableTags;
    }
    return (
        <div>
            <h3>List of Movies</h3>
            <ul>
                {getLiTags()}
            </ul>
            <table>
                <thead>
                    <tr>
                        {/* { colNames.map(cn=>{
                           return <th key={cn}>{cn}</th>
                        })} */}
                        <th>Movie Id</th>
                        <th>Movie Name</th>
                        <th>Director</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {getTableTags()}
                </tbody>
            </table>

            <button onClick={()=>setSelectedMovie(null)}>Hide Details</button>

            {selectedMovie && <MovieDetails movie={selectedMovie}/>}  
            {selectedMovie && <MovieDetails movie={selectedMovie}/>}  
            {selectedMovie && <MovieDetails movie={selectedMovie}/>}  

        </div>
    )
}

export default MovieList;