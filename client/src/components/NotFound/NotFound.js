import React from 'react'
import './NotFound.scss';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import GlitchText from 'react-glitch-effect/core/GlitchText';

const NotFound = () => {
    return (
        <section className="ov-section">
            <div className="ov-not-found">
                <GlitchClip duration={20000}>
                    <div className="ov-box">
                    <GlitchText component='h1' className="ov-not-found__title">
                        404
                    </GlitchText>
                    <GlitchText component='h2' className="ov-not-found__sub-title">
                        NOT FOUND
                    </GlitchText>

                </div>
                </GlitchClip>
            </div>
        </section>


    )
}

export default NotFound;
