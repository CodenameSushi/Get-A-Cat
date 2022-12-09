import React from 'react'
import { FooterContainer } from './Footer.styled'
import LinkedinLogo from "../../assets/linkedin.svg"
import GithubLogo from "../../assets/github.svg"

const Footer = () => {
  return (
    <FooterContainer>
      <div>
    <span>Developed by: CodenameSushi ©</span>
    <span className='center-footer'>We 💙 Cats! </span>
    </div>
    <div className='footer-logo'>
        <a href='https://www.linkedin.com/in/fernandohenriquefilho/'> <img src={LinkedinLogo} alt="linkedin"/></a>
        <a href='https://github.com/CodenameSushi'> <img className='github-logo' src={GithubLogo} alt="github"/></a>
    </div>
    </FooterContainer>
  )
}

export default Footer