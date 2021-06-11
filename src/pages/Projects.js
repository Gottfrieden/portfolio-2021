import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import ProjectListScreen from '../components/body/ProjectListScreen';

import './projects.css';
import { projectsData } from '../utils/projectsData';

export default function Projects({ setActivePage }) { 
    const [data] = useState(projectsData)
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handleIndex = (index) => {
        setCurrentProjectIndex(index);
    }

    useEffect(() => {
        setActivePage("Selected Work")
    }, [])

    const projectImagesStyle = {
        width: '50%',
        height: '80vh',
        position: 'absolute',
        left: '10%',
        top: '5%',
    }

    return (
        <div className='body-container selected-work'>
            <div className='clients-name'>
                {data.map((project, index) => (
                    <FadeIn delay={50} visible={true} key={index}>
                        <a href={`${project.url}`} target='_blank' rel='noopener noreferrer'>
                            <div onMouseEnter={() => handleIndex(index)} className={index === currentProjectIndex ? 'project active' : 'project'} >
                                <h3>{project.client}</h3>
                                <div className='project-atribute'>
                                    <span className='year'>{project.year}</span>
                                    <span className='tags-container'>
                                        {project.tags.map(tag => (
                                            <span className={tag === "React" ? "tag react" : tag === "Wordpress" ? "tag wordpress" : tag === "UX" ? "ux tag" : tag === "Designer" ? "web-designer tag" : tag === "Developer" ? "tag web-developer" : "tag"}>{tag}</span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </FadeIn>
                ))}
                <div data-relative-input="true" id='scene' style={projectImagesStyle} className='project-mobile'>
                    <ProjectListScreen data={data[currentProjectIndex]} currentProjectIndex={currentProjectIndex}/>
                </div>
            </div>
        </div>
    )
}