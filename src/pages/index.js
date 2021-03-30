import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import Footer from "../components/footer"
import About from "../components/about"
import SEO from "../components/seo"
import LeftShape from "../svg/leftshape.inline.svg"

//text container for hero section
const HeroText = props => {
  return (
    <section className="col_lg_12 resume_title__wrapper">
      <hgroup className="resume_title resume_header_color resume_90pt">
        <h3 className="resume_25pt resume_light">{props.resumeName}</h3>
        <h1 className="resume_black">{props.children}</h1>
      </hgroup>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <SEO title=" " description="" />
      <Header></Header>
      <Container>
        <LeftShape />
        <HeroText resumeName="Sanjib Adhya">
          UI designer &amp; <br />
          aspiring front end <br /> web engineer
        </HeroText>
      </Container>
      <Footer></Footer>
      <About />
    </div>
  )
}
