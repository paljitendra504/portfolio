import React from 'react'
import img from '../assets/jeetu.jpg'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
        <div>
            <img src={img} alt="Founder" />
        <h2>Jitendra Pal</h2>
        <p>Self-discipline is also a pivotal skill.</p>
        </div>
<aside>
    <h2>Social Media</h2>
    <article>
        <a href="https://www.linkedin.com/in/jitendra-pal-224a0367/" target='blank'><AiFillLinkedin/></a>
        <a href="https://github.com/paljitendra504" target='blank'><AiFillGithub/></a>
        <a href="https://www.instagram.com/jitendra_pl/" target='blank'><AiFillInstagram/></a>
    </article>
</aside>
<a href="#home"><AiOutlineArrowUp/></a>

    </footer>
  )
}

export default Footer