import React from "react"
import * as FooterStyles from "./footer.module.scss"

const SocialLink = props => {
  return (
    <li>
      <a href={props.link} class={props.selector} target={props.targetWindow} role={props.role}>
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
            <SocialLink link="#" selector="behance" targetWindow="_blank" role="link">Behance</SocialLink>
            <SocialLink link="#" selector="codepen" targetWindow="_blank" role="link">Codepen</SocialLink>
            <SocialLink link="#" selector="linkedin" targetWindow="_blank" role="link">Linkedin</SocialLink>
            <SocialLink link="#" selector="twitter" targetWindow="_blank" role="link">Twitter</SocialLink>
        </ul>
      </section>
    </footer>
  )
}
