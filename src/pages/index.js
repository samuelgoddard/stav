import React from "react"
import SEO from "../components/seo"
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

const IndexPage = () => {
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
          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 relative z-10">
              <motion.div variants={item} transition="easeInOut">
                <h1 className="page-title mb-5 lg:mb-8">
                  Marketing text.
                  <br />
                  An intro to the brand and what it does.
                </h1>
              </motion.div>

              <motion.div
                className="content mb-8 md:mb-12"
                variants={item}
                transition="easeInOut"
              >
                <p className="md:text-lg">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </motion.div>

              <motion.div
                variants={item}
                transition="easeInOut"
              >
                <Link
                  className="btn"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 phone w-full hidden md:block">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 103.981 209.285"
              class="pl-20 lg:pl-32 pr-10 w-5/12 ml-auto"
            >
              <defs>
                <linearGradient id="c">
                  <stop offset="0" stopColor="#4f4f4f" stop-opacity=".131" />
                  <stop offset=".07" stopColor="#4f4f4f" />
                  <stop offset=".937" stopColor="#4f4f4f" stop-opacity=".953" />
                  <stop offset="1" stopColor="#4f4f4f" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="b">
                  <stop offset="0" stopColor="#404040" />
                  <stop offset=".6" stopColor="#838383" />
                  <stop offset="1" stopColor="#a7a7a7" />
                </linearGradient>
                <linearGradient
                  id="r"
                  x1="340.652"
                  x2="349.574"
                  y1="361.123"
                  y2="361.123"
                  gradientTransform="matrix(.26458 0 0 .26458 8.731 0)"
                  gradientUnits="userSpaceOnUse"
                  href="#b"
                />
                <linearGradient
                  id="s"
                  x1="340.652"
                  x2="349.574"
                  y1="361.123"
                  y2="361.123"
                  gradientTransform="matrix(-.26458 0 0 .26458 95.476 0)"
                  gradientUnits="userSpaceOnUse"
                  href="#b"
                />
                <linearGradient
                  id="w"
                  x1="8.315"
                  x2="95.955"
                  y1="8.48"
                  y2="8.48"
                  gradientTransform="translate(.067 -21.061)"
                  gradientUnits="userSpaceOnUse"
                  href="#c"
                />
                <linearGradient
                  id="x"
                  x1="8.315"
                  x2="95.666"
                  y1="8.48"
                  y2="8.48"
                  gradientTransform="matrix(1 0 0 -1 .067 193.834)"
                  gradientUnits="userSpaceOnUse"
                  href="#c"
                />
                <linearGradient
                  id="A"
                  x1="-41.981"
                  x2="155.563"
                  y1="95.48"
                  y2="95.48"
                  gradientTransform="matrix(0 3.77953 -3.77953 0 540.871 180.12)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#303030" />
                  <stop offset="1" stopColor="#171717" />
                </linearGradient>
                <linearGradient
                  id="i"
                  x1="-13.206"
                  x2="-13.206"
                  y1="26.259"
                  y2="32.871"
                  gradientUnits="userSpaceOnUse"
                  href="#d"
                />
                <linearGradient
                  id="l"
                  x1="-13.206"
                  x2="-13.206"
                  y1="26.259"
                  y2="39.269"
                  gradientTransform="translate(13.878 13.831)"
                  gradientUnits="userSpaceOnUse"
                  href="#d"
                />
                <linearGradient
                  id="f"
                  x1="-13.206"
                  x2="-13.206"
                  y1="26.259"
                  y2="47.301"
                  gradientTransform="translate(13.878 13.831)"
                  gradientUnits="userSpaceOnUse"
                  href="#d"
                />
                <linearGradient id="d">
                  <stop offset="0" stopColor="#5e6c62" stop-opacity=".275" />
                  <stop offset=".05" stopColor="#5e6c62" />
                  <stop offset=".95" stopColor="#5e6c62" />
                  <stop offset="1" stopColor="#5e6c62" stop-opacity=".275" />
                </linearGradient>
                <filter
                  id="q"
                  width="1.003"
                  height="1.002"
                  x="-.002"
                  y="-.001"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".266" />
                </filter>
                <filter
                  id="u"
                  width="1.385"
                  height="1.165"
                  x="-.192"
                  y="-.082"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".031" />
                </filter>
                <filter
                  id="v"
                  width="1.218"
                  height="1.165"
                  x="-.109"
                  y="-.082"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".031" />
                </filter>
                <filter
                  id="y"
                  width="1.199"
                  height="6.133"
                  x="-.1"
                  y="-2.567"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".491" />
                </filter>
                <filter
                  id="C"
                  width="1.003"
                  height="1.002"
                  x="-.002"
                  y="-.001"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".266" />
                </filter>
                <filter
                  id="G"
                  width="1.003"
                  height="1.002"
                  x="-.002"
                  y="-.001"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".266" />
                </filter>
                <filter
                  id="E"
                  width="1.003"
                  height="1.002"
                  x="-.002"
                  y="-.001"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".266" />
                </filter>
                <filter
                  id="j"
                  width="1.65"
                  height="1.052"
                  x="-.325"
                  y="-.026"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".071" />
                </filter>
                <filter
                  id="m"
                  width="1.65"
                  height="1.052"
                  x="-.325"
                  y="-.026"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".071" />
                </filter>
                <filter
                  id="o"
                  width="1.65"
                  height="1.052"
                  x="-.325"
                  y="-.026"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".071" />
                </filter>
                <filter
                  id="g"
                  width="1.65"
                  height="1.052"
                  x="-.325"
                  y="-.026"
                  color-interpolation-filters="sRGB"
                >
                  <feGaussianBlur stdDeviation=".071" />
                </filter>
                <clipPath id="p">
                  <path
                    fill="#ebebeb"
                    d="M56.734 2.014c-29.678 0-53.572 23.893-53.572 53.572v610.443c0 29.679 23.894 53.573 53.572 53.573h246.532c29.678 0 53.572-23.894 53.572-53.573V55.586c0-29.679-23.894-53.572-53.572-53.572zm-1.423 3.978h249.378c26.583 0 47.983 21.398 47.983 47.98V668.21c0 26.582-21.4 47.982-47.983 47.982H55.311c-26.583 0-47.983-21.4-47.983-47.982V53.973c0-26.583 21.4-47.98 47.983-47.98z"
                    color="#000"
                  />
                </clipPath>
                <clipPath id="B">
                  <path
                    fill="#ebebeb"
                    d="M56.734 2.014c-29.678 0-53.572 23.893-53.572 53.572v610.443c0 29.679 23.894 53.573 53.572 53.573h246.532c29.678 0 53.572-23.894 53.572-53.573V55.586c0-29.679-23.894-53.572-53.572-53.572zm-1.423 3.978h249.378c26.583 0 47.983 21.398 47.983 47.98V668.21c0 26.582-21.4 47.982-47.983 47.982H55.311c-26.583 0-47.983-21.4-47.983-47.982V53.973c0-26.583 21.4-47.98 47.983-47.98z"
                    color="#000"
                  />
                </clipPath>
                <clipPath id="F">
                  <path
                    fill="#ebebeb"
                    d="M56.734 2.014c-29.678 0-53.572 23.893-53.572 53.572v610.443c0 29.679 23.894 53.573 53.572 53.573h246.532c29.678 0 53.572-23.894 53.572-53.573V55.586c0-29.679-23.894-53.572-53.572-53.572zm-1.423 3.978h249.378c26.583 0 47.983 21.398 47.983 47.98V668.21c0 26.582-21.4 47.982-47.983 47.982H55.311c-26.583 0-47.983-21.4-47.983-47.982V53.973c0-26.583 21.4-47.98 47.983-47.98z"
                    color="#000"
                  />
                </clipPath>
                <clipPath id="D">
                  <path
                    fill="#ebebeb"
                    d="M56.734 2.014c-29.678 0-53.572 23.893-53.572 53.572v610.443c0 29.679 23.894 53.573 53.572 53.573h246.532c29.678 0 53.572-23.894 53.572-53.573V55.586c0-29.679-23.894-53.572-53.572-53.572zm-1.423 3.978h249.378c26.583 0 47.983 21.398 47.983 47.98V668.21c0 26.582-21.4 47.982-47.983 47.982H55.311c-26.583 0-47.983-21.4-47.983-47.982V53.973c0-26.583 21.4-47.98 47.983-47.98z"
                    color="#000"
                  />
                </clipPath>
                <clipPath id="h">
                  <rect
                    width="4.377"
                    height="7.417"
                    x="-13.878"
                    y="25.857"
                    color="#000"
                    ry=".451"
                  />
                </clipPath>
                <clipPath id="k">
                  <path
                    d="M.451 39.688a.45.45 0 00-.451.45v12.913c0 .25.201.451.451.451h3.474a.45.45 0 00.451-.45V40.138a.45.45 0 00-.45-.451z"
                    color="#000"
                  />
                </clipPath>
                <clipPath id="n">
                  <path
                    d="M.451 39.688a.45.45 0 00-.451.45v12.913c0 .25.201.451.451.451h3.474a.45.45 0 00.451-.45V40.138a.45.45 0 00-.45-.451z"
                    color="#000"
                  />
                </clipPath>
                <clipPath id="e">
                  <path
                    d="M.451 39.688a.45.45 0 00-.451.45v20.945c0 .25.201.451.451.451h3.474a.45.45 0 00.451-.45V40.138a.45.45 0 00-.45-.451z"
                    color="#000"
                  />
                </clipPath>
                <pattern
                  id="t"
                  patternTransform="matrix(.26458 0 0 .26458 -72.212 -24.236)"
                  href="#a"
                />
                <pattern
                  id="a"
                  width="1.172"
                  height="1.172"
                  patternTransform="matrix(.26458 0 0 .26458 -76.446 -5.781)"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    fill="#212121"
                    d="M-76.446 7.07h.155v.155h-.155zM-76.291 7.225h.155v.155h-.155z"
                    transform="matrix(3.77953 0 0 3.77953 288.929 -26.721)"
                  />
                  <path
                    fill="#060606"
                    d="M-76.291 7.07h.155v.155h-.155zM-76.446 7.225h.155v.155h-.155z"
                    transform="matrix(3.77953 0 0 3.77953 288.929 -26.721)"
                  />
                </pattern>
                <mask id="z" maskUnits="userSpaceOnUse">
                  <path
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-width=".053"
                    d="M42.747 7.262c-.4 0-.72.321-.72.72 0 .4.32.72.72.72h9.922c.399 0 .72-.32.72-.72 0-.399-.321-.72-.72-.72z"
                    color="#000"
                  />
                </mask>
              </defs>
              <g color="#000">
                <path
                  fill="#4e5c52"
                  d="M103.53 44.007c.25 0 .451.201.451.451v20.945a.45.45 0 01-.45.45h-3.475a.45.45 0 01-.451-.45V44.458c0-.25.201-.45.45-.45z"
                />
                <path
                  fill="url(#f)"
                  d="M.547 40.09a.401.401 0 00-.402.402V60.73c0 .223.18.402.402.402h.125V40.09z"
                  clip-path="url(#e)"
                  filter="url(#g)"
                  transform="matrix(-1 0 0 1 103.981 4.32)"
                />
              </g>
              <g color="#000" transform="translate(-115.808 9.196)">
                <rect
                  width="4.377"
                  height="7.417"
                  x="115.808"
                  y="16.462"
                  fill="#4e5c52"
                  ry=".451"
                />
                <path
                  fill="url(#i)"
                  d="M-13.33 26.259a.401.401 0 00-.403.402v5.808c0 .223.18.402.402.402h.125v-6.612z"
                  clip-path="url(#h)"
                  filter="url(#j)"
                  transform="translate(129.686 -9.395)"
                />
                <path
                  fill="#4e5c52"
                  d="M116.26 30.293a.45.45 0 00-.452.45v12.913c0 .25.201.451.451.451h3.474a.45.45 0 00.452-.45V30.743a.45.45 0 00-.452-.451z"
                />
                <path
                  fill="url(#l)"
                  d="M.547 40.09a.401.401 0 00-.402.402v12.206c0 .223.18.402.402.402h.125V40.09z"
                  clip-path="url(#k)"
                  filter="url(#m)"
                  transform="translate(115.808 -9.395)"
                />
                <path
                  fill="#4e5c52"
                  d="M116.26 47.666a.45.45 0 00-.452.45V61.03c0 .25.201.45.451.45h3.474a.45.45 0 00.452-.45V48.116a.45.45 0 00-.452-.45z"
                />
                <path
                  fill="url(#l)"
                  d="M.547 40.09a.401.401 0 00-.402.402v12.206c0 .223.18.402.402.402h.125V40.09z"
                  clip-path="url(#n)"
                  filter="url(#o)"
                  transform="translate(115.808 7.978)"
                />
              </g>
              <g transform="translate(0 18.256)">
                <path
                  fill="#3c4940"
                  d="M14.483-18.256A13.934 13.934 0 00.52-4.292v181.356a13.934 13.934 0 0013.964 13.965H47.15l.578-.82h8.525l.579.82H89.497a13.934 13.934 0 0013.965-13.965V-4.292a13.934 13.934 0 00-13.964-13.964H23.215z"
                  color="#000"
                />
                <rect
                  width="101.429"
                  height="207.863"
                  x="1.404"
                  y="-17.472"
                  ry="14.032"
                />
                <g color="#000">
                  <path fill="#424f46" d="M.837 1.371h1.102V.068H.837z" />
                  <path fill="#57645b" d="M.837 171.468h1.102V1.371H.837z" />
                  <path fill="#424f46" d="M.837 172.772h1.102v-1.304H.837z" />
                  <path
                    fill="#57645b"
                    d="M103.18 172.783h-1.102v4.36c0 7.032-5.698 12.683-12.731 12.683H14.634A12.668 12.668 0 011.94 177.131v-4.36H.837v3.783A14.143 14.143 0 0015.01 190.73h73.96c7.852 0 14.209-6.311 14.209-14.163zM15.011-17.856A14.143 14.143 0 00.837-3.68v3.75h1.102v-4.177a12.666 12.666 0 0112.695-12.695l74.748.012a12.668 12.668 0 0112.696 12.695V.08h1.102v-3.75a14.144 14.144 0 00-14.174-14.174z"
                  />
                </g>
              </g>
              <path
                fill="#3d4a41"
                fill-rule="evenodd"
                d="M37.924 11.58c-6.587-.168-19.14 1.826-32.031 16.313-18.75 21.071-1.965 8.392-1.965 8.392s11.518-17.856 27.59-20.178c16.071-2.321 11.16-3.93 11.16-3.93s-1.76-.52-4.754-.597z"
                clip-path="url(#p)"
                filter="url(#q)"
                transform="matrix(.26458 0 0 .26458 0 -.199)"
              />
              <g color="#000">
                <path
                  fill="url(#r)"
                  d="M94.874 4.065c-.31-.03-.164.279.534.925 2.3 2.131 3.73 5.216 3.73 8.65V196.176c0 3.434-1.43 6.519-3.73 8.65-.698.646-.844.956-.534.925.187-.019.538-.16 1.033-.424 3.363-1.794 5.316-5.664 5.316-9.775V14.264c0-4.111-1.953-7.981-5.316-9.775-.495-.265-.846-.406-1.033-.424z"
                  transform="translate(-.113 -.199)"
                />
                <path
                  fill="url(#s)"
                  d="M9.333 4.065c.311-.03.164.279-.533.925-2.3 2.131-3.73 5.216-3.73 8.65V196.176c0 3.434 1.43 6.519 3.73 8.65.697.646.844.956.533.925-.186-.019-.537-.16-1.033-.424-3.362-1.794-5.315-5.664-5.315-9.775V14.264c0-4.111 1.953-7.981 5.315-9.775.496-.265.847-.406 1.033-.424z"
                  transform="translate(-.113 -.199)"
                />
              </g>
              <g color="#000" transform="translate(0 18.256)">
                <rect
                  width="11.363"
                  height="1.441"
                  x="46.259"
                  y="-11.193"
                  fill="url(#t)"
                  ry=".721"
                />
                <circle cx="62.148" cy="-10.565" r="1.345" fill="#161616" />
                <circle cx="62.148" cy="-10.565" r="1.077" fill="#0a0d13" />
                <circle cx="62.148" cy="-10.565" r=".821" fill="#091427" />
              </g>
              <path
                fill="#235a91"
                fill-opacity=".556"
                fill-rule="evenodd"
                d="M61.583-11.115c-.097.01-.236.16-.246.451-.01.292.118.451.19.451.071 0 .369-.425.056-.902z"
                filter="url(#u)"
                transform="translate(0 18.256)"
              />
              <path
                fill="#235a91"
                fill-opacity=".556"
                fill-rule="evenodd"
                d="M62.282-11.217c-.153.047-.183.295-.177.437.006.142.207.514.449.431.242-.082.283-.39.183-.596-.1-.207-.284-.355-.455-.272z"
                filter="url(#v)"
                transform="translate(0 18.256)"
              />
              <path
                fill="url(#w)"
                d="M14.624-15.878c-2.299 0-4.437.657-6.242 1.792v1.505a10.897 10.897 0 016-1.785H54.59l35.204.119c2.22.007 4.28.657 6 1.785v-1.505a11.754 11.754 0 00-6.242-1.792l-34.962-.119H40.794z"
                color="#000"
                transform="translate(0 18.256)"
              />
              <path
                fill="url(#x)"
                d="M14.624 188.651c-2.299 0-4.437-.657-6.242-1.792v-1.505a10.897 10.897 0 006 1.785h75.351c2.22 0 4.28-.656 6-1.785v1.505a11.685 11.685 0 01-6.242 1.792H40.794z"
                color="#000"
                transform="translate(0 18.256)"
              />
              <g
                fill="#fff"
                fill-opacity=".065"
                transform="translate(0 18.256)"
              >
                <circle cx="33.325" cy="-10.565" r=".898" />
                <circle cx="69.245" cy="-10.565" r="1.606" />
                <circle cx="40.873" cy="-10.565" r="1.323" />
              </g>
              <path
                fill="none"
                stroke="#292929"
                stroke-linecap="round"
                stroke-width=".053"
                d="M46.98 7.063c-.4 0-.72.321-.72.72 0 .4.32.72.72.72h9.922c.399 0 .72-.32.72-.72 0-.399-.321-.72-.72-.72z"
                color="#000"
              />
              <g
                fill="#fff"
                filter="url(#y)"
                mask="url(#z)"
                transform="translate(4.233 -.199)"
              >
                <path d="M42.256 7.982a.23.23 0 01-.23.23.23.23 0 01-.23-.23.23.23 0 01.23-.23.23.23 0 01.23.23zM53.619 7.982a.23.23 0 01-.23.23.23.23 0 01-.23-.23.23.23 0 01.23-.23.23.23 0 01.23.23z" />
              </g>
              <g color="#000">
                <path
                  fill="#424f46"
                  d="M85.3 1.453V.4h-1.303v1.053zM18.681 208.083v.902h1.303v-.902z"
                />
                <path
                  fill="url(#A)"
                  d="M55.78 21.45c-17.769 0-32.073 14.303-32.073 32.071V737.48c0 17.768 14.304 32.072 32.072 32.072h281.442c17.768 0 32.072-14.304 32.072-32.072V53.52c0-17.768-14.304-32.072-32.072-32.072h-47.873a5.358 5.358 0 00-5.358 5.358v2.466c0 9.654-7.77 17.426-17.424 17.426H126.434a17.386 17.386 0 01-17.424-17.426v-2.466a5.358 5.358 0 00-5.358-5.358z"
                  transform="scale(.26458)"
                />
                <path fill="#57645b" d="M102.078 189.736h1.102V19.64h-1.102z" />
                <path
                  fill="#424f46"
                  d="M102.078 19.639h1.102v-1.303h-1.102zM102.078 191.04h1.102v-1.304h-1.102z"
                />
              </g>
              <g fill="#3d4a41" fill-rule="evenodd">
                <path
                  d="M37.924 11.58c-6.587-.168-19.14 1.826-32.031 16.313-18.75 21.071-1.965 8.392-1.965 8.392s11.518-17.856 27.59-20.178c16.071-2.321 11.16-3.93 11.16-3.93s-1.76-.52-4.754-.597z"
                  clip-path="url(#B)"
                  filter="url(#C)"
                  transform="matrix(-.26458 0 0 .26458 104.017 -.199)"
                />
                <path
                  d="M37.924 11.58c-6.587-.168-19.14 1.826-32.031 16.313-18.75 21.071-1.965 8.392-1.965 8.392s11.518-17.856 27.59-20.178c16.071-2.321 11.16-3.93 11.16-3.93s-1.76-.52-4.754-.597z"
                  clip-path="url(#D)"
                  filter="url(#E)"
                  transform="matrix(-.26458 0 0 -.26458 104.017 209.563)"
                />
                <path
                  d="M37.924 11.58c-6.587-.168-19.14 1.826-32.031 16.313-18.75 21.071-1.965 8.392-1.965 8.392s11.518-17.856 27.59-20.178c16.071-2.321 11.16-3.93 11.16-3.93s-1.76-.52-4.754-.597z"
                  clip-path="url(#F)"
                  filter="url(#G)"
                  transform="matrix(.26458 0 0 -.26458 0 209.563)"
                />
              </g>
            </svg> */}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage
