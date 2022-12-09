import React from 'react'
import { FooterContainer } from './Footer.styled'
import LinkedinLogo from "../../assets/linkedin.svg"
import GithubLogo from "../../assets/github.svg"

const Footer = () => {
  return (
    <FooterContainer>
    <span>Developed by: CodenameSushi ©</span>
    <div className='footer-logo'>
        <a href='https://www.linkedin.com/in/fernandohenriquefilho/'> <img src={LinkedinLogo} alt="linkedin"/></a>
        <a href='https://github.com/CodenameSushi'> <img className='github-logo' src={GithubLogo} alt="github"/></a>
    </div>
    </FooterContainer>
  )
}

export default Footer