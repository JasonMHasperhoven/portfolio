import React from 'react';
import Section from 'components/Section';
import Grid from 'components/Grid';
import Card from 'components/Card';
import IconGithub from '../AboutMe/components/IconGithub';
import s from './Code.css';

const Code = () => {
  const title = 'Code';

  const description = (
    <p>
      My area of expertise is producing HTML, CSS and Javascript. I work on making
      ui components functional &mdash; using cutting-edge technologies &mdash;
      for all browsers and devices. I love software architecture and am very
      particular about performance and code quality.
    </p>
  );

  const labels = [
    'javascript',
    'typescript',
    'ruby',
    'php',
    'nodejs',
    'react',
    'webpack',
    'browserify',
    'babel',
    'svgo',
    'modernizr',
    'gsap',
    'postcss',
    'sass',
    'less',
    'bem',
    'responsiveness',
    'cross-browser',
    'cross-device',
    'gpu composition layers'
  ];

  const grid = [
    {
      id: 'colorFunction',
      colSpan: 1,
      content: (
        <Card className={s.colorFunction}>
          <div className={s.colorFunctionImage} />
          <div className={s.colorFunctionWrapper}>
            <a href="https://github.com/JasonMHasperhoven/sass-scss-function-color-weight"
              target="_blank"
              rel="noopener noreferrer"
              className={s.colorFunctionTitle}>
              <IconGithub attributes={{ className: s.colorFunctionIcon }} /> scss-color-weight
            </a>
            <div className={s.colorFunctionDesc}>
              A SCSS Function which makes a color lighter or darker depending on the weight.
            </div>
          </div>
        </Card>
      )
    },
    {
      id: 'multiModal',
      colSpan: 2,
      attributes: {
        'data-fade-delay-desktop': 150
      },
      content: (
        <Card colSpan={2} className={s.multiModal}>
          <div className={s.multiModalImage} />
          <div className={s.multiModalWrapper}>
            <a href="https://github.com/JasonMHasperhoven/MultiModal"
              target="_blank"
              rel="noopener noreferrer"
              className={s.multiModalTitle}>
              <IconGithub attributes={{ className: s.multiModalIcon }} /> MultiModal
            </a>
            <div className={s.multiModalDesc}>
              <p>
                A typescript/javascript library which supports multiple modals, is mobile friendly and has fancy animations.
              </p>
              <p>
                Built with #GSAP
              </p>
            </div>
          </div>
        </Card>
      )
    },
    {
      id: 'one',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 300
      },
      content: (
        <Card />
      )
    },
    {
      id: 'space1',
      colSpan: 1
    },
    {
      id: 'two',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 450
      },
      content: (
        <Card />
      )
    },
    // row
    {
      id: 'space2',
      colSpan: 1
    },
    {
      id: 'three',
      colSpan: 1,
      content: (
        <Card />
      )
    },
    {
      id: 'four',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 150
      },
      content: (
        <Card />
      )
    },
    {
      id: 'space3',
      colSpan: 1
    },
    {
      id: 'siz',
      colSpan: 1,
      attributes: {
        'data-fade-delay-desktop': 300
      },
      content: (
        <Card />
      )
    }
  ];

  return (
    <div className={s.code}>
      <Section
        title={title}
        description={description}
        labels={labels}>
        <Grid grid={grid} />
      </Section>
    </div>
  );
};

export default Code;
