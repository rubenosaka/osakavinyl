import React from 'react';
import { useSelector } from 'react-redux';
import { Paper } from '@material-ui/core';

import Vinyl from './Vinyl/Vinyl'

const List = ({setCurrentId}) =>{
    const vinylList = useSelector((state)=>state.vinyl);

    const user = JSON.parse(localStorage.getItem('profile'));

    return (
        <section className="ov-sub-section">

            <div className="ov-box">

                {
                    !vinylList.length ? <span>Sorry but there are no results</span> : vinylList.length > 0 ? (
                                    
                        <div className="row">
                            {
                                vinylList.map((vinyl)=>(

                                    <div key={vinyl._id} className={!user ? "col-sm-3" : "col-sm-4"}>
                                        <Vinyl vinyl={vinyl} setCurrentId={setCurrentId}>

                                        </Vinyl>
                                    </div>
                                ))
                            }
                        </div>

                    ) : (
                        <Paper>
                            There are no results
                        </Paper>
                    )
                }

            </div>            
            
        </section>
    );
}

export default List;