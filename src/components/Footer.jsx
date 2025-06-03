import { NavLink } from "react-router-dom";

export default function footer() {
    return (
        <footer className="bg-white shadow-sm dark:bg-gray-900">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2026 <NavLink href="/" className="hover:underline">Cinemate</NavLink>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">Instagram</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">X</a>
                    </li>
                    <li>
                        <a href="https://github.com/ashukesharwani361" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="#" target="_blank" className="hover:underline" rel="noreferrer">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}