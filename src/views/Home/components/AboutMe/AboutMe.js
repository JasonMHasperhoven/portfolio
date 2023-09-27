import React from "react";
import Section from "../../../../components/Section";
import fadeElements from "../../../../helpers/fadeElements";
import IconLinkedIn from "../../../../components/Icons/LinkedIn";
import IconGithub from "../../../../components/Icons/Github";
import IconDribbble from "../../../../components/Icons/Dribbble";
import IconMail from "../../../../components/Icons/Mail";
import Selfie from "./components/Selfie";
import s from "./AboutMe.module.scss";

const up = (string) => <span className={s.copyUppercase}>{string}</span>;

class AboutMe extends React.Component {
  componentDidMount() {
    fadeElements.push(
      this.refs.title,
      this.refs.desc1,
      this.refs.desc2,
      this.refs.desc3,
      this.refs.icon1,
      // this.refs.icon2,
      this.refs.icon3,
      this.refs.selfie
    );
  }

  render() {
    return (
      <Section className={s.aboutMe} attributes={{ id: "aboutme" }}>
        <div className={s.row}>
          <div ref="selfie" className={s.selfie} data-fade-gt-md>
            <Selfie />
          </div>
          <h2 ref="title" className={s.title} data-fade-gt-md>
            Hallo! <sup className={s.titleSup}>hello in dutch</sup>
          </h2>
          <div className={s.content}>
            <div className={s.desc}>
              <p ref="desc1" className={s.copy} data-fade-gt-md>
                {up("My name Martijn Hasperhoven")}, also known as {up("Jason")}{" "}
                and I am a dutch {up("product ui/ux designer")} with a technical
                twist.
              </p>
              <p ref="desc2" className={s.copy} data-fade-gt-md>
                Alongside my decade of experience as a software engineer and
                product manager, I always found ways to contribute to designs as
                it’s my passion. This is why I’m now making the shift to
                full-time designer.
              </p>
              <p ref="desc3" className={s.copy} data-fade-gt-md>
                My philosophy is to get things {up("pixel-perfect")} and deliver
                a {up("polished")} user experience. I love building products
                that people {up("love")}.
              </p>
            </div>
            <div className={s.actions}>
              <span className="is-inline-block" ref="icon1" data-fade-gt-md>
                <a
                  href="mailto:martijn.hasperhoven@gmail.com"
                  className={s.icon}
                >
                  <IconMail />
                </a>
              </span>
              <span
                className="is-inline-block"
                ref="icon2"
                data-fade-gt-md
                data-fade-delay="100"
              >
                <a
                  href="https://www.linkedin.com/in/jason-m-hasperhoven/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.icon}
                >
                  <IconLinkedIn />
                </a>
              </span>
              <span
                className="is-inline-block"
                ref="icon3"
                data-fade-gt-md
                data-fade-delay="200"
              >
                <a
                  href="https://dribbble.com/jason_desixn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.icon}
                >
                  <IconDribbble />
                </a>
              </span>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default AboutMe;
