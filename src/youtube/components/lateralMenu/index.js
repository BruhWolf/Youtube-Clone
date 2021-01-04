import './styles.css'
import React, { useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import fabioImg from '../../assets/img/fabioAkita.jpg'
import felipeImg from '../../assets/img/felipeDeschamps.jpg'
import programadorImg from '../../assets/img/programadorABordo.jpg'
import {    YtHome,     YtFireTrending, YtSubscriptions,    YtLibrary,      YtFireTrendingMedia,    YtHistory,   YtLibraryMedia,
            YtMyVideos, YtWhatchLater,  YtLikedVideos,      YtListOthers,   YtSubscriptionsMedia,   YtArrowDown,    YtArrowUp, 
            YtPremium,  YtFilms, YtGames, YtLive, YtLearn ,YtConfig ,YtReportLogs, YtHelp, YtFeedback, YtFindMore} from '../../assets/svgs'



    const LateralMenu = ({toggleButtonState}) => {
    
    const [state, setState] = useState(toggleButtonState)
    useEffect(()=>{
        setState(toggleButtonState)
    },[toggleButtonState])
    
    const itemsList_1 = [

        { id: "início",     name: "Início",                 icon: <YtHome/>,                                             to: "/home ",         isActive:true},
        { id: "emAlta",     name: "Em alta",                icon: !state? <YtFireTrendingMedia/> : <YtFireTrending/>,    to: "/trending"      },
        { id: "inscricoes", name: "Inscrições",             icon: !state? <YtSubscriptionsMedia/>: <YtSubscriptions/>,   to: "/subscriptions" },
        { id: "biblioteca", name: "Biblioteca",             icon: !state? <YtLibraryMedia/>      : <YtLibrary/>,         to: "/library"                    },
    ]
    const itemsList_2 = [
        
        { id: "biblioteca", name: "Biblioteca",             icon: !state? <YtLibraryMedia/>      : <YtLibrary/>,         to: "/library"                    },
        { id: "historico",   name: "Histórico",             icon: <YtHistory/>,       to: "/history"                    },
        { id: "myVideos",    name: "Seus vídeos",           icon: <YtMyVideos/>,      to: "/user/videos/private"        },
        { id: "whatchLater", name: "Assistir mais tarde",   icon: <YtWhatchLater/>,   to: "/user/videos/later"          },
        { id: "likedVideos", name: 'Vídeos marcados co...', icon: <YtLikedVideos/>,   to: "/user/videos/liked"          },
        { id: "customList",  name: "Lista 1",               icon: <YtListOthers/>,    to: "/user/videos/list/1"         },
        { id: "customList",  name: "Lista 2",               icon: <YtListOthers/>,    to: "/user/videos/list/2"         },
        { id: "customList",  name: "Lista 3",               icon: <YtListOthers/>,    to: "/user/videos/list/3"         },
        { id: "customList",  name: "Lista 4",               icon: <YtListOthers/>,    to: "/user/videos/list/4"         },
        { id: "openList",    name: "space",                 icon: <YtListOthers/>,    to: "/user/videos/list/6"         },
    ]
    const itemsList_3 = [

        { id: "premium",    name: "YouTube Premium",        icon: <YtPremium/>,       to: "/more/premium"  },
        { id: "films",      name: "Filmes",                 icon: <YtFilms/>,         to: "/more/films"    },
        { id: "games",      name: "Jogos",                  icon: <YtGames/>,         to: "/more/games"    },
        { id: "live",       name: "Ao vivo",                icon: <YtLive/>,          to: "/more/live"     },
        { id: "learn",      name: "Aprender",               icon: <YtLearn/>,         to: "/more/learn"    },
    ]
    const itemsList_4 = [
        { id: "config",     name: "Configurações",          icon: <YtConfig/>,        to: "/config"        },
        { id: "reportLogs", name: "Histórico de denúncias", icon: <YtReportLogs/>,    to: "/reports"       },
        { id: "help",       name: "Ajuda",                  icon: <YtHelp/>,          to: "/help"          },
        { id: "feedback",   name: "Enviar feedback",        icon: <YtFeedback/>,      to: "/feedback"      },
    ]
    const inscriptionsList = [
        { id: "fabio",      name: "Fabio Akita",            imgSrc: fabioImg,          to: "/channel/UCib793mnUOhWymCh2VJKplQ"      },
        { id: "felipe",     name: "Felipe Dechamps",        imgSrc: felipeImg,         to: "/channel/UCU5JicSrEM5A63jkJ2QvGYw"      },
        { id: "abordo",     name: "Programador a bor...",   imgSrc: programadorImg,    to: "/channel/UC5fWvbBnaFAi2hJlHRmg5kw"      },
        { id: "findmore",   name: "Procurar canais",        icon: <YtFindMore/>,       to: "/channel/UC5fWvbBnaFAi2hJlHRmg5kw"      },
        
    
    ]





    const Ul = (props) => {



        const UlNotHidedingContent = (props) => {
           return(
               <ul {...props} >
                   {props.ulTitle?<li key = "ulTitle" className="ulTitle">
                        <span>
                            {props.ulTitle}
                        </span>
                        </li>: ""
                    }
                        
                    { props.children }
               </ul>
               )
        }




        const UlHidedingContent = (props) => {

                const show = parseInt(props.show)+1
                const initialState = `${show*40+24}px`

                const [open, setOpen] = useState(false)
                const [ulHeightValue, setUlHeightValue] = useState(initialState)
             
                useEffect(()=>{
                    open?setUlHeightValue('fit-content'):setUlHeightValue(initialState)
                },[open,initialState])

                useEffect(()=>{
                    setUlHeightValue(ulHeightValue)
                },[ulHeightValue])

                var styles={
                        position:"relative",
                        overflow:"hidden",
                        height: ulHeightValue,
                }
                const mostrarMais = 
                        {id: "mostrarMais",  name: "Mostrar mais",          icon: <YtArrowDown/>}
                const mostrarMenos = 
                        {id: "mostrarMenos",  name: "Mostrar menos",         icon: <YtArrowUp />}    

                return(
                    <ul {...props} style={styles }>
                        {props.ulTitle?<li key="ulTitle" className="ulTitle">{props.ulTitle}</li>: ""}
                        { props.children }
                        <LateralMenuItem style={{ position: "absolute", left:"0", bottom:"0", backgroundColor:"#fff",paddingBottom: "12px", cursor:"pointer", width:"100%", zIndex:"10"}} menuitem={mostrarMais}  onClick={ ()=> setOpen(true) }/>
                        <LateralMenuItem style={{display: !open?"none":"flex", position:"absolute",left:"0", bottom:"0", backgroundColor:"#fff",paddingBottom: "12px", cursor:"pointer"}} menuitem={mostrarMenos} onClick={()=> setOpen(false) }/>
                    </ul>
                    )
        }



        return(   props.show? <UlHidedingContent {...props}/>:<UlNotHidedingContent {...props}/>    );
    }

    const LateralMenuItem = (props) => {
        const   menuitem = props.menuitem
        const   nonNavLinkli =
                            <div > 
                                {menuitem.icon} 
                                <span>
                                    {menuitem.name}
                                </span> 
                            </div>
                        
        const   navLinkedli = 
                    <NavLink to={menuitem.to}  activeClassName="Active">
                            <div >
                                {menuitem.icon}
                                <span>
                                    {menuitem.name}
                                </span>
                            </div>
                        </NavLink>
       const    liWithAvatar = 
       <                NavLink to=""  activeClassName="Active">
                            <div >
                                <img src={menuitem.imgSrc} alt="Channel Avatar"/>
                                <span>
                                    {menuitem.name}
                                </span>
                             </div>
                        </NavLink>               
                    
                    return(
                        <li key={menuitem.id} {...props}>
                            { menuitem.to? menuitem.imgSrc? liWithAvatar: navLinkedli : nonNavLinkli }
                        </li>
                    );
        }


    function displayList(listArray) {
        return(
            listArray.map( ( item , index ) => <LateralMenuItem key={index} menuitem={item}/>)
        )
    }

    return(

        <nav className="MenuNavigation" state={`${state}`}>
            <Ul className="LateralMenuMedia" state={`${state}`} hidelastchild={state?"true":"false"}>
                    { displayList(itemsList_1) }
            </Ul>  
            <Ul className="LateralMenuMedia" state={`${state}`} hideonmedia="true" display={`${state}`} show="5" >
                    {displayList(itemsList_2)}
            </Ul>
            <Ul className="LateralMenuMedia" state={`${state}`} hideonmedia="true" display={`${state}`} ultitle="INSCRIÇÕES" >
                    {displayList(inscriptionsList)}
            </Ul>
            <Ul className="LateralMenuMedia" state={`${state}`} hideonmedia="true" display={`${state}`} ultitle="MAIS DO YOUTUBE">
                    {displayList(itemsList_3)}
            </Ul>
            <Ul className="LateralMenuMedia" state={`${state}`} hideonmedia="true" display={`${state}`} id="lastUl">
                    {displayList(itemsList_4)}
            </Ul>


        <div className="UlFooter" state={`${state}`}>
        <a href="www.wolfplace.solutions">Sobre</a> <a href="www.wolfplace.solutions">Imprensa</a> <br/>
        <a href="www.wolfplace.solutions">Direitos autorais</a><br/>
        <a href="www.wolfplace.solutions">Entre em contato</a><br/>
        <a href="www.wolfplace.solutions">Criadores de conteúdo</a><br/>
        <a href="www.wolfplace.solutions">Publicidade</a> 
        <a href="www.wolfplace.solutions">Desenvolvedores</a>

        </div>
        <div className="UlFooter1" state={`${state}`}>
        <a href="www.wolfplace.solutions"> Termos </a> <a href="www.wolfplace.solutions"> Privacidade</a> <br/>
        <a href="www.wolfplace.solutions">Política e segurança</a> <br/>
        <a href="www.wolfplace.solutions">Como funciona o YouTube</a> <br/>
        <a href="www.wolfplace.solutions">Testar os novos recursos</a> <br/>
        </div>
        <div id="googleLLC" className="UlFooter" state={`${state}`}>
            <span>
                © 2020 Google LLC
            </span>
        </div>
        </nav>  

    );
}
export default LateralMenu;