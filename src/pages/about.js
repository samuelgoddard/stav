import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const AboutPage = ({ data: { about }}) => {
  return (
    <>
      <SEO title="About" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <section className="pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="container relative text-center">
            <div className="flex flex-wrap">
              <div className="w-full md:w-10/12 mx-auto">
                <motion.div variants={item} transition="easeInOut">
                  <h1 className="page-title page-title--large mb-5 lg:mb-8">
                    { about.heading }
                  </h1>
                </motion.div>

                <motion.div
                  className="content mb-8 md:mb-12 px-6 lg:px-16"
                  variants={item}
                  transition="easeInOut"
                >
                  <p className="md:text-lg" dangerouslySetInnerHTML={{__html:about.blurb}}></p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-40 overflow-hidden">
          <div className="container relative text-center">
            <div className="flex flex-wrap justify-center md:-mx-6">
              <motion.div
                variants={item}
                transition="easeInOut"
                className="w-10/12 md:w-1/3 md:px-6 mb-12 md:mb-0 text-center"
              >
                <div className="w-24 md:w-32 h-24 md:h-32 bg-white rounded-full block mx-auto mb-6"></div>
                <h2>{ about.usp1Heading }</h2>
                <p>{ about.usp1Blurb }</p>
              </motion.div>

              <motion.div
                variants={item}
                transition="easeInOut"
                className="w-10/12 md:w-1/3 md:px-6 mb-12 md:mb-0 text-center"
              >
                <div className="w-24 md:w-32 h-24 md:h-32 bg-white rounded-full block mx-auto mb-6"></div>
                <h2>{ about.usp2Heading }</h2>
                <p>{ about.usp2Blurb }</p>
              </motion.div>

              <motion.div
                variants={item}
                transition="easeInOut"
                className="w-10/12 md:w-1/3 md:px-6 mb-12 md:mb-0 text-center"
              >
                <div className="w-24 md:w-32 h-24 md:h-32 bg-white rounded-full block mx-auto mb-6"></div>
                <h2>{ about.usp3Heading }</h2>
                <p>{ about.usp3Blurb }</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container text-center">
            <div className="flex flex-wrap justify-center">
              <motion.div
                variants={item}
                transition="easeInOut"
                className="text-center"
              >
                <h3 className="page-title">{ about.signUpHeading }</h3>
                <p className="text-lg mb-8" dangerouslySetInnerHTML={{__html:about.signUpBlurb}}></p>

                <Link
                  className="btn inline-block"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
      
      <Footer />
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      heading
      blurb
      usp1Heading
      usp1Blurb
      usp2Heading
      usp2Blurb
      usp3Heading
      usp3Blurb
      signUpHeading
      signUpBlurb
      
    }
  }
`