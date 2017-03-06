import React from 'react';
import Section from 'components/Section';
import Grid from 'components/Grid';
import Card from 'components/Card';
import MusicPlayer from './components/MusicPlayer';
import IconForward from 'components/Icons/Forward';
import IconPlay from 'components/Icons/Play';
import s from './Misc.css';
import sGrid from 'components/Grid/Grid.css';
import { overlayToggles } from 'components/Overlay';
import { uniqueId } from 'helpers/uniqueId';

class Misc extends React.Component {
  constructor() {
    super();

    this.title = 'Miscellaneous';

    this.description = (
      <p>
        I do creative as well as logical things. As long as we’re creating dreams,
        I’m all in. I have an extensive background in music production, I have
        experience with video editing and know how to handle a DSLR camera as well.
      </p>
    );

    this.labels = [
      'cubase',
      'logic pro',
      'softube',
      'fabfilter',
      'u-he',
      'atom',
      'terminal',
      'git',
      'final cut pro',
      'adobe after effects'
    ];

    this.grid = [
      {
        id: 'execute',
        attributes: {
          className: sGrid.areaSingle
        },
        content: (
          <Card>
            <MusicPlayer
              src="./assets/static/mp3/Execute.mp3"
              title="Execute"
              className={s.execute} />
          </Card>
        )
      },
      {
        id: 'lookbook',
        attributes: {
          className: sGrid.areaDouble,
          'data-fade-delay-media-md': 150
        },
        content: (
          <Card colSpan={2}>
            <a className={s.lookbook}
              href="https://www.youtube.com/watch?v=vw2hjGJaZd4"
              target="_blank"
              rel="noopener nofollow">
              <span className={s.lookbookPlayCircle}>
                <IconPlay attributes={{ className: s.lookbookPlayIcon }} />
              </span>
            </a>
          </Card>
        )
      },
      {
        id: uniqueId(),
        attributes: {
          className: sGrid.areaSingle
        }
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaMdOnly}`
        }
      },
      {
        id: 'bordering',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-lg': 300
        },
        content: (
          <Card>
            <MusicPlayer
              src="./assets/static/mp3/Bordering.mp3"
              title="Bordering"
              className={s.bordering} />
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
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtLgOnly}`
        }
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaGtLgOnly}`
        }
      },
      {
        id: 'lipsticks',
        attributes: {
          className: sGrid.areaDouble,
          'data-fade-delay-media-md': 150
        },
        content: (
          <Card colSpan={2}>
            <a className={s.lipsticks}
              href="https://www.youtube.com/watch?v=vGuDJddHkwM"
              target="_blank"
              rel="noopener nofollow">
              <span className={s.lipsticksPlayCircle}>
                <IconPlay attributes={{ className: s.lipsticksPlayIcon }} />
              </span>
            </a>
          </Card>
        )
      },
      {
        id: uniqueId(),
        attributes: {
          className: `${sGrid.areaSingle} ${sGrid.areaMdAnythingBut}`
        }
      },
      {
        id: 'ha',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-lg': 300
        },
        content: (
          <Card>
            <MusicPlayer
              src="./assets/static/mp3/Ha.mp3"
              title="Ha!"
              className={s.ha} />
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

export default Misc;
