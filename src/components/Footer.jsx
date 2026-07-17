import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <a href="#home" className="navbar__brand">Yvanna<span>.</span></a>
          <p>Développeuse Fullstack — Yaoundé, Cameroun</p>
        </div>

        <div className="site-footer__cols">
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Liens</h4>
            <ul>
              <li>
                <a href="https://github.com/yvie2011" target="_blank" rel="noreferrer">
                  <GithubOutlined /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/Yvanna-Djaha" target="_blank" rel="noreferrer">
                  <LinkedinOutlined /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:yvannadjaha@gmail.com">
                  <MailOutlined /> Email
                </a>
              </li>
              <li>
                <a href="/Curriculum Vitae.pdf" download="Curriculum_Vitae_Yvanna.pdf">
                  Télécharger CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© {year} Yvanna Djaha. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
