import React from "react";
import Section from "../../../../components/Section";
import fadeElements from "../../../../helpers/fadeElements";
import CardOverlayToggle from "../../../../components/CardOverlayToggle";
import LazyImg from "./components/LazyImg";
import s from "./Design.module.scss";

function nth(n, i) {
  return (i + 1) % n === 0;
}

class Design extends React.Component {
  constructor() {
    super();

    this.title = "Design";

    this.description = (
      <p>
        Below is a showcase of some of the designs that I worked on over the
        years.
      </p>
    );

    this.srcs = [
      "/frames/Frame%201.png",
      "/frames/Frame%203.png",
      "/frames/Frame%204.png",
      "/frames/Frame%206.png",
      "/frames/Frame%207.png",
      "/frames/Frame%209.png",
      "/frames/Frame%2010.png",
      "/frames/Frame%2032.png",
      "/frames/Frame%2025.png",
      "/frames/Frame%2026.png",
      "/frames/Frame%2027.png",
      "/frames/Frame%2028.png",
      "/frames/Frame%2029.png",
      "/frames/Frame%2030.png",
      "/frames/Frame%2031.png",
    ].reverse();

    this.labels = [
      "figma",
      "sketch",
      "photoshop",
      "illustrator",
      "zeplin",
      "typography",
      "aesthetics",
      "usability",
      "animations",
      "transitions",
      "interactions",
      "svg",
      "pixel-densities",
    ];
  }

  componentDidMount() {
    this.srcs.forEach((id) => {
      fadeElements.push(this.refs[id]);
    });
  }

  render() {
    return (
      <Section
        title={this.title}
        description={this.description}
        labels={this.labels}
      >
        <div className={s.showcaseGrid}>
          {this.srcs.map((src, i) => (
            <div
              key={src}
              ref={src}
              className={s.showcaseGridItem}
              {...(nth(2, i) && {
                "data-fade-delay-media-md": 150,
                "data-fade-delay-media-lg": 150,
              })}
              {...(nth(3, i) && {
                "data-fade-delay-media-lg": 300,
              })}
            >
              <CardOverlayToggle
                id="img"
                imgId={src}
                img={<LazyImg src={src} width={324} height={243} radius={6} />}
              />
            </div>
          ))}
        </div>
      </Section>
    );
  }
}

export default Design;
