import { Link } from 'react-router-dom'
import Toor from './../../img/toor.jpg'

const Clients = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
                <div>
                    <Link to="/">
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Все проекты
                        </button>
                    </Link>
                    <Link to='/field'>
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Сферы деятельности
                        </button>
                    </Link>
                    <Link to='/utilities'>
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Услуги
                        </button>    
                    </Link>
                    <Link to='/clients'>
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Клиенты
                        </button>
                    </Link>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
                            <div className="flex flex-wrap w-full mb-20" bis_skin_checked={1}>
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0" bis_skin_checked={1}>
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3 text-gray-900">
                                    Наши клиенты
                                </h1>
                                <div className="h-1 w-20 bg-gray-700 rounded" bis_skin_checked={1} />
                            </div>
                            </div>
                            <div className="flex flex-wrap -m-4" bis_skin_checked={1}>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Туризм
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Гостиничный бизнес
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Производство продуктов
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Ретейл, кафе и рестораны
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Сервис
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-base text-gray-900 font-medium title-font mb-4">
                                    Банки и Финансовые организации
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Промышленность
                                </h2>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={Toor}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Девелопмент
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