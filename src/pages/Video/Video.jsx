import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {videos} from './../../helpers/videoList'
import { Link } from 'react-router-dom'
import './Video.module.css'
 
const Video = ({youtubeid, year}) => {
    const {id} = useParams()
    const video = videos[id]

    const [youtubeID] = useState(video.youtubeid)

    return (
        <>
            <main className='bg-black'>
                <div className='bg-black flex justify-center'>
                <iframe className='youtube-video'
                    title='Youtube player'
                    width='960'
                    height='540'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeID}?autoplay=1`}>
                </iframe>
                </div>
                <section className='bg-black mt-10'>
                        <div className='block justify-center text-center text-white'>
                            <h1 className='text-3xl'>Год: {video.year}</h1>
                            <h1 className='text-3xl mt-5'>Клиент: {video.client}</h1>
                            <h1 className='text-3xl mt-5'>Название: {video.name}</h1>
                            <h1 className='text-3xl mt-5'>Сценарий: {video.schene}</h1>
                            <h1 className='text-3xl mt-5'>Режиссер: {video.director}</h1>
                            <h1 className='text-3xl mt-5'>Оператор: {video.operator}</h1>
                            <h1 className='text-3xl mt-5'>Монтажер: {video.montash}</h1>
                            <h1 className='text-3xl mt-5'>Моушн Дизайнер: {video.moushndesign}</h1>
                            <h1 className='text-3xl mt-5'>Артисты: {video.artists}</h1>
                            <h1 className='text-3xl mt-5'>Локации: {video.location}</h1>
                            <Link to='/contacts'>
                            <button
                            className="mt-16 mb-20 bg-white inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Заказать проект
                        </button>
                            </Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Video