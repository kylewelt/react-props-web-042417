import React from 'react'
import ReactDOM from 'react-dom'

class MovieCard extends React.Component {
  render () {
    return (
      <div className='movie-card'>
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres:
          {this.props.genres.join(', ')}
        </small>
      </div>
    )
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
}

// ReactDOM.render(
//   <MovieCard
//     title='Mad Max: Fury Road'
//     poster='http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'
//     genres={['Action', 'Adventure', 'Science Fiction', 'Thriller']}
//   />,
//   document.getElementById('root')
// )

ReactDOM.render(
  <MovieCard
    title='Jurassic World'
    poster='http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg'
    genres={['Action', 'Adventure', 'Science Fiction', 'Thriller']}
  />,
  document.getElementById('root')
)
