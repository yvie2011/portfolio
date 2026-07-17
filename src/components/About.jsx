import { useInView } from '../hooks/useInView'

const About = () => {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section" ref={ref}>
      <div className={`zigzag zigzag--left ${inView ? 'is-visible' : ''}`}>
        <div className="zigzag__media">
          <div className="media-block media-block--about">
            <span className="media-block__label">01</span>
            <h2 className="media-block__title">À propos</h2>
            <p className="media-block__hint">Qui je suis</p>
          </div>
        </div>
        <div className="zigzag__body">
          <p>
            Développeuse <strong>Fullstack</strong> passionnée, actuellement en{' '}
            <strong>Master 1</strong> en Génie Logiciel à l’Université de Yaoundé 1.
            Engagée dans l’acquisition de compétences solides depuis 2022.
          </p>
          <p>
            Titulaire d’une <strong>Licence en Informatique</strong>, mon objectif est
            de devenir une <strong>Ingénieure Logiciel</strong> reconnue — avec
            rigueur technique, créativité et clarté dans la communication.
          </p>
          <p>
            Je travaille avec React, Django et Spring Boot pour créer des solutions
            utiles, performantes et pensées pour les utilisateurs.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
