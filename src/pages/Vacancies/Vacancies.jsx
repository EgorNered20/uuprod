import './Vacancies.module.css'

const Vacancies = () => {
    return (
        <section>
            <div className="container mx-auto mt-32">
                <h1 className="text-2xl mb-20 animate__animated animate__fadeInLeft">Вакансии</h1>
                <form className='mb-10 animate__animated animate__fadeInLeft' action="https://formspree.io/f/xleygqdw" method="POST">
                    <label>Твоё имя</label>
                    <input type="text" name='Name' placeholder="Имя" className='mb-5' />
                    <label>Кем ты видишь себя в нашей команде?</label>
                    <label className='mt-5'>
                        <input type="checkbox" name="Менеджер по продажам" value="yes"/>Менеджер по продажам
                    </label>
                    <label>
                        <input type="checkbox" name="Моушн-дизайнер" value="yes"/>Моушн-дизайнер
                    </label>
                    <label>
                        <input type="checkbox" name="Маркетолог" value="yes"/>Маркетолог
                    </label>
                    <label>
                        <input type="checkbox" name="Видео монтажер" value="yes"/>Видео монтажер
                    </label>
                    <label>
                        <input type="checkbox" name="Актер рекламных роликов" value="yes"/>Актер рекламных роликов
                    </label>
                    <label>
                        <input type="checkbox" name="Сценарист" value="yes"/>Сценарист
                    </label>
                    <label>
                        <input type="checkbox" name="Видео оператор" value="yes"/>Видео оператор
                    </label>
                    <label>
                        <input type="checkbox" name="Копирайтер" value="yes"/>Копирайтер
                    </label>
                    <label>
                        <input type="checkbox" name="Smm менеджер" value="yes"/>Smm менеджер
                    </label>
                    <label>
                        <input type="checkbox" name="Графический дизайнер" value="yes"/>Графический дизайнер
                    </label>
                    <label>
                        <input type="checkbox" name="Иллюстратор" value="yes"/>Иллюстратор
                    </label>
                    <label className='mt-5'>Телефон</label>
                    <input type="tel" name='Phone' placeholder="+7 (999) 999-99-99" className='mb-5' />
                    <label>
                        <input type="checkbox" name="Согласие" value="yes"/>Я даю согласие на обработку данных для дальнейшей связи со мной
                    </label>
                    <button type='submit' className="flex mx-auto text-white bg-slate-950 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">
                        Отправить
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Vacancies