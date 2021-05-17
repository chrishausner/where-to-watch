import React from 'react';

class MoviePosterContainer extends React.Component {
    state = {
        loading: true,
        show: null,
        alternative: null,
    };

    async componentDidMount() {
        const apiKey = 'ccb91f40c0b41f8c43b28169d5833aee';
        const movieID = '425';
        const apiUrl = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + apiKey + '&language=en-US';
        const response = await fetch(apiUrl);
        const data = await response.json();
        //console.log(data);
        this.setState({ show: data.results, alternative: data, loading:false })
        //console.log(this.state.show)
    }



    render () {
        return(
            <div>
                <div>{this.state.show}</div>
            </div>
        );
    }
}

export default MoviePosterContainer;