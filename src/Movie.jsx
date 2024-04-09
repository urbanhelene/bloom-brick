export const Movie = ({movie}) => {
    return (
        <div><h1>{movie.original_title}</h1>
        <p>{movie.release_date}</p></div>
    )
}