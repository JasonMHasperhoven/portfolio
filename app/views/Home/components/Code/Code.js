import React from 'react';
import Section from 'components/Section';
import Grid from 'components/Grid';
import Card from 'components/Card';
import IconGithub from 'components/Icons/Github';
import s from './Code.css';
import sGrid from 'components/Grid/Grid.css';

const Code = () => {
  const title = 'Code';

  const description = (
    <p>
      I often <em>really</em> want to understand how things work, so coding perfectly suits me.
      My <a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
      target="_blank" rel="noopener noreferrer">INTJ</a> personality type is as such that, it
      makes me suited for intensive intellectual labor, intellectual challenges and creative approaches.
      I work on making ui components functional &mdash; using cutting-edge technologies &mdash; for all browsers and devices.
      I love thinking about architecture, extendability and am very particular about performance and code quality.
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
      attributes: {
        className: sGrid.areaSingle
      },
      content: (
        <Card className={s.colorFunction}>
          <div className={s.colorFunctionImage} />
          <a href="https://github.com/JasonMHasperhoven/sass-scss-function-color-weight"
            target="_blank"
            rel="noopener noreferrer"
            className={s.colorFunctionWrapper}>
            <div className={s.colorFunctionTitle}>
              <IconGithub attributes={{ className: s.colorFunctionIcon }} /> scss-color-weight
            </div>
            <div className={s.colorFunctionDesc}>
              A SCSS Function which makes a color lighter or darker depending on the weight.
            </div>
          </a>
        </Card>
      )
    },
    {
      id: 'multiModal',
      attributes: {
        className: sGrid.areaDouble,
        'data-fade-delay-desktop': 150
      },
      content: (
        <Card colSpan={2} className={s.multiModal}>
          <div className={s.multiModalImage} />
          <a href="https://github.com/JasonMHasperhoven/MultiModal"
            target="_blank"
            rel="noopener noreferrer"
            className={s.multiModalWrapper}>
            <div className={s.multiModalTitle}>
              <IconGithub attributes={{ className: s.multiModalIcon }} /> MultiModal
            </div>
            <div className={s.multiModalDesc}>
              <p>
                A typescript/javascript library which supports multiple modals, is mobile friendly and has fancy animations.
              </p>
              <p>
                Built with #GSAP
              </p>
            </div>
          </a>
        </Card>
      )
    },
    {
      id: 'one',
      attributes: {
        className: sGrid.areaSingle,
        'data-fade-delay-desktop': 300
      },
      content: (
        <Card className={s.railsModal}>
          <div className={s.railsModalImage} />
          <a href="https://github.com/JasonMHasperhoven/rails-modal-component"
            target="_blank"
            rel="noopener noreferrer" className={s.railsModalWrapper}>
            <div className={s.railsModalTitle}>
              <IconGithub attributes={{ className: s.railsModalIcon }} /> rails-modal-component
            </div>
            <div className={s.railsModalDesc}>
              A modal component for Ruby on Rails, to open up a confirm dialog.
            </div>
          </a>
        </Card>
      )
    },
    {
      id: 'space1',
      attributes: {
        className: sGrid.areaSingle
      }
    },
    {
      id: 'two',
      attributes: {
        className: sGrid.areaSingle,
        'data-fade-delay-desktop': 450
      },
      content: (
        <Card />
      )
    },
    // row
    {
      id: 'space2',
      attributes: {
        className: sGrid.areaSingle
      }
    },
    {
      id: 'three',
      attributes: {
        className: sGrid.areaSingle
      },
      content: (
        <Card className={s.railsDropdownMenu}>
          <div className={s.railsDropdownMenuImage} />
          <a href="https://github.com/JasonMHasperhoven/rails-dropdown-menu-component"
            target="_blank"
            rel="noopener noreferrer"
            className={s.railsDropdownMenuWrapper}>
            <div className={s.railsDropdownMenuTitle}>
              <IconGithub attributes={{ className: s.railsDropdownMenuIcon }} /> rails-dropdown-menu-component
            </div>
            <div className={s.railsDropdownMenuDesc}>
              A dropdown menu component for Ruby on Rails.
            </div>
          </a>
        </Card>
      )
    },
    {
      id: 'four',
      attributes: {
        className: sGrid.areaSingle,
        'data-fade-delay-desktop': 150
      },
      content: (
        <Card />
      )
    },
    {
      id: 'space3',
      attributes: {
        className: sGrid.areaSingle
      }
    },
    {
      id: 'siz',
      attributes: {
        className: sGrid.areaSingle,
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
