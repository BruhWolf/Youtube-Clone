import React from 'react'
import LateralMenu from '../lateralMenu'
import VideoList from '../content'
import './styles.css'
const Main = (props) => {
    return(
        <div className="Main">
            <div className="LateralMenu" get={`${props.toggleButtonState}`} hideonmedia="true">
                <LateralMenu toggleButtonState={props.toggleButtonState} />
            </div>
            <div get="VideoList">
                <VideoList/>
                <VideoList/>
            </div>
        </div>
    );
}
export default Main;