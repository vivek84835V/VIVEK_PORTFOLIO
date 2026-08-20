import React from 'react'

import img1 from '../assets/project-1.jpg'
import img2 from '../assets/project-1.jpg'
import img3 from '../assets/project-1.jpg'

import img4 from '../assets/project-1.jpg'
import img5 from '../assets/project-1.jpg'
import img6 from '../assets/project-1.jpg'

import img7 from '../assets/project-1.jpg'
import img8 from '../assets/project-1.jpg'
import img9 from '../assets/project-1.jpg'
import Procard from './procard'


function ProjectSection() {

    const projects = [
        {
            id: 1,
            name: "Excel Reader",
            description:
                "A modern data visualization platform that transforms Excel files into clean, interactive and beautiful experiences.",
            technologies: ["React", "Tailwind", "Chart.js"],
            images: [img1, img2, img3],
        },
        {
            id: 2,
            name: "Donation App",
            description:
                "A seamless mobile experience designed to connect people with meaningful causes and simplify the donation process.",
            technologies: ["React Native", "Node.js", "Firebase"],
            images: [img4, img5, img6],
        },
        {
            id: 3,
            name: "Apni Rikshaw",
            description:
                "A real-time transportation application connecting passengers and drivers through a fast and intuitive experience.",
            technologies: ["React Native", "Node.js", "Socket.io"],
            images: [img7, img8, img9],
        },
    ];

    return (
        <section className="w-full space-y-10 mt-10">
            {projects.map((pro, index) => (
                <Procard key={pro.id} project={pro}
                    reverse={index % 2 === 1} />
            ))}
        </section>
    )
}



export default ProjectSection
