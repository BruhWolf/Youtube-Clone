import React from 'react'
import Header from './components/header'
import Main from './components/main'
import {useState} from 'react'
import LateralMenu from './components/lateralMenu'
import './styles.css'

const Youtube = () => {
        
    const [toggleButtonState, setToggleButtonState] = useState(true)

    return(
        <div className="youtube">
                <div get="Header">
                        <Header         toggleButtonState={toggleButtonState} setToggleButtonState={state => setToggleButtonState( state )}/>
                </div>
                <div get="Main">
                        <Main           toggleButtonState={toggleButtonState} />
                </div>
                <div get="Menu">
                        <LateralMenu   toggleButtonState={toggleButtonState}/>
                </div>
        </div>
        );
}
export default Youtube;