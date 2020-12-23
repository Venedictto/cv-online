// @ts-nocheck

import profilepicture from '../assets/profilepicture.png';

import angular from '../assets/Logos/angular.svg';
import angularjs from '../assets/Logos/angularjs.svg';
import css from '../assets/Logos/css.svg';
import html from '../assets/Logos/html.svg';
import javascript from '../assets/Logos/javascript.svg';
import react from '../assets/Logos/react.svg';

import nextjs from '../assets/Logos/nextjs.png';
import apollo from '../assets/Logos/apollo.png';
import graphql from '../assets/Logos/graphql.svg';

import mongo from '../assets/Logos/mongo.svg';
import netcore from '../assets/Logos/netcore.svg';
import sql from '../assets/Logos/sql.svg';
import node from '../assets/Logos/node.svg';

import git from '../assets/Logos/git.png';
import scrum from '../assets/Logos/scrum.svg';
import macos from '../assets/Logos/macos.svg';

import location from '../assets/Logos/location.svg';
import email from '../assets/Logos/email.svg';
import phone from '../assets/Logos/phone.png';
import user from '../assets/Logos/user.svg';

import github from '../assets/SocialMedia/github.svg';
import linkedin from '../assets/SocialMedia/linkedin.svg';
import download from '../assets/SocialMedia/download.png';

import downloadLink from '../assets/Curriculim_Vitae_Mariano_Andres_Venesio_B__F_.pdf';

const headerData = {
    firstName:'Mariano Andrés',
    lastName:'Venesio B. F.',
    subTitle:'Full-Stack Web Developer',
}
const leftColumnData = {
    profilePicture: profilepicture,
    data: [
        {
            title:'Datos Personales',
            data: [
                {name:'9 de enero 1992 (28 años)', logo:user},
                {name:'(011)1556589904', logo:phone},
                {name:'mavenesio@gmail.com', logo:email},
                {name:'Palermo, CABA, Argentina', logo:location}
            ]
        },{
            title:'Front-End Skills',
            data: [
                {name:'JavaScript', logo:javascript},
                {name:'AngularJs', logo:angularjs},
                {name:'Angular 8', logo:angular},
                {name:'React', logo:react},
                {name:'Nextjs', logo:nextjs},
                {name:'Apollo cliente', logo:apollo},
                {name:'HTML5', logo:html},
                {name:'CSS3', logo:css}
            ]
        },{
            title:'Back-End Skills',
            data: [
                {name:'NodeJs', logo:node},
                {name:'GraphQL', logo:graphql},
                {name:'Apollo server', logo:apollo},
                {name:'.NET', logo:netcore},
                {name:'SQL/MySql/PostgreSQL', logo:sql},
                {name:'MongoDB', logo:mongo}
            ]
        },{
            title:'Other Skills',
            data: [
                {name:'SVN/TFS/GIT', logo:git},
                {name:'Agile/Scrum/Canvas', logo:scrum},
                {name:'MacOS/Ubuntu', logo:macos},
                {name:'Photoshop', logo:angular}
            ]
        }],

}
const rightColumnData = {
    data: [
        {
            title:'Resumen',
            titleColor:'#32a852',
            data:[
                {
                    description:'Estudiante de Licenciatura en Análisis de Sistemas (UBA) con tres años de experiencia como desarrollador web FullStack. Soy capaz de aprender de forma constante y responsable, una persona proactiva con capacidad de adaptarse a los cambios. Siempre busco obtener el mejor resultado posible para mi equipo, aportando nuevas ideas y soluciones. Puedo captar rápidamente nuevas tecnologías y diferentes procesos.',
                    leftTitle:'',
                }
            ]
        },
        {
            title:'Experiencia',
            titleColor:'#a83269',
            data:[
                {
                    title:'Mercadolibre S.R.L.',
                    subTitle:'Front-End web developer',
                    from:'2020',
                    to:'Act.',
                    description:'Actualmente me encuentro desarrollando tareas de diseño y desarrollo de frontends para iniciativas relacionadas con la seguridad',
                    leftTitle:'Ciudad Autónoma de BuenosAires, Argentina',
                },
                {
                    title:'Codea IT',
                    subTitle:'Full-Stack web developer',
                    from:'2019',
                    to:'Act.',
                    description:'Desempeñé el rol de desarrollador FullStack en diferentes proyectos usando una gran variedad de tecnologías como Angular 8, React with typescript, NodeJs, NET core, mongoDB, My SQL, entre otras.',
                    leftTitle:'Ciudad Autónoma de BuenosAires, Argentina',
                },
                {
                    title:'Creative Coefficient S.R.L',
                    subTitle:'Full-Stack web developer',
                    from:'2018',
                    to:'2019',
                    description:'Estuve, en mayor parte, tercerizado en la empresa NEC Latinoamerica desempeñando el papel de desarrollador FullStack, usando las tecnologías AngularJS, Angular 7, SQL server, .NET, entre otras. ',
                    leftTitle:'Ciudad Autónoma de BuenosAires, Argentina',
                },
                {
                    title:'Okapii',
                    subTitle:'Full-Stack web developer',
                    from:'2017',
                    to:'2018',
                    description:'Me desempeñé como desarrollador fullstack creando sistemas intra, a medida, para diferentes clientes, usando tecnologías como AngularJS, ASP:NET y .NET SQL server',
                    leftTitle:'Ciudad Autónoma de BuenosAires, Argentina',
                }
            ]
        },
        {
            title:'Educación',
            titleColor:'#328fa8',
            data:[
                {
                    title:'Licenciatura En Sistemas',
                    subTitle:'Facultad de Ingenieria de Buenos Aires (FIUBA)',
                    from:'2013',
                    to:'Act.',
                    description:'',
                    leftTitle:'',
                },
                {
                    title:'Bachiller, modalidad Ciencias Sociales',
                    subTitle:'Instituto Saturnino E Unzue, 25 de Mayo',
                    from:'2004',
                    to:'2009',
                    description:'',
                    leftTitle:'',
                }
            ]
        }
    ]
}
const footerData = {
    data: [
        {
            icon:linkedin,
            link:'https://www.linkedin.com/in/mariano-andr%C3%A9s-venesio-bianchi-fiorito-a544568b/'
        },{
            icon:github,
            link:'https://github.com/Venedictto?tab=repositories'
        },{
            icon:download,
            link:`${downloadLink}`
        }
    ]
}
export {
        headerData,
        leftColumnData,
        rightColumnData,
        footerData,
    }