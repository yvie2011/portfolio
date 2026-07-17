import profile from '../assets/profile.jpeg'
import { DownloadOutlined, ArrowDownOutlined } from '@ant-design/icons'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow reveal reveal--delay-1">Développeuse Fullstack</p>
        <h1 className="hero__brand reveal reveal--delay-2">
          Yvanna<span> Djaha</span>
        </h1>
        <p className="hero__lead reveal reveal--delay-3">
          Master 1 en Génie Logiciel — je conçois des expériences web et mobile
          modernes, rapides et élégantes.
        </p>
        <div className="hero__cta reveal reveal--delay-4">
          <a href="#projects" className="btn btn--primary">
            Voir mes projets
          </a>
          <a
            href="/Curriculum Vitae.pdf"
            download="Curriculum_Vitae_Yvanna.pdf"
            className="btn btn--ghost"
          >
            <DownloadOutlined /> CV
          </a>
        </div>
      </div>

      <div className="hero__visual reveal reveal--delay-3">
        <div className="hero__frame">
          <img src={profile} alt="Yvanna Djaha" className="hero__photo" />
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Descendre">
        <ArrowDownOutlined />
      </a>
    </section>
  )
}

export default Hero
