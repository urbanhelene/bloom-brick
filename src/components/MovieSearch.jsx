import { useEffect, useState } from "react";

const MovieSearch = ({ data, setResult }) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        let results = [];
        if (searchTerm == "") {
            results = data.results;
            setResult(results);
        } else {
            results = data.results.filter((item) => { return item.original_title.includes(searchTerm) });
            setResult(results);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                        htmlFor="large-input"
                    >
                        Search
                    </label>
                    <input
                        type="text"
                        id="large-input"
                        value={searchTerm}
                        placeholder="Enter movie name..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default MovieSearch;