import React from "react"
import * as FooterStyles from "./footer.module.scss"

const SocialLink = props => {
  return (
    <li>
      <a href={props.link} class={props.selector} target={props.targetWindow} role={props.role} title={props.title}>
        {props.children}
      </a>
    </li>
  )
}

export default function Footer() {
  return (
    <footer className="row">
      <section className="col_sm_12 col_md_12 col_xl_3 col_offset_xl_9">
        <ul className={FooterStyles.socialnav} aria-label="Social">
            <SocialLink link="https://www.behance.net/unit99" selector="behance" targetWindow="_blank" role="link" title="Behance">Behance</SocialLink>
            <SocialLink link="https://codepen.io/apeandme" selector="codepen" targetWindow="_blank" role="link" title="Codepen">Codepen</SocialLink>
            <SocialLink link="https://linkedin.com/in/sanjib-adhya" selector="linkedin" targetWindow="_blank" role="link" title="Linkedin">Linkedin</SocialLink>
            <SocialLink link="https://twitter.com/apeandme" selector="twitter" targetWindow="_blank" role="link" title="Twitter">Twitter</SocialLink>
        </ul>
      </section>
    </footer>
  )
}
