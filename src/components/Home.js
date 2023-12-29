import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import jeetu from "../assets/jeetufullblack.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (a) => (clientCount.current.textContent = a.toFixed()),
    });
  };

  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (a) => (projectCount.current.textContent = a.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      h1: {
        initial: {
          y: "-100%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I Am <br /> Jitendra Pal
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "A Developer",
                "A Frontend Developer",
                "A MERN Stack Developer ",
              ],
              autoStart: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:paljitendra504@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />{" "}
            </a>
          </div>

          <article>
            <p>
            {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
              +
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
            {
              ratio <2 && (
                <motion.span
                  whileInView={animationProjectsCount}
                  ref={projectCount}
                ></motion.span>
              )
            }
                +
              </p>
              <span>Projects Completed</span>
            </article>

            <article data-contact>
              <p>Contact</p>
              <span>paljitendra504@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={jeetu} alt="Jitendra" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
