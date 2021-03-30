import React from "react"
import * as HeaderStyles from "./header.module.scss"

//about panel trigger event
function aboutTrigger(e) {
  e.preventDefault()
  //console.log('clicked');

  const aboutContent = document.body.querySelector(".resume_about")
  const trigger = document.body.querySelector("#about_trigger")

  trigger.onClick = aboutContent.classList.add("show")
}

//list item with link
const Listlink = props => {
  return (
    <li>
      <a
        href={props.link}
        target={props.targetWindow}
        id={props.id}
        onClick={props.funcName}
        className="resume_nav_color resume_light resume_25pt"
      >
        {props.children}
      </a>
    </li>
  )
}

export default function Header() {
  return (
    <header className="row">
      <section
        className="col_sm_8 col_offset_sm_4 col_md_4 col_offset_md_8 col_lg_3 col_offset_lg-9 col_xl_2 col_offset_xl_10"
        aria-label="main"
      >
        <ul className={HeaderStyles.nav}>
          <Listlink link="#" id="about_trigger" funcName={aboutTrigger}>
            About
          </Listlink>
          <Listlink link="sanjib_adhya_resume.pdf" targetWindow="_blank">
            Resume
          </Listlink>
        </ul>
      </section>
    </header>
  )
}
