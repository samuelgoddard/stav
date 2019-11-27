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
      <SEO meta={about.seoMetaTags} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <section className="pt-24 md:pt-32 pb-12 md:pb-20">
          <div className="container relative text-center relative">
            <svg className="absolute bottom-0 left-0 max-w-tinier z-10 ml-12 -mb-24 md:-mb-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 66"><path d="M11.472 58.722c4.674 2.421 9.923 3.523 14.422 6.45.742.455 2.035-.152 1.728-1.09-1.608-5.354-2.076-11.065-4.354-16.215-.437-.95-2.143-.835-2.118.34.038 1.764-.242 3.435-.403 5.246-4.928-6.158-10.137-12.08-14.09-18.938-2.146-3.704-4.435-8.007-4.171-12.417.344-5.317 6.109-5.606 9.959-4.168 3.343 1.264 14.333 9.637 15.98 2.15.982-4.414-.73-7.885-2.536-11.756-.554-1.09-.909-2.229-1.134-3.356-.913-4.381 5.328-1.24 6.4-.104 2.145 2.27 3.503 5.32 4.883 8.11.378.88 1.671.274 1.364-.665-1.5-4.366-4.453-11.464-9.9-11.8-4.743-.21-5.643 3.298-4.284 7.065.886 2.488 7.047 15.272-.18 12.958-4.756-1.515-8.562-4.905-13.563-5.855-3.53-.628-7.116 1.543-8.7 4.667-1.84 3.819.19 8.817 1.772 12.277 3.99 8.62 10.355 16.206 16.637 23.263-2.635.296-5.423.84-7.915 1.735-.953.44-.55 1.778.203 2.103zm11.287-5.162c.733 2.736 1.255 5.65 1.919 8.444-3.12-1.57-6.287-2.624-9.56-3.947 2.247-.33 4.54-.46 6.34-1.61.41-.225.516-.672.421-1.071a3.72 3.72 0 00.88-1.816z"/></svg>
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
          <div className="container text-center relative">
            <svg className="absolute top-0 right-0 mr-12 max-w-tinier z-10 -mt-24 md:-mt-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 65"><path d="M29.672 56.872c12.845-4.26 16.01-20.632 4.874-28.746-.543-.43-1.225-.794-1.805-1.121-4.871 7.626-13.884 13.514-21.445 11.574-6.804-1.78-6.333-9.152-1.028-12.21 6.323-3.618 14.143-4.95 21.144-2.75 2.659-5.066 3.121-10.816-1.078-15.593C23.245-.01 8.97 2.106 2.34 9.44c-.644.81-1.934-.124-1.29-.934 7.72-10.651 26.613-10.737 33.537.95 2.648 4.562 2.017 10.134-.54 15.238 6.731 3.262 10.306 10.714 10.116 17.955-.255 8.379-6.352 13.934-13.817 16.207-1.186.381-1.757-1.568-.674-1.985zM17.258 26.359c-2.86.816-6.213 2.033-8.145 4.463-1.895 2.327 1.47 4.596 3.078 5.297 2.02.851 4.392.09 6.317-.718 4.194-1.606 8.648-5.207 11.597-9.472-4.121-1.152-8.737-.627-12.847.43z"/><path d="M24.19 61.151c1.025-2.818 2.289-5.664 3.982-8.126.705-.997 2.03.055 1.426 1.09-1.208 2.067-1.95 4.42-2.656 6.67 1.344.375 2.789.787 4.17 1.062 1.078.164 2.843.009 3.63.979.393.485.21.988-.175 1.418-.943 1.025-3.055.256-4.234.055-1.92-.357-3.667-.879-5.477-1.538-.603-.22-.886-1.006-.667-1.61z"/></svg>

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
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
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