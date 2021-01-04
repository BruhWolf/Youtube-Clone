import {YtMediaLogo, YtSearch,YtMenuHamburger, YtCreate, YtNotifications, YtApps} from '../../assets/svgs'
import SearchBar from '../searchBar'
import React, { useState } from 'react'
import './styles.css'
const Header = (props) =>{

  
    const [searchState, setSearchState ] = useState(false)

    function openSearchModel(){
        setSearchState(true)
    }
    const  getState = state => setSearchState(state)

        return(
            <header>    
                <div className="Logo">
                <span className="ToggleButton" onClick={()=>props.setToggleButtonState(!props.toggleButtonState)}>
                    <YtMenuHamburger />
                </span>
                    <YtMediaLogo id="logo"/>
                    <h3>BR</h3>
                </div>

                <div className="SearchBar">
                    <SearchBar  open={searchState} getState={getState}/>
                </div>



                <div className="Header-Menu">
                    <span get="search" onClick={ () => openSearchModel() }>
                        <YtSearch/>

                    </span>
                    <div className="Header-Menu">
                        <span className="HeaderMenu-Item">
                            <YtCreate/>
                        </span>
                        <span className="HeaderMenu-Item">
                            <YtApps/>
                        </span>
                        <span className="HeaderMenu-Item">
                            <YtNotifications/>
                        </span>
                        <span get="HeaderAvatar">
                            <img src="https://yt3.ggpht.com/yti/ANoDKi4b-hZxhDudrhOzzI4dv8eNoF3oO237hKtS6QZMqA=s88-c-k-c0x00ffffff-no-rj-mo" alt="Avatar"/>
                        </span>
                    </div>


                </div>
                
            </header>
    );
}
export default Header;