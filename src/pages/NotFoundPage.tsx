

const NotFoundPage = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-white">
            <h1 className="text-9xl font-black text-gray-200">404</h1>
            <p className="text-2xl font-bold tracking-light text-gray-900 sm:text-4xl">Uh-oh!</p>
            <p className="text-gray-500 text-lg font-medium mt-4">We can't find that page.</p>
            <button className="mt-6 inline-block rounded bg-violet-600 px-5 py-3 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring">
                Go Back Home
            </button>
        </div>
    )
};

export default NotFoundPage;