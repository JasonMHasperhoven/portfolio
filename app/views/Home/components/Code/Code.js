import React from 'react';
import Section from 'components/Section';
import Grid from 'components/Grid';
import Card from 'components/Card';
import CardOverlayToggle from 'components/CardOverlayToggle';
import IconGithub from 'components/Icons/Github';
import IconForward from 'components/Icons/Forward';
import s from './Code.css';
import sGrid from 'components/Grid/Grid.css';
import { overlayToggles } from 'components/Overlay';
import { uniqueId } from 'helpers/uniqueId';

class Code extends React.Component {
  constructor() {
    super();

    this.title = 'Code';

    this.intjLink = (
      <a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator"
        target="_blank"
        rel="noopener noreferrer">
        INTJ
      </a>
    );

    this.description = (
      <p>
        My {this.intjLink} personality type is as such that, it makes me suited for
        intensive intellectual challenges and creative approaches, so coding perfectly
        suits me. I work on making ui components functional &mdash; using cutting-edge
        technologies &mdash; for all browsers and devices. I love thinking about
        architecture, extendability and am very particular about performance and code
        quality.
      </p>
    );

    this.labels = [
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

    this.grid = [
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
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaMdOnly}`
        }
      },
      {
        id: 'multiModal',
        attributes: {
          className: sGrid.areaDouble,
          'data-fade-delay-media-md': 150,
          'data-fade-delay-media-lg': 150
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
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`
        }
      },
      {
        id: 'railsModalComponent',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-lg': 300
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
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`
        }
      },
      {
        id: 'articles',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-s': 150,
          'data-fade-delay-media-md': 150,
          'data-fade-delay-media-lg': 0
        },
        content: (
          <Card className={s.cardArticles}>
            <CardOverlayToggle id="articles" className={s.cardArticlesImage} />
          </Card>
        )
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtLgOnly}`
        }
      },
      {
        id: 'optimization',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-lg': 150
        },
        content: (
          <Card className={s.cardOptimization}>
            <CardOverlayToggle id="optimization" className={s.cardOptimizationImage} />
          </Card>
        )
      },
      {
        id: 'railsDropdownMenuComponent',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-s': 150,
          'data-fade-delay-media-md': 150,
          'data-fade-delay-media-lg': 300
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
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`
        }
      },
      {
        id: 'technologies',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-md': 300,
          'data-fade-delay-media-lg': 450
        },
        content: (
          <Card className={s.cardTechnologies}>
            <CardOverlayToggle id="technologies" className={s.cardTechnologiesImage} />
          </Card>
        )
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtMdOnly}`
        }
      },
      {
        id: 'simpl',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-s': 150,
          'data-fade-delay-media-md': 0
        },
        content: (
          <Card className={s.cardSimpl}>
            <CardOverlayToggle id="simpl" className={s.cardSimplImage} />
          </Card>
        )
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaLtMdOnly}`
        }
      },
      {
        id: 'onTransitionEnd',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-md': 150
        },
        content: (
          <Card className={s.onTransitionEnd}>
            <div className={s.onTransitionEndImage} />
            <a href="https://github.com/JasonMHasperhoven/onTransitionEnd"
              target="_blank"
              rel="noopener noreferrer" className={s.onTransitionEndWrapper}>
              <div className={s.onTransitionEndTitle}>
                <IconGithub attributes={{ className: s.onTransitionEndIcon }} /> onTransitionEnd
              </div>
              <div className={s.onTransitionEndDesc}>
                A prototype for EventTarget which fires onTransitionEnd and provides
                fallback for legacy browsers.
              </div>
            </a>
          </Card>
        )
      },
    ];
  }

  render() {
    return (
      <Section
        title={this.title}
        description={this.description}
        labels={this.labels}>
        <Grid grid={this.grid} />
      </Section>
    );
  }
};

export default Code;
