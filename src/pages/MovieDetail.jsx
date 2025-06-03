import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.png";
import useTitle from "../hooks/useTitle";

export default function MovieDetail() {
    const params = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`)
            const data = await response.json()
            setMovie(data);
        }
        fetchMovie();
    }, [params.id]);

    useTitle(`${movie.title}`);
    // Custom hook to set the document title for this page.

    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <img className="rounded-lg"
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup}
                        alt={movie.title}
                    />
                </div>
                <div className="max-w-2xl text-gray-700 dark:text-white">
                    <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">{movie.title}</h1>
                    <p className="mb-4">{movie.overview}</p>
                    {movie.genres && movie.genres.length > 0 && (
                        <p className="my-7 flex flex-wrap gap-5">
                            {movie.genres.map((genre, index) => (
                                <span key={index} className="border dark:border-white border-gray-900 p-3">
                                    {genre.name}
                                </span>
                            ))}
                        </p>
                    )}
                    <p className="my-4"><strong>Release Date:</strong> {movie.release_date}</p>

                    <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p className="ml-2 my-4"> {movie.vote_average ? `${movie.vote_average.toFixed(1)} / 10` : 'N/A'}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{movie.vote_count ? `${movie.vote_count} reviews` : 'No reviews yet'}</span>
                    </div>
                    
                    <p className="my-4">
                        <strong>Runtime:</strong> {movie.runtime ? <span>{`${movie.runtime} minutes`}</span> : 'N/A'}
                    </p>

                    <p className="my-4">
                        <strong>Budget:</strong> {movie.budget ? <span>${`${movie.budget}`}</span> : 'N/A'}
                    </p>

                    <p className="my-4">
                        <strong>Revenue:</strong> {movie.revenue ? <span>${`${movie.revenue}`}</span> : 'N/A'}
                    </p>

                    <p className="my-4">
                        <strong>Release Date:</strong> {movie.release_date ? <span>{`${movie.release_date}`}</span> : 'N/A'}
                    </p>

                    <p className="my-4">
                        <strong>IMDB Code:</strong> {movie.imdb_id ? <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a> : 'N/A'}
                    </p>
                </div>
            </section>
        </main>
    )
}