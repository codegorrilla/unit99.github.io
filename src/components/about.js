import React from "react"

//Name inside about content
const NameText = props => {
  return (
    <h1 className="resume_70pt resume_black resume_content_color">
      {props.children}
    </h1>
  )
}

//resume contact info
const Contact = props => {
  return (
    <div className="resume_contact">
      <dl className="col_xl_4 resume_20pt resume_light resume_content_color">
        <dt className="resume_25pt resume_bold">{props.medium}</dt>
        {props.children}
      </dl>
    </div>
  )
}

//About content context
const AboutContent = props => {
  return (
    <div className="col_sm_12">
      <hgroup>
        <h3 className="resume_25pt resume_normal resume_content_color">
          {props.greetText}
        </h3>
        <NameText>
          Sanjib
          <br />
          Adhya
        </NameText>
      </hgroup>
      <p className="resume_light resume_content_color resume_brief">
        {props.children}
      </p>
      <Contact medium="Email">
        <dd>feedback@unit99.com</dd>
      </Contact>
      <Contact medium="Phone">
        <dd>(+91) 900 769 6161</dd>
        <dd>(+91) 891 089 3028</dd>
      </Contact>
    </div>
  )
}

export default function About() {
  return (
      <section id="about" className="resume_about">
        <button className="hide_trigger">
          <span className="resume_bold">hide</span>
        </button>
        <AboutContent greetText="Hello.My name is">
          Web UI designer from the city of Calcutta with a focus in user
          experience , interaction design and front end web development.
        </AboutContent>
      </section>
  )
}
