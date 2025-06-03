import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import useTitle from "../hooks/useTitle";


export default function Search({ apiPath }) {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    const { data: movies } = useFetch(apiPath, queryTerm);

    // useEffect(() => {
    //     document.title = queryTerm ? `Search results for "${queryTerm}" / Cinemate` : "Cinemate";
    // }, [])
    useTitle(`Search results for "${queryTerm}"`);

    return (
        <main>
            <section>
                <p className="text-3xl text-gray-800 dark:text-white font-bold text-center py-5">
                    { movies.length > 0 ?
                        `Search results for "${queryTerm}"` :
                        `No results found for "${queryTerm}". Please try a different search term.`
                    } 
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
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