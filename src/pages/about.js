import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Img from "gatsby-image"

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
              <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
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
                  <div className="md:text-lg" dangerouslySetInnerHTML={{__html:about.blurb}}></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-48 overflow-hidden">
          <div className="container relative text-center">
            <div className="flex flex-wrap justify-center md:-mx-6">
              <motion.div
                variants={item}
                transition="easeInOut"
                className="w-10/12 md:w-1/3 md:px-6 mb-12 md:mb-0 text-center content"
              >
                <Img fluid={about.usp1Image.fluid} alt={about.usp1Image.alt} className="w-24 md:w-32 h-24 md:h-32 rounded-full block mx-auto mb-6" />

                <h2>{ about.usp1Heading }</h2>
                <p>{ about.usp1Blurb }</p>
              </motion.div>

              <motion.div
                variants={item}
                transition="easeInOut"
                className="w-10/12 md:w-1/3 md:px-6 mb-12 md:mb-0 text-center content"
              >
                <Img fluid={about.usp2Image.fluid} alt={about.usp2Image.alt} className="w-24 md:w-32 h-24 md:h-32 rounded-full block mx-auto mb-6" />

                <h2>{ about.usp2Heading }</h2>
                <p>{ about.usp2Blurb }</p>
              </motion.div>

              <motion.div
                variants={item}
                transition="easeInOut"
                className="w-10/12 md:w-1/3 md:px-6 mb-12 md:mb-0 text-center content"
              >
                <Img fluid={about.usp3Image.fluid} alt={about.usp3Image.alt} className="w-24 md:w-32 h-24 md:h-32 rounded-full block mx-auto mb-6" />

                <h2>{ about.usp3Heading }</h2>
                <p>{ about.usp3Blurb }</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-48">
          <div className="container text-center">
            <div className="flex flex-wrap justify-center">
              <motion.div
                variants={item}
                transition="easeInOut"
                className="text-center"
              >
                <div className="content">
                  <h3 className="page-title">{ about.signUpHeading }</h3>
                  <div className="text-lg mb-8" dangerouslySetInnerHTML={{__html:about.signUpBlurb}}></div>
                </div>

                <Link
                  className="btn inline-block no-underline"
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
      usp1Image {
        url
        title
        alt
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      usp1Heading
      usp1Blurb
      usp2Image {
        url
        title
        alt
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      usp2Heading
      usp2Blurb
      usp3Image {
        url
        title
        alt
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      usp3Heading
      usp3Blurb
      signUpHeading
      signUpBlurb
      
    }
  }
`