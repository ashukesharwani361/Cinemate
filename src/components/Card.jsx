import { Link } from "react-router-dom";
import  Backup from "../assets/images/backup.png";

export default function Card({ movie }) {

    const image = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-1">
            <Link to={`/movie/${movie.id}`}>
                <img className="rounded-t-lg" src={ movie.poster_path ? image : Backup} alt="" />
            </Link>
            <div className="p-5">
                <Link to="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
            </div>
        </div>
    )
}