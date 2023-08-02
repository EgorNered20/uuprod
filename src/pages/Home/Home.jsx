import './Home.module.css'
import { Link } from 'react-router-dom'
import Videos from './../Videos/Videos'

import {videos} from './../../helpers/videoList'


const Home = () => {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
                <div>
                    <Link to="/">
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Все проекты
                        </button>
                    </Link>
                    <Link to='/field'>
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Сферы деятельности
                        </button>
                    </Link>
                    <Link to='/utilities'>
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Услуги
                        </button>    
                    </Link>
                    <Link to='/clients'>
                        <button
                            type="button"
                            class="border border-gray-700 bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Клиенты
                        </button>
                    </Link>
                </div>
                <div className="flex flex-wrap -m-4 mt-20" bis_skin_checked={1}>
                    {videos.map((video, index, youtubeid, year, client, name, schene, director, operator, montash, moushdesign, artists, location) => {
                        return <Videos 
                        key={index}
                        img={video.img} 
                        index={index} 
                        youtubeid={video.youtubeid} 
                        year={video.year}
                        client={video.client}
                        name={video.name}
                        schene={video.schene}
                        director={video.director}
                        operator={video.operator}
                        montash={video.montash}
                        moushdesign={video.moushndesign}
                        artists={video.artists}
                        location={video.location} />
                    })}

                    
                      
                
                </div>
                </div>
        </section>

    )
}

export default Home