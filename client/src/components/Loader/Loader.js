import React from 'react'
import LoadingImg from '../../assets/img/loader_blocks.svg';
import DefaultImg from '../../assets/img/glitch2.gif';
import {ITEM_SIZE, PAGINATION, QUOTES} from '../../constants/globalVars';
import { Button, Grow } from '@material-ui/core';
import './loader.scss';
const Loader = () => {

    const quote = QUOTES[Math.floor(Math.random() * QUOTES.length)]

    return (

        <div className="ov-loader">
            <div className="row">
                {
                    [...Array(PAGINATION)].map((e, i) => {
                       
                        return(
                            <div key={i} className={ITEM_SIZE}>
                                <Grow in>
                                    <div className="ov-card ov-card--vinyl ov-box">

                                        <div className="ov-card__image ov-card--vinyl__image">
                                            <img src={DefaultImg} alt="Loading Box Images" />
                                        </div> 
                                        
                                        
                                        <div className="ov-card__actions">

                                            <ul>

                                                <li><Button size="small"><i className="fa-solid fa-eye"></i></Button></li>
                                                <li><Button size="small"><i className="fas fa-heart"></i>0</Button></li>
                                                <li><Button size="small"><i className="fa-solid fa-ellipsis"></i></Button></li>                        
                                                <li><Button size="small"><i className="fas fa-trash-can"></i></Button></li>                                                         
                                       

                                            </ul>
                                        
                                            
                                        </div>

                                    </div>
                                </Grow>
                            </div>
                        )
                    })
                }

            </div>
            
            <div className="ov-box ov-loader__overlay p-5 text-center">
                <h2>_LOADING...</h2>
                <div className="quote">
                    <h3>{quote.quote}</h3>
                    <h5>{quote.author}</h5>
                </div>
                <img src={LoadingImg} />
            </div>   
        </div>



    )
}

export default Loader;
