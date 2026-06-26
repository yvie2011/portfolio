import React from 'react'
import { BookOutlined, CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons"

const Formation = () => {
    const education = [
      {
        title: "Master 1 en Génie Logiciel",
        school: "Université de Yaoundé 1",
        location: "Yaoundé, Cameroun",
        status: "En cours - Obtention prévue en 2026",
        year: "2024-2026"
      },
      {
        title: "Licence en Informatique Fondamentale",
        subtitle: "Option: Génie Logiciel",
        school: "Université de Yaoundé 1",
        location: "Yaoundé, Cameroun",
        status: "Obtenue en 2025",
        year: "2025"
      },
      {
        title: "Baccalauréat ESG Série C",
        school: "Lycée Bilingue de Nylon NDOGPASSI",
        location: "Douala, Cameroun",
        status: "Obtenu en 2022",
        year: "2022"
      }
    ]

    return (
      <div className='formation'>
        <h1>Formation</h1>
        <ul>
          {education.map((edu, idx) => (
            <li key={idx}>
              <strong>{edu.title}</strong>
              {edu.subtitle && <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginTop: '5px' }}>Option: {edu.subtitle}</p>}
              <div style={{ display: 'flex', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)' }}>
                  <BookOutlined /> {edu.school}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-dim)' }}>
                  <EnvironmentOutlined /> {edu.location}
                </span>
              </div>
              <p style={{ marginTop: '10px', color: 'var(--primary)', fontWeight: '500' }}>{edu.status}</p>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default Formation
