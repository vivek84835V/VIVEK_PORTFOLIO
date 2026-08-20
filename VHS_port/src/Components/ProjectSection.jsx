import React from 'react'

import A_1 from '../assets/Screens/A_1.png'
import A_2 from '../assets/Screens/A_2.png'
import A_3 from '../assets/Screens/A_3.png'
import A_4 from '../assets/Screens/A_4.png'
import A_5 from '../assets/Screens/A_5.png'
import A_6 from '../assets/Screens/A_6.png'
import A_7 from '../assets/Screens/A_7.png'
import A_8 from '../assets/Screens/A_8.png'
import A_9 from '../assets/Screens/A_9.png'
import A_10 from '../assets/Screens/A_10.png'
import A_11 from '../assets/Screens/A_11.png'
import A_12 from '../assets/Screens/A_12.png'

import d_1 from '../assets/Screens/don (1).jpeg'
import d_2 from '../assets/Screens/don (2).jpeg'
import d_3 from '../assets/Screens/don (3).jpeg'
import d_4 from '../assets/Screens/don (4).jpeg'
import d_5 from '../assets/Screens/don (5).jpeg'
import d_6 from '../assets/Screens/don (6).jpeg'
import d_7 from '../assets/Screens/don (7).jpeg'
import d_8 from '../assets/Screens/don (8).jpeg'
import d_9 from '../assets/Screens/don (9).jpeg'
import d_10 from '../assets/Screens/don (10).jpeg'
import d_11 from '../assets/Screens/don (11).jpg'
import d_12 from '../assets/Screens/don (12).jpg'

import ex_1 from '../assets/Screens/ex_1.png'
import ex_2 from '../assets/Screens/ex_2.png'
import ex_3 from '../assets/Screens/ex_3.png'
import ex_4 from '../assets/Screens/ex_4.png'
import ex_5 from '../assets/Screens/ex_5.png'
import ex_6 from '../assets/Screens/ex_log.png'
import ex_7 from '../assets/Screens/ex_reg.png'

import h_1 from '../assets/Screens/h_1 (1).jpeg'
import h_2 from '../assets/Screens/h_1 (2).jpeg'
import h_3 from '../assets/Screens/h_1 (3).jpeg'

import Procards from './Procards'


function ProjectSection() {

    const projects = [
        {
            id: 1,
            name: "Excel Reader",
            description:
                "A modern data visualization platform that transforms Excel files into clean, interactive and beautiful experiences.",
            technologies: ["React", "Tailwind", "Chart.js"],
            images: [ex_1, ex_2, ex_3, ex_4, ex_5, ex_6, ex_7],

        },
        {
            id: 2,
            name: "Donation App",
            description:
                "A seamless mobile experience designed to connect people with meaningful causes and simplify the donation process.",
            technologies: ["React Native", "Node.js", "Firebase"],
            images: [d_1, d_2, d_3, d_4, d_5, d_6, d_7, d_8, d_9, d_10, d_11, d_12],
        },
        {
            id: 3,
            name: "Apni Rikshaw",
            description:
                "A real-time transportation application connecting passengers and drivers through a fast and intuitive experience.",
            technologies: ["Kotlin", "Node.js", "Socket.io"],
            images: [A_1, A_2, A_3, A_4, A_5, A_6, A_7, A_8, A_9, A_10, A_11, A_12],
        },
        {
            id: 4,
            name: "Stock UI Design",
            description:
                "Simplifying complex financial data into an intuitive, accessible mobile interface for both novice and expert traders.",
            technologies: ["kotlin", "xml", "Figma"],
            images: [h_1, h_2, h_3],
        },
    ];

    return (
        <section className="w-full space-y-10 mt-10">
            {projects.map((pro, index) => (
                <Procards key={pro.id} project={pro}
                    reverse={index % 2 === 1} />
            ))}
        </section>
    )
}



export default ProjectSection
