import { Component } from 'react';
import axios from 'axios';
import * as React from 'react';
import {Link} from 'react-router-dom';


class SampleList extends Component {

    state = {
        movies : []
    }

    componentDidMount(){
        axios.get('http://localhost:8080/movies')
        .then(res=>{
            this.setState({
                ...this.state.movies,
                movies:res.data
            })
        })

    }

    getLiTags = () => {
        const liTags = this.state.movies.map(m => <li key={m.id}>{m.name}</li>);
        return liTags;
    }

    getTableTags = () => {
        const tableTags = this.state.movies.map(m => (
            <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.director}</td> 
                <td>
                    <Link to={"/movies/"+m.id}>Show Details</Link>
                </td>  
            </tr> 
        ))
        return tableTags;
    }

    render() {
        return (
            <div>
                <h3>List of Movies</h3>
                <ul>
                    {this.getLiTags()}
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Movie Id</th>
                            <th>Movie Name</th>
                            <th>Director</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTableTags()}
                    </tbody>
                </table> 
            </div>
        )   
    }
}

export default SampleList;