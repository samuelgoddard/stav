import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { motion } from "framer-motion"

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

const TermsConditionsPage = ({ data: { terms }}) => {
  return (
    <>
      <SEO meta={terms.seoMetaTags} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <section className="pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="container relative">
            <div className="flex flex-wrap">
              <div className="w-full md:w-10/12 mx-auto">
                <motion.div variants={item} transition="easeInOut">
                  <h1 className="page-title page-title--large mb-8 lg:mb-12 text-center">
                    { terms.title }
                  </h1>
                </motion.div>

                <motion.div
                  className="content mb-8 md:mb-12 lg:px-16"
                  variants={item}
                  transition="easeInOut"
                >
                  <div dangerouslySetInnerHTML={{__html:terms.content}}></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      
      <Footer />
    </>
  )
}

export default TermsConditionsPage

export const query = graphql`
  query TermsQuery {
    terms: datoCmsTermsCondition {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      content
    }
  }
`