import ContentItem from '../ContentItem'
import videosArray from '../../assets/videos'
import './styles.css'
const VideoList = () => {

    return(
            <div className="Content">
                {
                    videosArray.map( videoItem => ( <ContentItem videoItem={videoItem}/> ))
                }
            </div>
    );
}
export default VideoList;