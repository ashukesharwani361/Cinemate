import { Link } from 'react-router-dom';
import image from '../assets/images/pagenotfound.png';
import Button from '../components/Button';
import useTitle from '../hooks/useTitle';

export default function PageNotFound() {

    useTitle("Page Not Found");
    // Custom hook to set the document title for this page.

    return(
        <main>
            <section className='flex flex-col justify-center '>
                <div className='flex flex-col items-center my-4'>
                    <p className='text-7xl text-gray-700 font-bold text-center my-10 dark:text-white'>404, Oops</p>
                    <div className='max-w-lg'>
                        <img src={image} alt='404 page not found'/>
                    </div>
                </div>
                <div className='flex flex-col items-center my-7'>
                    <Link to="/">
                        <Button>Back to Cinemate</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}