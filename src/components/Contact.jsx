import { MailOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons'
import { useInView } from '../hooks/useInView'

const Contact = () => {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="section" ref={ref}>
      <div className={`zigzag zigzag--right ${inView ? 'is-visible' : ''}`}>
        <div className="zigzag__media">
          <div className="media-block media-block--contact">
            <span className="media-block__label">05</span>
            <h2 className="media-block__title">Contact</h2>
            <p className="media-block__hint">Parlons projet</p>
          </div>
        </div>
        <div className="zigzag__body contact-body">
          <p className="contact-lead">
            Une idée, une opportunité, une collaboration ? Écris-moi — je réponds
            volontiers.
          </p>
          <a href="mailto:yvannadjaha@gmail.com" className="btn btn--primary btn--lg">
            <MailOutlined /> yvannadjaha@gmail.com
          </a>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/Yvanna-Djaha"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              <LinkedinOutlined /> LinkedIn
            </a>
            <a
              href="https://github.com/yvie2011"
              target="_blank"
              rel="noreferrer"
              className="contact-social"
            >
              <GithubOutlined /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
