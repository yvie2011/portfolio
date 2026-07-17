import { GithubOutlined, LinkOutlined, ExportOutlined } from '@ant-design/icons'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/projects'

const Projects = () => {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="section section--projects" ref={ref}>
      <div className={`section-head ${inView ? 'is-visible' : ''}`}>
        <span className="section-head__label">04</span>
        <h2>Projets</h2>
        <p>Clique sur un projet pour ouvrir le dépôt GitHub ou la démo en ligne.</p>
      </div>

      <div className={`projects-board ${inView ? 'is-visible' : ''}`}>
        {projects.map((project, index) => {
          const primary = project.live || project.github || null
          const hasLink = Boolean(primary)

          return (
            <article
              key={project.id}
              className={`project-tile project-tile--${index % 2 === 0 ? 'left' : 'right'} ${hasLink ? 'is-link' : 'is-pending'}`}
              style={{ '--i': index }}
            >
              {hasLink ? (
                <a
                  href={primary}
                  target="_blank"
                  rel="noreferrer"
                  className="project-tile__hit"
                  aria-label={`Ouvrir ${project.title}`}
                />
              ) : null}

              <div className="project-tile__index">0{index + 1}</div>
              <div className="project-tile__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tile__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="project-tile__actions">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-tile__icon"
                    title="GitHub"
                    aria-label={`GitHub — ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GithubOutlined />
                  </a>
                ) : null}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-tile__icon"
                    title="Voir en ligne"
                    aria-label={`Demo — ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <LinkOutlined />
                  </a>
                ) : null}
                <span className="project-tile__arrow" aria-hidden="true">
                  <ExportOutlined />
                </span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
