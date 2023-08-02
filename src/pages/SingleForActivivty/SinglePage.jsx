import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { portfolio } from "../../helpers/portfolioList"

const SinglePage = () => {
    const {id} = useParams()
    const portfloiof = portfolio[id]

    return (
        <>
            <section className="text-gray-600 body-font">
                <div
                    className="container px-5 py-24 mx-auto flex flex-wrap"
                    bis_skin_checked={1}
                >
                    <div className="flex w-full mb-20 flex-wrap" bis_skin_checked={1}>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                        {portfloiof.title}
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        {portfloiof.review}
                    </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1" bis_skin_checked={1}>
                    <div className="flex flex-wrap w-1/2" bis_skin_checked={1}>
                        <div className="md:p-2 p-1 w-1/2" bis_skin_checked={1}>
                        <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={portfloiof.image01}
                        />
                        </div>
                        <div className="md:p-2 p-1 w-1/2" bis_skin_checked={1}>
                        <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={portfloiof.image02}
                        />
                        </div>
                        <div className="md:p-2 p-1 w-full" bis_skin_checked={1}>
                        <img
                            alt="gallery"
                            className="w-full h-full object-cover object-center block"
                            src={portfloiof.image03}
                        />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2" bis_skin_checked={1}>
                        <div className="md:p-2 p-1 w-full" bis_skin_checked={1}>
                        <img
                            alt="gallery"
                            className="w-full h-full object-cover object-center block"
                            src={portfloiof.image04}
                        />
                        </div>
                        <div className="md:p-2 p-1 w-1/2" bis_skin_checked={1}>
                        <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={portfloiof.image05}
                        />
                        </div>
                        <div className="md:p-2 p-1 w-1/2" bis_skin_checked={1}>
                        <img
                            alt="gallery"
                            className="w-full object-cover h-full object-center block"
                            src={portfloiof.image06}
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center">
                            <Link to='/contacts'>
                                <button className="bg-slate-950 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Заказать проект</button>
                            </Link>
                        </div>
                </section>

        </>

    )
}

export default SinglePage