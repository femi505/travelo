import './Background.css'
import video1 from '../../Assets/video1.mp4'
import video2 from '../../Assets/video2.mp4'


const Background = ({ playStatus, heroCount }) => {
    if (playStatus) {
      return (
        <video className='background fade-in' autoPlay loop muted>
          <source src={video1} type='video/mp4' />
        </video>
      );
    } else if (heroCount===0) {
        return (
            <video className='background fade-in' autoPlay loop muted>
              <source src={video2} type='video/mp4' />
            </video>
          );
    }
 else if (heroCount===1) {
    return (
        <video className='background fade-in' autoPlay loop muted>
          <source src={video2} type='video/mp4' />
        </video>
      );
}

else if (heroCount===2) {
    return (
        <video className='background fade-in' autoPlay loop muted>
          <source src={video2} type='video/mp4' />
        </video>
      );

  };

}
export default Background;