import {YtSearch, YtArrowLeft} from '../../assets/svgs'
import React ,{useEffect, useState} from 'react'
import './styles.css'
const SearchBar = (props) => {

    function closeSearchMenu () {      
     props.getState(false)
    }
    const searchItems = [
        'the san francisco music box company',
        "bella's lullaby",            
        'galinha pintadinha',                   
        'crepusculo song name rivers',            
       ' crepusculo song name',            
        'music box 30tons belas lullaby'        
    ]
    const [searchState,setSearchState] = useState(searchItems)

    function removeSearch(indexToRemove) {
        var newlist = []

        searchState.map((item,index) => {
            if(indexToRemove !== index)
            newlist.push(item)
            return item
        })
        console.log(newlist)
        setSearchState(newlist)
        
    }

    return(<>

    <div className="ModelSearch" display={`${props.open}`}>
        <div className="Search">
            <button  id="arrowLeft" onClick={ () => closeSearchMenu() }>
                <YtArrowLeft/>
            </button>
        <div className="SearchBoxContainer">

            <div className="SearchBox">
                <input type="text" placeholder="Pesquisar"/>
                        <span className="keyboardLogo">
                            <img src="https://www.gstatic.com/inputtools/images/tia.png" alt="keyboard"/>
                        </span>
                </div>            
                <button id="SearchButton">
                    <YtSearch/>
                </button>
            </div>
        </div>
            <ul className="Search">
                <li></li>
                {
                searchState.map( (item, index)=> (
                <li key={index} display={`${searchState}`}>{item}
                    <button onClick={()=>removeSearch(index)}>Remover</button></li>
                ))
                }
            </ul>
    </div>
    </>
    );
}
export default SearchBar;
  