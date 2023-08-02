import { videos } from '../../helpers/videoList';

const VideoPlayer = ({movie}) => {
    return (
      <div>
        <video controls>
          <source src={movie} type="video/mp4" />
          Ваш браузер не поддерживает воспроизведение видео.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;