

interface Genres {
  genres: string;
}

export function Title( {genres}: Genres) {
  return (
    <header>
          <span className="category">Categoria:<span> {genres}</span></span>
    </header>
  )
}