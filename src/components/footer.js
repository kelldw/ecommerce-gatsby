import React from "react"
import FooterLinks from "./footer-links"
import { Callout, Blurb } from "./footer-styles"
import CalloutImage from "../images/callout.jpg"

const Footer = () => {
  return (
    <footer>
      <Callout image={CalloutImage}>
        <h2>
          "Great Selection of Relevant and High-quality items you can rely on"
        </h2>
        <p>Hansel Andersen</p>
      </Callout>
      <FooterLinks />
    </footer>
  )
}

export default Footer
