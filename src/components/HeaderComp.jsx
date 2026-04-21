import React from 'react'
import profile from '../assets/profile.jpeg'
import { LinkedinOutlined, GithubOutlined, DownloadOutlined } from "@ant-design/icons"

const HeaderComp = () => {
    return (
    <header>
        <div className='left'>
        <img src={profile} alt="user" />
        <div className='user-infos'>
            <h1>Yvanna DJAHA</h1>
            <h3>Développeuse Fullstack</h3>

          {/* Les icônes sont maintenant ICI, sous ton titre */}
            <div className='contact-icons'>
            <a href="https://linkedin.com/in/Yvanna Djaha" target="_blank" rel="noreferrer" className='contact-item'>
                <LinkedinOutlined />
            </a>
            <a href="https://github.com/yvie2011" target="_blank" rel="noreferrer" className='contact-item'>
                <GithubOutlined />
            </a>
            </div>
        </div>
        </div>

        <div className='right'>
            <a
                href="/Curriculum Vitae.pdf"
                download="Curriculum_Vitae_Yvanna.pdf"
                className='download-btn'
                >
                <DownloadOutlined /> Télécharger CV
            </a>
            <a
                href="mailto:yvannadjaha@gmail.com"><button className='contact-btn'>Contactez-moi</button>
            </a>
        </div>
    </header>
    )
}

export default HeaderComp