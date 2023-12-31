import { Link } from 'react-router-dom'

const Presentbiz = () => {
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
          <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <rect
                fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Создаем</span>
          </span>{' '}
          презентации для бизнеса
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
            Мы делали презентации для Яндекс, Škoda, Coca-cola. Совместный опыт работы более 18 лет. Сделаем презентацию любого уровня сложности.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Бриф</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              1
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Заполняете бриф, мы изучаем ваши материалы.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Договор</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              2
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Заключаем договор, вы вносите предоплату 50%.
          </p>
        </div>
      <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Структура</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              3
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Оформляем несколько слайдов и пишем структуру презентации.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Дизайн</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              4
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Утверждаем стиль, вносим правки. Оформляем оставшиеся слайды.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Передача</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              5
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Вносите оставшиеся 50% оплаты и получаете презентацию в нужном формате.
          </p>
        </div>       
      <div className="text-center">
        <Link
          to="/contacts"
          className="bg-slate-950 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Заказать проект
        </Link>
        </div>
    </div>
    </div>
        </>
        
    )
}

export default Presentbiz