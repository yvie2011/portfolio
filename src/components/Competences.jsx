import React from 'react'
import { CodeOutlined, DatabaseOutlined, DesktopOutlined, ToolOutlined, GlobalOutlined, BgColorsOutlined } from "@ant-design/icons"

const Competences = () => {
  const skills = {
    'LANGAGES': {
      icon: <CodeOutlined />,
      items: ['Python', 'Java', 'Javascript', 'HTML', 'CSS']
    },
    'FRAMEWORKS': {
      icon: <DesktopOutlined />,
      items: ['React Js', 'React Native', 'Vue js', 'Django', 'Spring Boot']
    },
    'BASES DE DONNEES': {
      icon: <DatabaseOutlined />,
      items: ['PostgreSql', 'Mysql', 'SQLite']
    },
    'OUTILS BI & ETL': {
      icon: <ToolOutlined />,
      items: ['Talend', 'Power BI']
    },
    'DESIGN GRAPHIQUE': {
      icon: <BgColorsOutlined />,
      items: ['Krita', 'Photoshop', 'Canva']
    },
    'AUTRES': {
      icon: <GlobalOutlined />,
      items: ['UML', 'Git', 'Design Pattern', 'Test logiciel', 'Api rest']
    },
    'LANGUES': {
      icon: <GlobalOutlined />,
      items: ['Francais: Langue maternelle', 'Anglais: Intermediaire']
    }
  }

  return (
    <div className='comp'>
        <h1>Competences</h1>
        
        {Object.entries(skills).map(([ category, data ], idx) => (
          <div key={idx} id={category.toLowerCase().replace(/\s+/g, '')}>
            <h4>{category}</h4>
            <ul>
              {data.items.map((skill, skillIdx) => (
                <li key={skillIdx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  )
}

export default Competences
