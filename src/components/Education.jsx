import { useInView } from '../hooks/useInView'
import { BookOutlined, EnvironmentOutlined } from '@ant-design/icons'

const education = [
  {
    title: 'Master 1 en Génie Logiciel',
    school: 'Université de Yaoundé 1',
    location: 'Yaoundé, Cameroun',
    status: 'En cours — 2024–2026',
  },
  {
    title: 'Licence en Informatique Fondamentale',
    subtitle: 'Option Génie Logiciel',
    school: 'Université de Yaoundé 1',
    location: 'Yaoundé, Cameroun',
    status: 'Obtenue en 2025',
  },
  {
    title: 'Baccalauréat ESG Série C',
    school: 'Lycée Bilingue de Nylon NDOGPASSI',
    location: 'Douala, Cameroun',
    status: 'Obtenu en 2022',
  },
]

const Education = () => {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="section" ref={ref}>
      <div className={`zigzag zigzag--left ${inView ? 'is-visible' : ''}`}>
        <div className="zigzag__media">
          <div className="media-block media-block--edu">
            <span className="media-block__label">03</span>
            <h2 className="media-block__title">Formation</h2>
            <p className="media-block__hint">Parcours académique</p>
          </div>
        </div>
        <div className="zigzag__body">
          <ol className="timeline">
            {education.map((edu) => (
              <li key={edu.title} className="timeline__item">
                <strong>{edu.title}</strong>
                {edu.subtitle && <span className="timeline__sub">{edu.subtitle}</span>}
                <div className="timeline__meta">
                  <span><BookOutlined /> {edu.school}</span>
                  <span><EnvironmentOutlined /> {edu.location}</span>
                </div>
                <span className="timeline__status">{edu.status}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Education
