import React from "react"
import SEO from "../components/seo"
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

const IndexPage = ({ data: { home }}) => {
  return (
    <>
      <SEO title="Home" />

      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="fill-screen flex items-center py-16 overflow-hidden"
      >
        <div className="container relative">
          <div className="flex flex-wrap items-center md:-mx-6">
            <div className="w-full md:w-1/2 lg:w-7/12 md:px-6 relative z-10 order-2 md:order-1">
              <motion.div variants={item} transition="easeInOut">
                <h1 className="page-title page-title--large mb-5 lg:mb-8">
                  { home.heading }
                </h1>
              </motion.div>

              <motion.div
                className="content mb-8 md:mb-12"
                variants={item}
                transition="easeInOut"
              >
                <p className="md:text-lg" dangerouslySetInnerHTML={{__html:home.blurb}}></p>
              </motion.div>

              <motion.div
                variants={item}
                transition="easeInOut"
              >
                <Link
                  className="btn"
                  to="/signup"
                >
                  Sign up to the waitlist
                </Link>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2 lg:w-5/12 mb-8 md:mb-0 md:px-6 order-1 md:order-2 relative">
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 38"><path d="M58.34 11.854c2.421 4.675 3.522 9.924 6.45 14.423.454.742-.152 2.035-1.091 1.727-5.353-1.608-11.065-2.075-16.214-4.354-.95-.437-.836-2.143.34-2.117 1.763.038 3.434-.242 5.246-.404-6.159-4.927-12.08-10.137-18.938-14.089-3.704-2.147-8.007-4.436-12.418-4.172-5.316.345-5.605 6.11-4.167 9.959 1.264 3.343 9.636 14.333 2.15 15.98-4.414.982-7.885-.73-11.756-2.535-1.09-.555-2.23-.91-3.357-1.135-4.38-.913-1.239 5.328-.104 6.4 2.27 2.145 5.32 3.503 8.11 4.884.88.378.274 1.67-.665 1.364C7.56 36.284.462 33.33.126 27.884c-.21-4.742 3.299-5.643 7.066-4.284 2.488.886 15.271 7.047 12.958-.18-1.516-4.756-4.905-8.561-5.855-13.563-.628-3.53 1.542-7.116 4.666-8.7 3.82-1.84 8.818.19 12.278 1.773 8.62 3.99 16.206 10.355 23.263 16.636.296-2.635.84-5.422 1.735-7.915.44-.953 1.778-.55 2.103.203zm-5.162 11.287c2.736.734 5.649 1.256 8.444 1.919-1.571-3.12-2.625-6.287-3.948-9.56-.33 2.247-.459 4.541-1.609 6.34-.225.411-.673.516-1.072.421a3.711 3.711 0 01-1.815.88z"/></svg>
              <Img fluid={home.image.fluid} key={home.image.title} alt={home.image.alt} className="w-10/12 md:w-full mx-auto md:mx-0 rounded-full" />
              <span className="coming-soon">Coming<br/>Soon</span>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      heading
      blurb
      image {
        url
        title
        alt
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`