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
          className: sGrid.areaSingle,
          'data-fade-delay-media-lg': 0
        },
        content: (
          <Card>
            <MusicPlayer
              src="./assets/mp3/Execute.mp3"
              title="Execute"
              className={s.execute} />
          </Card>
        )
      },
      {
        id: 'lookbook',
        attributes: {
          className: sGrid.areaDouble,
          'data-fade-delay-media-lg': 450
        },
        content: (
          <Card colSpan={2}>
            <a className={s.lookbook}
              href="https://www.youtube.com/watch?v=vw2hjGJaZd4"
              target="_blank"
              rel="noopener nofollow">
              <IconPlay />
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
        id: 'bordering',
        attributes: {
          className: sGrid.areaSingle,
          'data-fade-delay-media-lg': 150
        },
        content: (
          <Card>
            <MusicPlayer
              src="./assets/mp3/Bordering.mp3"
              title="Bordering"
              className={s.bordering} />
          </Card>
        )
      },
      {
        id: 'space2',
        attributes: {
          className: sGrid.areaSingle
        }
      },
      {
        id: 'space3',
        attributes: {
          className: sGrid.areaSingle
        }
      },
      {
        id: 'space5',
        attributes: {
          className: sGrid.areaSingle
        }
      },
      {
        id: 'lipsticks',
        attributes: {
          className: sGrid.areaDouble,
          'data-fade-delay-media-lg': 450
        },
        content: (
          <Card colSpan={2}>
            <a className={s.lipsticks}
              href="https://www.youtube.com/watch?v=vGuDJddHkwM"
              target="_blank"
              rel="noopener nofollow">
              <IconPlay />
            </a>
          </Card>
        )
      },
      {
        id: 'space4',
        attributes: {
          className: sGrid.areaSingle
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
              src="./assets/mp3/Ha.mp3"
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
