import React from "react";
import PropTypes from "prop-types";
import fadeElements from "../../helpers/fadeElements";
import parallaxSections from "./parallax";
import s from "./Section.module.scss";

class Section extends React.Component {
  componentDidMount() {
    if (this.props.title) {
      fadeElements.push(this.refs.title);
    }

    if (this.props.description && this.props.labels) {
      fadeElements.push(this.refs.desc, this.refs.labels);
    }

    parallaxSections.push({
      background: this.refs.background,
      wrapper: this.refs.wrapper,
    });
  }

  render() {
    return (
      <section
        className={`${s.section} ${
          this.props.className ? this.props.className : ""
        }`}
        {...this.props.attributes}
      >
        <div className={s.sectionInner}>
          <div ref="background" className={s.sectionBg} />
          <div ref="wrapper" className={s.wrapper}>
            {this.props.title && (
              <h2 ref="title" className={s.title} data-fade-gt-md>
                {this.props.title}
              </h2>
            )}
            {this.props.description && this.props.labels ? (
              <div className={s.row}>
                <div ref="desc" className={s.desc} data-fade-gt-md>
                  {this.props.description}
                </div>
                <div ref="labels" className={s.labels} data-fade-gt-md>
                  {this.props.labels.map((label) => (
                    <span key={label} className={s.label}>
                      #{label}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {this.props.children}
          </div>
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
  labels: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  attributes: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  children: PropTypes.node,
};

export default Section;
