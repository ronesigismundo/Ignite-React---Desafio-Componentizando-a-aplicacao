import { MovieCard } from './MovieCard';
import { Title } from './Title';

import '../styles/content.scss';

interface GenreResponse {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface Movies {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MovieContentProps {
  movies: Movies[];

  genres: GenreResponse;
}

export function Content({movies, genres}: MovieContentProps) {
  // Complete aqui
  return (
    <div className="container">
        <Title genres={genres.title}/>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
    </div>
  )
}   