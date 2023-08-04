import { Link } from 'react-router-dom'

const Presentation = () => {
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
            <span className="relative">Комплекс услуг</span>
          </span>{' '}
          по созданию буклетов и презентаций
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
            Буклет — незаменимый помощник в офисе продаж. Такой инструмент понятно и доступно донесёт уникальные преимущества вашего проекта или продукта до покупателя. Чтобы создать буклет, специалисты «Андва» работают в несколько этапов.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Погружаемся в задачу, изучаем компанию и продукт</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              1
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Выявляем основные ценности компании. Изучаем уникальность и пользу проекта/продукта, мотивы и барьеры к покупке у вашей аудитории.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Разрабатываем структуру буклета</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              2
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Логично ведём читателя к выводу: ваше предложение — это лучший вариант.
          </p>
        </div>
      <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Предлагаем идеи оформления буклета</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              3
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Создать буклет, к которому хочется возвращаться? Такое возможно. Дизайн, иллюстрации, технологии и ёмкие тексты могут творить чудеса.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Создаем контент</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              4
            </p>
          </div>
          <p className="text-sm text-gray-900">
                Для качественного буклета можно и фотосессию провести, и 3D замоделить, зная что это окупится. Гигиенический минимум — уникальные тексты и фото со стока.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Дизайн и вёрстка</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              5
            </p>
          </div>
          <p className="text-sm text-gray-900">
          Сверстаем собранную информацию, распределяя её по страницам. Любим наглядно и красиво: максимум визуала и минимум текстов. Буклет проверяем на ошибки корректором.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Печать, контроль качества</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
              6
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Любим взять в руки и полистать пахнущие типографской краской первые экземпляры. Проверяем тираж и отправляем заказчику.
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