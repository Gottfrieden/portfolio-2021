import React, { useEffect, useState } from 'react';

import './project-list-screen.css';

export default function ProjectImages({ data, currentProjectIndex }) {

    return (
        <div data-depth='0.1' className='images-container mobile no-noise'>
            <video className='video-player' autoPlay loop muted key={currentProjectIndex}>
                <source 
                    src={data.interface.mobile} 
                    type='video/mp4' 
                />
            </video>  
            <div className='screen' />
        </div>
    )
}