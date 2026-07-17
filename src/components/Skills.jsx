import { useInView } from '../hooks/useInView'
import {
  CodeOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  ToolOutlined,
  GlobalOutlined,
  BgColorsOutlined,
} from '@ant-design/icons'

const groups = [
  { title: 'Langages', icon: <CodeOutlined />, items: ['Python', 'Java', 'Javascript', 'HTML', 'CSS'] },
  { title: 'Frameworks', icon: <DesktopOutlined />, items: ['React', 'React Native', 'Vue.js', 'Django', 'Spring Boot'] },
  { title: 'Bases de données', icon: <DatabaseOutlined />, items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  { title: 'BI & ETL', icon: <ToolOutlined />, items: ['Talend', 'Power BI'] },
  { title: 'Design', icon: <BgColorsOutlined />, items: ['Krita', 'Photoshop', 'Canva'] },
  { title: 'Autres', icon: <GlobalOutlined />, items: ['UML', 'Git', 'API REST', 'Tests'] },
]

const Skills = () => {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section" ref={ref}>
      <div className={`zigzag zigzag--right ${inView ? 'is-visible' : ''}`}>
        <div className="zigzag__media">
          <div className="media-block media-block--skills">
            <span className="media-block__label">02</span>
            <h2 className="media-block__title">Compétences</h2>
            <p className="media-block__hint">Stack & outils</p>
          </div>
        </div>
        <div className="zigzag__body">
          <div className="skills-grid">
            {groups.map((group, i) => (
              <div
                key={group.title}
                className="skill-group"
                style={{ '--i': i }}
              >
                <h3>
                  {group.icon} {group.title}
                </h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
