import { Link } from 'react-router-dom'
import client1 from './../../img/client1.jpg'
import client2 from './../../img/client2.jpg'
import client3 from './../../img/client3.jpg'
import client4 from './../../img/client4.jpg'
import client5 from './../../img/client5.jpg'
import client6 from './../../img/client6.jpg'
import client7 from './../../img/client7.jpg'
import client8 from './../../img/client8.jpg'

const Clients = () => {
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
                            class="bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
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
                            class="bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Клиенты
                        </button>
                    </Link>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
                            <div className="flex flex-wrap w-full mb-20" bis_skin_checked={1}>
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0" bis_skin_checked={1}>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900 animate__animated animate__fadeInLeft">
                                    Наши клиенты
                                </h1>
                                <div className="h-1 w-20 bg-gray-700 rounded" bis_skin_checked={1} />
                            </div>
                            </div>
                            <div className="flex flex-wrap -m-4 animate__animated animate__fadeInDown" bis_skin_checked={1}>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client1}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    KFC
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client2}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Брянский молочный комбинат
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client3}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Borjomi
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client4}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    tvzavr
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client5}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    ЭкоНива
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client6}
                                    alt="content"
                                />
                                <h2 className="text-base text-gray-900 font-medium title-font mb-4">
                                    Nestle
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client7}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Unilever
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={client8}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    CoolBrew
                                </h2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                    </div>
                </div>
            </section>

        </>
        
    )
}

export default Clients