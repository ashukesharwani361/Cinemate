export default function Button({ children }) {
    return (
        <button
            className='bg-gradient-to-r from-teal-400 to-blue-500
                    hover:from-pink-500 hover:to-orange-500 px-5 py-2
                    rounded-md text-white font-semibold'
        >
            {children}
        </button>
    )
}