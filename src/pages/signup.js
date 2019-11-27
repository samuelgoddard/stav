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

const SignupPage = ({ data: { signup }}) => (
  <>
    <SEO meta={signup.seoMetaTags} />

    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <section className="pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container">
          <div className="flex flex-wrap w-full">
            <div className="w-full md:w-7/12 mx-auto">
              <div className="text-center">
                <motion.div variants={item} transition="easeInOut">
                  <h1 className="page-title page-title--large mb-5 lg:mb-8">
                    {signup.heading}
                  </h1>
                </motion.div>

                <motion.div
                  className="content mb-8 md:mb-12 px-6 lg:px-16"
                  variants={item}
                  transition="easeInOut"
                >
                  <div className="md:text-lg" dangerouslySetInnerHTML={{__html:signup.blurb}}></div>
                </motion.div>
              </div>
              <motion.div variants={item} transition="easeInOut">
                <div id="mc_embed_signup" className="w-full mb-6 md:mb-8">
                  <form action="https://interactstud.us4.list-manage.com/subscribe/post?u=5547423e5d127cb1c3a401e33&amp;id=21217c2755" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  <div id="mc_embed_signup_scroll">  
                    <div className="flex flex-wrap -mx-2">
                      <div className="w-1/2 px-2 mb-6 mc-field-group">
                        <label className="text-sm" htmlFor="mce-FNAME">First Name *</label>
                        <input type="text" defaultValue="" name="FNAME" className="required form-input mt-1 block w-full" placeholder="First Name" id="mce-FNAME" required />
                      </div>
                      <div className="w-1/2 px-2 mb-6 mc-field-group">
                        <label className="text-sm" htmlFor="mce-LNAME">Last Name *</label>
                        <input type="text" defaultValue="" name="LNAME" className="required form-input mt-1 block w-full" placeholder="First Name" id="mce-LNAME" required />
                      </div>
                    </div>
                    <div className="mc-field-group mb-6">
                      <label className="text-sm" htmlFor="mce-EMAIL">Email Address *</label>
                      <input type="email" defaultValue="" name="EMAIL" className="mt-1 block w-full required email form-input" id="mce-EMAIL" placeholder="Email Address" required />
                    </div>

                    <div className="mc-field-group mb-6">
                      <label className="text-sm" htmlFor="mce-MMERGE6">Student or Employer? *</label>
                      <select name="MMERGE6" className="mt-1 form-select block w-full" id="mce-MMERGE6" required>
                        <option defaultValue="">- Please Select -</option>
                        <option defaultValue="Student">Student</option>
                        <option defaultValue="Employer">Employer</option>
                      </select>
                    </div>

                    <div className="mc-field-group mb-6">
                      <label className="text-sm" htmlFor="mce-MMERGE7">Referral </label>
                      <input type="text" defaultValue="" name="MMERGE7" className="mt-1 block w-full required email form-input" id="mce-MMERGE7" placeholder="Referrer name" />
                    </div>

                    <div id="mce-responses" className="clear">
                      <div className="response hidden" id="mce-error-response"></div>
                      <div className="response hidden" id="mce-success-response"></div>
                    </div>
                      <div className="sr-only" aria-hidden="true">
                        <input type="text" name="b_a88839c8bc40d3ba72d83bb3a_3eb474098b" tabIndex="-1" defaultValue=""/>
                      </div>
                      <div className="clear text-center">
                        <input type="submit" defaultValue="Sign Up" name="subscribe" id="mc-embedded-subscribe" className="btn mx-auto" />
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  </>
)

export default SignupPage

export const query = graphql`
  query SignupQuery {
    signup: datoCmsSignup {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      blurb
    }
  }
`