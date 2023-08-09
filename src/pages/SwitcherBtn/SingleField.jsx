import { Link } from "react-router-dom"

const Singlefield = ({mainimage, title, index}) => {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg animate__animated animate__fadeInDown" bis_skin_checked={1}>
                                
                                <Link to={`/field/${index}`}>
                                    <img
                                        className="h-40 rounded w-full object-cover object-center mb-6"
                                        src={mainimage}
                                        alt="content"
                                    />
                                </Link>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    {title}
                                </h2>
                                </div>
        </div>
    )
}

export default Singlefield