import './Vacancies.module.css'

const Vacancies = () => {
    return (
        <section>
            <div className="container mx-auto mt-32">
                <h1 className="text-2xl mb-20">Вакансии</h1>
                <form className='mb-10' action="https://formspree.io/f/xleygqdw" method="POST">
                    <label>Твоё имя</label>
                    <input type="text" name='Name' placeholder="Имя" className='mb-5' />
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
                    <input type="tel" name='Phone' placeholder="+7 (999) 999-99-99" className='mb-5' />
                    <button type='submit' className="flex mx-auto text-white bg-slate-950 border-0 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">
                        Отправить
                    </button>
                </form>
                {/* <a href="mailto:test@gmail.com?subject=Вакансия&amp;body=Кем ты видишь себя в нашей команде:"> */}
                        
                {/* </a> */}
            </div>
        </section>
    )
}

export default Vacancies