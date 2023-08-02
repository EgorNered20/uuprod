import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Burgermenu.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NAvbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={style.header}>
      <div>
        <div className={style.box}>
          
          <ul
            className={
              nav ? [style.menu, style.active].join(' ') : [style.menu]
            }
          >
            <li>
              <Link to='/'><strong>Рекламные ролики</strong></Link>
            </li>
            <li>
              <Link to='/foodstyling'><strong>Рекламная фотосъемка</strong></Link>
            </li>
            <li>
              <Link to='/'><strong>Музыкальные видео</strong></Link>
            </li>
            <li>
              <Link to='/cinemas'><strong>Документальное кино</strong></Link>
            </li>
            <li>
              <Link to='/cinemas'><strong>Художественное кино</strong></Link>
            </li>
            <li>
              <Link to='/utilities'><strong>Все услуги</strong></Link>
            </li>
            <li>
              <Link to='/about'><strong>О нас</strong></Link>
            </li>
            <li>
              <Link to='/vacancies'><strong>Вакансии</strong></Link>
            </li>
            <li>
              <Link to='/contacts'><strong>Контакты</strong></Link>
            </li>
          </ul>
          <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NAvbar;