const Contacts = () => {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen bg-white">
                {/* COMPONENT CODE */}
                <div className="container mx-auto my-4 px-4 lg:px-20">
                <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                    <div className="flex">
                    <h1 className="font-bold uppercase text-5xl">
                        Отправьте нам <br /> заявку
                    </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Ваше имя*"
                    />
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Фамилия*"
                    />
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email"
                        placeholder="Email*"
                    />
                    <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="Телефон*"
                    />
                    </div>
                    <div className="my-4">
                    <textarea
                        placeholder="Опишите ваш проект*"
                        className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        defaultValue={""}
                    />
                    </div>
                    <div className="my-2 w-1/2 lg:w-1/4">
                    <button
                        className="uppercase text-sm font-bold tracking-wide bg-gray-700 text-gray-100 p-3 rounded-lg w-full 
                            focus:outline-none focus:shadow-outline"
                    >
                        Отправить
                    </button>
                    </div>
                </div>
                <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-gray-700 rounded-2xl">
                    <div className="flex flex-col text-white">
                    <h1 className="font-bold uppercase text-4xl my-4">
                        Контакты
                    </h1>
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <div className="flex flex-col">
                        <i className="fas fa-map-marker-alt pt-2 pr-2"></i>
                        </div>
                        <i className="fas fa-map-marker-alt pt-2 pr-2">
                        <div className="flex flex-col">
                            <h2 className="text-2xl">Наш адрес</h2>
                            <p className="text-gray-400">
                            11К STREET, MOSCOW
                            </p>
                        </div>
                        </i>
                    </div>
                    <i className="fas fa-map-marker-alt pt-2 pr-2">
                        <div className="flex my-4 w-2/3 lg:w-1/2">
                        <div className="flex flex-col">
                            <i className="fas fa-phone-alt pt-2 pr-2"></i>
                        </div>
                        <i className="fas fa-phone-alt pt-2 pr-2">
                            <div className="flex flex-col">
                            <h2 className="text-2xl">Наш телефон</h2>
                            <p className="text-gray-400">Телефон: +79999999</p>
                            </div>
                        </i>
                        </div>
                        <i className="fas fa-phone-alt pt-2 pr-2">
                        <div className="flex my-4 w-2/3 lg:w-1/2">
                        </div>
                        <i className="fab fa-facebook-f text-blue-900">
                            <i className="fab fa-linkedin-in text-blue-900"></i>
                        </i>
                        </i>
                    </i>
                    </div>
                    <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <i className="fas fa-phone-alt pt-2 pr-2">
                        <i className="fab fa-facebook-f text-blue-900">
                        <i className="fab fa-linkedin-in text-blue-900"></i>
                        </i>
                    </i>
                    </i>
                </div>
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                    <i className="fas fa-phone-alt pt-2 pr-2">
                    <i className="fab fa-facebook-f text-blue-900">
                        <i className="fab fa-linkedin-in text-blue-900"></i>
                    </i>
                    </i>
                </i>
                </div>
                <i className="fas fa-map-marker-alt pt-2 pr-2">
                <i className="fas fa-phone-alt pt-2 pr-2">
                    <i className="fab fa-facebook-f text-blue-900">
                    <i className="fab fa-linkedin-in text-blue-900">
                        {/* COMPONENT CODE */}
                    </i>
                    </i>
                </i>
                </i>
            </div>
            <i className="fas fa-map-marker-alt pt-2 pr-2">
                <i className="fas fa-phone-alt pt-2 pr-2">
                <i className="fab fa-facebook-f text-blue-900">
                </i>
                </i>
            </i>
            </>

    )
}

export default Contacts