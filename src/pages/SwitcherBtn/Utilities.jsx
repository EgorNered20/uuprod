import { Link } from 'react-router-dom'
import buklet from './../../img/buklet.jpg'
import rekl from './../../img/komp.jpg'
import gifts from './../../img/gifts.jpg'
import prom from './../../img/creatprom.jpg'
import visual from './../../img/3dviz.jpg'
import prezbiz from './../../img/prezbiz.jpg'

const Utilities = () => {
    return (
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
                            class="bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
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
                                    Услуги
                                </h1>
                                <div className="h-1 w-20 bg-gray-700 rounded" bis_skin_checked={1} />
                            </div>
                            </div>
                            <div className="flex flex-wrap -m-4" bis_skin_checked={1}>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <Link to='/foodstyling'>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src="food5.jpg"
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Фудстайлинг и рекламная фотосъемка
                                </h2>
                                </Link>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <Link to='/presentation'>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={buklet}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Создание буклетов и презентаций
                                </h2>
                                </Link>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <Link to='/reklcompania'>
                                    <img
                                        className="h-40 rounded w-full object-cover object-center mb-6"
                                        src={rekl}
                                        alt="content"
                                    />
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                        Комплексная рекламная кампания
                                    </h2>
                                </Link>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <Link to='/gifts'>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={gifts}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Креативные подарки
                                </h2>
                                </Link>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <Link to='/promotional'>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={prom}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Услуги по созданию креативной рекламы
                                </h2>
                                </Link>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <Link to='/3d'>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={visual}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    3D-визуализация
                                </h2>
                                </Link>
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4" bis_skin_checked={1}>
                                <div className="bg-gray-100 p-6 rounded-lg" bis_skin_checked={1}>
                                <Link to='/presentationbiz'>
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={prezbiz}
                                    alt="content"
                                />
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    Презентация для бизнеса
                                </h2>
                                </Link>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>

    )
}

export default Utilities