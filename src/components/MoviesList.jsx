import { useState } from "react";
import Movie from "./Movie.jsx";
import MovieSearch from "./MovieSearch.jsx";
import data from "../Movies.jsx";

const MoviesList = () => {

    const [result, setResult] = useState(data.results);

    return (
        <div className="pt-20 pl-8">
            <MovieSearch data={data} setResult={setResult} />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Movies
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Ihre Lieblingsfilme auf Knopfdruck
            </p>
            {result && result.length > 0 ? (
                <div>
                    {result.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </div>
            ) : (
                <div>Keine Filme gefunden</div>
            )}
        </div>
    );
}

export default MoviesList;