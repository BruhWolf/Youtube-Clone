import React from 'react'
import ContentItem from '../ContentItem'
import videosArray from '../../assets/videos'
import Ad from '../ad'
import './styles.css'
const Content = () => {

    return(<div id="Content">
                <div className="Ad">
                    <Ad/>
                </div>
                <div className="videoArray">

                    {
                        videosArray.map( (videoItem,index) => ( <ContentItem key={index} isad="false" videoItem={videoItem}/> ))
                    }
                </div>
        </div>
    );
}
export default Content;