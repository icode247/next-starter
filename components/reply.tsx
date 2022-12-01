const Reply = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4">
                    <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy" />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">COMMENTOR</p>
                            <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                        </div>
                        <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
                    </div>
                </div>
                <p className="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Maxime quisquam vero adipisci beatae voluptas dolor ame.</p>
            </div>

            <h3>Leave a comment</h3>
            <form>
                <div className="mb-6 mt-6">
                    <textarea id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <button type="submit" className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">Post comment</button>
            </form>
        </div>
    )
}

export default Reply