import { Link } from 'react-router-dom'
import Singlefield from './SingleField'
import { portfolio } from '../../helpers/portfolioList'

const FieldActiv = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
                <div>
                    <Link to="/">
                        <button
                            type="button"
                            class="bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Все проекты
                        </button>
                    </Link>
                    <Link to='/field'>
                        <button
                            type="button"
                            class="bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Сферы деятельности
                        </button>
                    </Link>
                    <Link to='/utilities'>
                        <button
                            type="button"
                            class="bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Услуги
                        </button>    
                    </Link>
                    <Link to='/clients'>
                        <button
                            type="button"
                            class="bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Клиенты
                        </button>
                    </Link>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
                            <div className="flex flex-wrap w-full mb-20" bis_skin_checked={1}>
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0" bis_skin_checked={1}>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900">
                                    Сферы деятельности
                                </h1>
                            <div className="h-1 w-20 bg-gray-700 rounded" bis_skin_checked={1} />
                            </div>
                            </div>
                            <div className="flex flex-wrap -m-4" bis_skin_checked={1}>
                                {portfolio.map((portfloiof, index, image, title, mainimage, subtitle, review, image01, image02, image03, image04, image05, image06) => {
                                    return <Singlefield
                                    key={index}
                                    index={index} 
                                    image={portfloiof.image}
                                    title={portfloiof.title}
                                    mainimage={portfloiof.mainimage}
                                    subtitle={portfloiof.subtitle}
                                    review={portfloiof.review}
                                    image01={portfloiof.image01}
                                    image02={portfloiof.image02}
                                    image03={portfloiof.image03}
                                    image04={portfloiof.image04}
                                    image05={portfloiof.image05}
                                    image06={portfloiof.image06} />
                                })}
                        </div>
                        </div>
                    </section>
                    </div>
                    </div>
        </section>
        </>
        

    )
}

export default FieldActiv