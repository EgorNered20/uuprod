const Navbar = () => {
    return (
        <header className="text-black body-font">
            <div
                className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
                bis_skin_checked={1}
            >
                <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                <span className="ml-3 text-xl">UU Prodaction</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 uppercase text-gray-500">Commerсial</a>
                <a className="mr-5 uppercase">Music Video</a>
                <a className="mr-5 uppercase">Film & TV</a>
                </nav>
                <a className="inline-flex items-center mr-5 uppercase">Directors</a>
                <a className="inline-flex items-center mr-5 uppercase">About</a>
                <a className="inline-flex items-center mr-5 uppercase">Contact</a>
            </div>
        </header>
    )
}

export default Navbar