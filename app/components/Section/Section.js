import React from 'react';
import fadeElements from 'helpers/fadeElements';
import parallaxSections from './parallax';
import s from './Section.css';

class Section extends React.Component {
  componentDidMount() {
    fadeElements.push(
      this.refs.title,
      ...this.props.description && this.props.labels ? [
        this.refs.desc,
        this.refs.labels
      ] : []
    );

    parallaxSections.push({
      background: this.refs.background,
      wrapper: this.refs.wrapper
    });
  }

  render() {
    return (
      <section className={s.section}>
        <div ref="background" className={s.sectionBg}></div>
        <div ref="wrapper" className={s.wrapper}>
          <h2 ref="title" className={s.title}>
            {this.props.title}
          </h2>
          {this.props.description && this.props.labels ? (
            <div className={s.row}>
              <div ref="desc" className={s.desc}>
                {this.props.description}
              </div>
              <div ref="labels" className={s.labels}>
                {this.props.labels.map(label => (
                  <span key={label} className={s.label}>
                    #{label}
                  </span>
                ))}
              </div>
            </div>
          ) : ''}
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default Section;
