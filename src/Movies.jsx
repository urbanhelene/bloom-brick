import data from "./movie.js";
import {Movie} from "./Movie.jsx";

export const Movies = () => {
    return (
        <div>
            {data.results.map((movie, index) => {
                return (<div><Movie movie={movie} /></div>)
            })}
        </div>
    )
}