import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import { useEffect } from "react";
import useTitle from "../hooks/useTitle";

export default function MovieList({ apiPath, title }) {

    const { data: movies } = useFetch(apiPath);
    // destructuring data from  useFetch as movies.

    useTitle(title);
    // Custom hook to set the document title for this page.

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map((movie) => {
                        return (
                            <Card 
                                key={movie.id}
                                movie={movie}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}