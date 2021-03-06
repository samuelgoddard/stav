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

const NotFoundPage = () => {
  return (
    <>
      <SEO title="Terms & Conditions" />

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
                    Page Not Found
                  </h1>
                </motion.div>

                <motion.div
                  className="content mb-8 md:mb-12 px-6 lg:px-16"
                  variants={item}
                  transition="easeInOut"
                >
                  <p>We're Sorry but that page could not be found. Please return <Link to="/">home</Link> to continue browsing the site.</p>
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

export default NotFoundPage
