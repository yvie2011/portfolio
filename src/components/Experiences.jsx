import React from 'react'
import { CheckCircleOutlined } from "@ant-design/icons"

const Experiences = () => {
  const experiences = [
    {
      title: "Stage en Développement Web Frontend",
      description: "1 mois",
      icon: <CheckCircleOutlined />
    },
    {
      title: "Conception du Dashboard d'Administration",
      description: "Application mobile MAYEGE",
      icon: <CheckCircleOutlined />
    },
    {
      title: "Système de Gestion de Notes",
      description: "Établissements Primaires",
      icon: <CheckCircleOutlined />
    },
    {
      title: "Application Mobile de Gestion des Dons de Sang",
      description: "Développement fullstack",
      icon: <CheckCircleOutlined />
    },
    {
      title: "Carnet Médical en Ligne",
      description: "Application web et mobile",
      icon: <CheckCircleOutlined />
    },
    {
      title: "Application 'Travels'",
      description: "Réservation de tickets de voyage inter-urbain",
      icon: <CheckCircleOutlined />
    }
  ]

  return (
    <div className='exp'>
        <h1>Expériences</h1>
        <ul>
          {experiences.map((exp, idx) => (
            <li key={idx}>
              <strong>{exp.title}</strong>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Experiences
