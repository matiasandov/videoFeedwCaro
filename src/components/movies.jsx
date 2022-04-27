import React, { Component }  from 'react';
import Like from './likes';
import Pagination from './pagination';
//import {getMovies} from "../services/fakeMovieService";
import { paginate } from "../utils/pagination";
import {getGenres} from "../services/fakeGenreService";
import {getVideos} from "../services/videos";
import ListGroup from './listGroup';
import SearchBar from './SearchBar';
import BookData from "../services/Data.json"
import Home from './Home';

class Movies extends Component {
    state = {  
        movies: [
            {
                _id: "89381",
                title: "Terminator",
                genre: "Comedy",
                genreId: 6,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01",
                liked: true,
        
            },
        
            {
                _id: "89382",
                title: "Bee Movie",
                genre: "Comedy",
                genreId: 6,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
        
            },
        
            {
                _id: "89383",
                title: "Mean Girls",
                genre: "Comedy",
                genreId: 6,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
        
            },
        
            {
                _id: "89384",
                title: "Miss Americana",
                genre: "Comedy",
                genreId: 6,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
        
            },
        
            {
                _id: "89385",
                title: "Reputation Stadium Tour",
                genre: "Action",
                genreId: 5,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
        
            },
        
            {
                _id: "89386",
                title: "Long Pond Sessions",
                genre: "Action",
                genreId: 5,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
        
            },
        
            {
                _id: "89387",
                title: "Ma",
                genre: "Action",
                genreId: 5,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
        
            },
            {
                _id: "89388",
                title: "Peppa",
                genre: "Thriller",
                genreId: 7,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
        
            },
        
            {
                _id: "89389",
                title: "Beyonce Homecoming",
                genre: "Thriller",
                genreId: 7,
                numberInStock: 6,
                dailyRentalRate: 2.5,
                publishDate: "2018-01-01"
                , liked: true
            },
        
        
        
        ],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        videos: []
    } ;

    //este metodo se llamara cuando un componente se rendere
    componentDidMount(){
        //esto se agrega para tener el item all genres, lo que esta entre corchetes es un objeto
        const genres = [{name: "All Tags"}, ...getGenres()];

        const videos = [...getVideos()];

        //tambiend deberia de ir movies: getMovies pero como ya lo hardcodeaste no lo pondras
        this.setState( {genres, videos});
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter( m => m._id !== movie._id );
        this.setState({movies});
    };

    handleLike = (movie) =>{
        //creas copia de movies
        const movies = [...this.state.movies]
        //obtienes el index del objeto movie que se etsa reibiendo
        const index = movies.indexOf(movie);
        //crea una copia del objeto
        movies[index] = {...movies[index]};

        //va a guardar el booleano o opuesto, o sea das click y estaba en true, ahora estara en false
        movies[index].liked = !movies[index].liked

        //actualizas state
        this.setState({movies});
    };

    //para que la aplicacion sepa en que pagina esta actualmente
    handlePageChanged = (page) =>{
        this.setState({currentPage: page});
    };

    handleGenreSelect = (genre) =>{
        //el estado sabra que genre se selecciono
        this.setState({ selectedGenre: genre})
    }

    render() { 
         const {length : count } = this.state.videos;

         //para limpiar codigo y facilitarnos estar llamando this.state, movies lo estas renombrando a allMovies para no confundirlo con una constante de arriba creo de handleDelete
        const {pageSize, currentPage, selectedGenre, videos: allVideos} = this.state;
         if (count === 0) return <p>There are no movies on the database</p>
        
         //aqui se filtraran las peliculas segun su genero y estas se pasaran a paginate
         const filtered = 
         //si selectedGenre es true (o sea que hay un objeto asignado al estado) 
         //y este genre tiene un id (lo cual signifcaria que es un genre diferente a All Genres)
         selectedGenre && selectedGenre._id
         //se filtraran las peliculas con el id igual al del genero
         ? allVideos.filter(movie => movie.tags.find( genre => genre === selectedGenre._id))
         //si no es True que el genre seleccionado tiene un id, filtered = allMovies, o sea ALL GENRES
         : allVideos;

         //las movies de la pagina actual se renderizaran con paginate
         const movies = paginate(filtered, currentPage, pageSize);
        
        return (
<div className="row">

    <div className='row '>
        <SearchBar 
        placeholder="Search..." 
        data = {this.state.videos}
         />
    </div>
    {/* vas a organziar todo en dos columnas */}

{/* si en classname col-n le cambis n por otro numero, se va a ir haciendo mas grande la columna, se lo cambiamos de 2 a 3 */}
<div className="col-3">
    <ListGroup 
    items={this.state.genres} 
    // es para que listGroup sepa que item se selecciono
    selectedItem = {this.state.selectedGenre}

    onItemSelect={this.handleGenreSelect}
    
    
    ></ListGroup>
</div>

    <div className="col">
    <p> Showing {filtered.length} videos in the database. </p>
    

    {/* inputs de Pagination 
    onPageChanged es para levantar un evento cada vez que la pagina cambie
    */}

    <Home data = {filtered} ></Home>
    
    <Pagination 
    itemsCount = {filtered.length} 
    pageSize = {pageSize} 
    onPageChanged = {this.handlePageChanged}
    currentPage = {currentPage}
    />
    </div>
    
</div>

        );
    }
}
 
export default Movies;