import derbi from './../../img/derbi.jpg'
import zemlya from './../../img/zemlya.jpg'

const Cinemas = () => {
    return (
        <section>
            <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 class="mt-20 sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Кинопроекты</h1>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Мы считаем, что документальное кино должно быть зрительским: зрелищным, глубоким, захватывающим аудиторию. Наша команда придерживается самых высоких художественных и технических стандартов качества, чтобы создавать проекты мирового уровня.</p>
            </div>
            <div className="container mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={derbi} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Уральское дерби
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        История мечты, воли и упорной борьбы, рассказанная через судьбы тринадцатилетних хоккеистов главных школ Челябинской области: «Металлург» и «Трактор».
                    </p>
                    <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-950 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Посмотреть фильм
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>
                </div>
                </div>
                <div className="container mx-auto mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={zemlya} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Земля больших возможнотей
                    </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Фермер-оптимист из США, воодушевленный своей американской мечтой, и его русские товарищи с криминальным прошлым решают начать жизнь с чистого листа, но на пути к своей цели сталкиваются с суровой действительностью.
                    </p>
                    <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-950 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Посмотреть сериал
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>
                </div>
                </div>


    
        </section>
    )
}

export default Cinemas