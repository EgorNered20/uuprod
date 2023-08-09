import './Home.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Videos from './../Videos/Videos'
import 'animate.css'

import {videos} from './../../helpers/videoList'



const Home = () => {
    const [projectsToShow, setProjectsToShow] = useState(6);
    const [allProjects] = useState(videos);
    const [displayedProjects, setDisplayedProjects] = useState(
        allProjects.slice(0, projectsToShow)
    );

    const loadMoreProjects = () => {
        const newProjectsToShow = projectsToShow + 12;
        const newDisplayedProjects = allProjects.slice(0, newProjectsToShow);
        setProjectsToShow(newProjectsToShow);
        setDisplayedProjects(newDisplayedProjects);
    };
    

    


    return (
        
       <>
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
                <div>
                    <Link to="/">
                        <button
                            type="button"
                            class="animate__animated animate__fadeInDown bg-slate-950 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                        >
                            Все проекты
                        </button>
                    </Link>
                    <Link to='/field'>
                        <button
                            type="button"
                            class="animate__animated animate__fadeInDown bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Сферы деятельности
                        </button>
                    </Link>
                    <Link to='/utilities'>
                        <button
                            type="button"
                            class="animate__animated animate__fadeInDown bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Услуги
                        </button>    
                    </Link>
                    <Link to='/clients'>
                        <button
                            type="button"
                            class="animate__animated animate__fadeInDown bg-gray-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-slate-950 focus:outline-none focus:shadow-outline"
                        >
                            Клиенты
                        </button>
                    </Link>
                </div>
                <div className="flex flex-wrap -m-4 mt-20" bis_skin_checked={1}>
                    {displayedProjects.map((video, index) => {
                        return (
                            <Videos
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
                            moushdesign={video.moushdesign}
                            artists={video.artists}
                            location={video.location}
                            />
                        );
                        })}
                        
                        <div className="flex justify-center">
                            {allProjects.length > displayedProjects.length && (
                                <button className='bg-slate-950 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none' onClick={loadMoreProjects}>
                                    Загрузить больше
                                </button>
                            )}
                        </div>

                        
                        

                    
                      
                
                </div>
                </div>
        </section>
       </>
       

    )
}

export default Home