import { Link } from 'react-router-dom'

const Presentation = () => {
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 animate__animated animate__fadeInDown">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-fortxt sm:text-4xl md:mx-auto">
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
            <span className="relative">Креативные</span>
          </span>{' '}
          корпоративные подарки
        </h2>
        <p className="text-base text-fortxt md:text-lg">
        Исследуем, креативим, проверяем, предлагаем.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="p-5 duration-300 transform bg-fortxt rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 text-white">Заполнение брифа</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              1
            </p>
          </div>
          <p className="text-sm text-white">
          Заполняем подробный бриф на основании беседы с заказчиком. Обсуждаем представления заказчика, требования к подаркам, характер бренда, целевую аудиторию.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-fortxt rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 text-white">Идея и эскизы подарков</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              2
            </p>
          </div>
          <p className="text-sm text-white">
          Находим 3 креативные концепции, в рамках которых будут изготовлены подарки. В основе каждой концепции — идея, которую находит команда агентства на основании брифа. Заказчик выбирает одну концепцию, в которую может входит один подарок или целый набор. Можем также разработать идею для креативного календаря на следующий год, если речь идёт о подарке на Новый год. Создаём эскизы будущих подарков, если это требуется для воплощения проекта.
          </p>
        </div>
      <div className="p-5 duration-300 transform bg-fortxt rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 text-white">Дизайн подарков</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              3
            </p>
          </div>
          <p className="text-sm text-white">
          Прорабатываем выбранную идею и делаем дизайн этикеток и упаковок всех носителей. Пишем сопроводительные тексты. Готовим в производство.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-fortxt rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5 text-white">Производство</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              4
            </p>
          </div>
          <p className="text-sm text-white">
          Подбираем подрядчиков. У нас более 100 производителей в базе и всегда нужен кто-то эдакий, который пополнит нашу коллекцию. Делаем тестовые образцы, если позволяет время и технологии производства. Соглаосвываем с заказчиком. Собираем комплекты, наклеиваем этикетки, вяжем банты. Отправляем заказчику транспортной компанией, доставляем в офис.
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

export default Presentation