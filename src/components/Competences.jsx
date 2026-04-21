import React from 'react'

const Competences = () => {
  return (
    <div className='comp'>
        <h1>Competences</h1>
        <div id='langue'>
            <h4>LANGUES</h4>
            <ul>
            <li>Francais: Langue maternelle</li>
            <li>Anglais: Intermediaire </li>
            </ul>
        </div>

        <div id='tech'>
            <h4>LANGAGES DE PROGRAMMATION & TECHNOLOGIES</h4>
            <ul>
            <li>Python</li>
            <li>Java</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            </ul>
        </div>

        <div id='frame' >
            <h4>FRAMEWORK</h4>
            <ul>
            <li>Django</li>
            <li>Spring Boot</li>
            <li>React Js</li>
            <li>React Native</li>
            <li>Vue js</li>
            </ul>
        </div>

        <div id='outil' >
            <h4>OUTILS BI & ETL</h4>
            <ul>
            <li>Talend</li>
            <li>Power BI</li>
            </ul>
        </div>

        <div id='bd' >
            <h4>BASES DE DONNEES</h4>
            <ul>
            <li>PostgreSql</li>
            <li>Mysql</li>
            <li>sqlite</li>
            </ul>
        </div>

        <div id='design' >
            <h4>DESIGN GRAPHIQUE</h4>
            <ul>
            <li>Krita</li>
            <li>Photoshop</li>
            <li>Canva</li>
            </ul>
        </div>

        <div  id='autre'>
            <h4>AUTRES</h4>
            <ul>
            <li>UML</li>
            <li>Git</li>
            <li>Design Pattern</li>
            <li>Test logiciel</li>
            <li>Api rest</li>
            </ul>
        </div>
    </div>
    )
}

export default Competences
