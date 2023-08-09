import { Link } from "react-router-dom"
import './Videos.module.css'


const Videos = ({img, index}) => {
    return (
            <div className="card lg:w-1/3 w-full p-2" bis_skin_checked={1}>
                    <div className="flex relative" bis_skin_checked={1}>
                    <img
                        alt="gallery"
                        className="absolute inset-0 h-full object-cover object-center animate__animated animate__fadeInDown"
                        src={img}
                    />
                    <div
                        className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-50 transition duration-500"
                        bis_skin_checked={1}
                    >
                        <Link to={`/video/${index}`}>
                        <div className='card flex justify-center mt-12 mb-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                        </svg>
                        </div>
                        </Link>
                    </div>
                    </div>
            </div>
        
    )
}

export default Videos