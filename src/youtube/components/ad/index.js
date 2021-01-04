import React from 'react'
import  './styles.css'
import Ads from '../../assets/Ads'
import ContentItem from '../ContentItem'

const Ad = () => {
    return(
        <div className="Ad">
            {
                <ContentItem videoItem={Ads[0]}/>
            }
            
        </div>
    );
}
export default Ad;