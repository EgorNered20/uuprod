import { Link } from "react-router-dom"


const Videos = ({img, index}) => {
    return (
            <div className="lg:w-1/3 adaptive p-2" bis_skin_checked={1}>
                    <div className="flex relative" bis_skin_checked={1}>
                    <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={img}
                    />
                    <div
                        className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-50 transition duration-500"
                        bis_skin_checked={1}
                    >
                        <Link to={`/video/${index}`}>
                        <div className='flex justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="290" height="200" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>
                        </div>
                        </Link>
                    </div>
                    </div>
            </div>
        
    )
}

export default Videos