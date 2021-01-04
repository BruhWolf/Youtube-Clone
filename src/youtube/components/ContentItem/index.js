import React from 'react'
import {YtCicleMenu} from '../../assets/svgs'
import './styles.css'

const ContentItem = ({videoItem}) => {
    return(
        <div className="ContentItem"  isad={`${videoItem.isAd}`} >
            <div className="Video" >
                <iframe title={videoItem.title} height="100%" width="100%" src={`https://www.youtube.com/embed/${videoItem.videoID}?controls=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>


            <div className="Description" >
                <img id="banner"   isad={`${videoItem.isAd}`} src="https://yt3.ggpht.com/zO0hMpMRo2hnCaknFzMnYJ5kzlZ4JDTtamKIQVZjuHs7AVX_Yx8Sk1ORfsJhHDALRE6XfbtN0q8=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" 
                        alt="Ad Banner"/>
                <span id="AdDescription">
                        

                <div id="ThumbNail" >
                    <img src={videoItem.avatarUrl} alt="Channel Avatar"/>
                </div>

                <div className="InfoBox">
                    <h3>{videoItem.title}</h3>
                    <span id="description"  isad={`${videoItem.isAd}`}>{videoItem.descriptionSentence}</span>
                    <div className="AnuncioLogo-Brand-Container">
                        <div id="AdClipArt"  isad={`${videoItem.isAd}`}>
                            ANÚNCIO
                        </div>
                        <div normaldescription={!videoItem.isAd?`${true}`:`${false}`}>
                            <span className="ChannelNAme">
                                {videoItem.chanelName}
                            </span>
                            <span display={videoItem.isAd?`${false}`: `${true}`} className="Dot">•</span>
                            <span>
                                {videoItem.views}
                            </span>
                            <span display={videoItem.isAd?`${false}`:`${true}`} className="Dot">•</span>
                            <span>
                                {videoItem.howlong}
                            </span>
                        </div>
                    </div>
                    <a href={videoItem.aUrl}>
                        {videoItem.aText}
                    </a>
                </div>

                <div className="Options">
                        <YtCicleMenu/>
                </div>    
                </span>
            </div>
        </div>
    );
}
export default ContentItem;