import React from 'react';
import axios from 'axios';
import { endpoints, getImageUrl } from '../config';


export default class Genre extends React.Component {

    constructor(){
        super();

        this.state = {
            list: [],
          };
    }

    changeMovies = (genre) => {
        axios
        .get(endpoints.genreMovies(genre))
        .then((data) => {
            this.setState({
            list: data.data.results,
        });
      });
    };

    render() {
        const { genre, id, change} = this.props;
        return( 
                <button onClick={() => change(id)}>{genre}</button>
        );

    }

}