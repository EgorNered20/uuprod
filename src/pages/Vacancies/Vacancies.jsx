import './Vacancies.module.css'

const Vacancies = () => {
    return (
        <section>
            <div className="container mx-auto mt-32">
                <h1 className="text-2xl mb-20">Вакансии</h1>
                <form className='mb-10'>
                    <label>Твоё имя</label>
                    <input type="text" placeholder="Имя" className='mb-5' />
                    <label>Кем ты видишь себя в нашей команде?</label>
                    <label className='mt-5'>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label>
                        <input type="checkbox" name="Test" value="yes"/>Test
                    </label>
                    <label className='mt-5'>Телефон</label>
                    <input type="tel" placeholder="+7 (999) 999-99-99" className='mb-5' />
                    <a href="">
                        <button className='bg-slate-950 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none'>
                            Отправить
                        </button>
                    </a>
                </form>
            </div>
        </section>
    )
}

export default Vacancies