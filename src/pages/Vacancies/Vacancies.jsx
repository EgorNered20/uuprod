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
                    <a href="mailto:frontdevegor@gmail.com?subject=Вакансия&amp;body=Кем ты видишь себя в нашей команде:">
                        <button className="flex mx-auto text-white bg-slate-950 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">
                            Отправить
                        </button>
                    </a>
                </form>
            </div>
        </section>
    )
}

export default Vacancies