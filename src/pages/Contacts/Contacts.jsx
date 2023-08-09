const Contacts = () => {
    return (
        <>
           <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-fortxt animate__animated animate__fadeInDown">
                Контакты
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base animate__animated animate__fadeInDown">
                Отправьте нам заявку
            </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="animate__animated animate__fadeInLeft" action="https://formspree.io/f/xleygqdw" method="POST">
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Ваше имя
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-forline focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Ваш Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-forline focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-600"
                            >
                                Ваше сообщение
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-100 bg-opacity-80 rounded border border-gray-300 focus:border-forline focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <div className="p-2 w-full">
                        <button
                            type="submit"
                            className="flex mx-auto text-white bg-slate-950 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg"
                        >
                            Отправить
                        </button>
                    </div>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-forline text-center">
                        <a href="mailto:" className="text-slate-950">test@test.com</a>
                        <p className="leading-normal my-5 text-slate-950">
                            11K USACHEVA STREET
                            <br />
                            Moscow
                        </p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section> 

        </>

    )
}

export default Contacts